import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import instructorIcon from '../../assets/instructor.svg';
import timing_icon from '../../assets/timing_icon.svg';
import Class_icon from '../../assets/Class_icon.svg';
import upgrade from '../../assets/upgrade.svg';


import packagesData from '../../Data/packagesData';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 140, damping: 18, mass: 0.6 },
  },
};

// top of file
const PAGE_SIZE = 8;
const INITIAL_LOAD = 8;
const MAX_ITEMS = 8; // <-- new


function normalizeLessons(modules) {
  if (typeof modules === 'number') return modules;
  const m = String(modules).match(/\d+/);
  return m ? parseInt(m[0], 10) : 0;
}

function Section2() {
  // 1) Flatten all package courses
  // 1) Flatten all package courses (hard-cap to 8)
  const flattenedCourses = useMemo(() => {
    const list = [];
    Object.values(packagesData).forEach((pkg) => {
      (pkg?.courses || []).forEach((c) => {
        list.push({
          title: c.title,
          instructor: c.tutor,
          duration: c.hours,
          lessons: normalizeLessons(c.modules),
          imageUrl: c.imageUrl,
          locked: false,
        });
      });
    });
    // Optional stable sort
    // list.sort((a, b) => a.title.localeCompare(b.title));

    return list.slice(0, MAX_ITEMS); // <-- only take 8
  }, []);


  // 2) Infinite loading state
  const [visibleCount, setVisibleCount] = useState(
    Math.min(INITIAL_LOAD, flattenedCourses.length)
  );
  const sentinelRef = useRef(null);

  const hasMore = visibleCount < flattenedCourses.length;
  const visibleCourses = useMemo(
    () => flattenedCourses.slice(0, visibleCount),
    [flattenedCourses, visibleCount]
  );

  // 3) IntersectionObserver to load more
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + PAGE_SIZE, flattenedCourses.length)
          );
        }
      },
      { root: null, rootMargin: '200px 0px', threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [flattenedCourses.length]);

  // Keep visibleCount sane if data size changes
  useEffect(() => {
    setVisibleCount((prev) =>
      Math.min(Math.max(prev, INITIAL_LOAD), flattenedCourses.length)
    );
  }, [flattenedCourses.length]);



  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMsg, setPopupMsg] = useState("Launching soon — stay tuned!");

  const onWatchClick = (e, course) => {
    e.preventDefault();
    setPopupMsg(`"${course.title}" is launching soon — stay tuned!`);
    setPopupOpen(true);

    // auto-close
    window.clearTimeout(onWatchClick._t);
    onWatchClick._t = window.setTimeout(() => setPopupOpen(false), 2500);
  };

  // close on ESC
  useEffect(() => {
    const onKey = (ev) => ev.key === "Escape" && setPopupOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="mt-8 px-4 font-outfit">
      <motion.div
        className="grid max-w-screen-xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {visibleCourses.map((course, index) => {
          const isLocked = !!course.locked;
          return (
            <motion.div
              key={`${course.title}-${index}`}
              variants={card}
              whileHover={{ y: -4 }}
              className="w-full flex flex-col border border-gray-300 rounded-3xl overflow-hidden bg-white shadow-lg relative"
            >
              {/* Image */}
              <motion.div
                className="relative w-full h-48"
                initial={{ scale: 1.02 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <motion.img
                  src={course.imageUrl}
                  alt={course.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                  decoding="async"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 15 }}
                />
                {isLocked && (
                  <>
                    <motion.div
                      className="absolute inset-0 bg-white opacity-50 blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 flex justify-center items-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 150, damping: 12 }}
                    >
                      <img src={upgrade} alt="Upgrade" className="w-16 h-16 opacity-80" />
                    </motion.div>
                  </>
                )}
              </motion.div>

              {/* Body */}
              <div className="flex flex-col flex-grow bg-white p-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg md:text-xl line-clamp-2">
                    {course.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center px-2 py-1.5 mt-3 rounded-full border border-[#D7D7D7] w-fit gap-2">
                      <img src={timing_icon} className="w-5" alt="duration" />
                      <p className="text-[12px] font-medium text-gray-500">{course.duration}</p>
                    </div>
                    <div className="flex items-center px-2 py-1.5 mt-3 rounded-full border border-[#D7D7D7] w-fit gap-2">
                      <img src={Class_icon} className="w-5" alt="lessons" />
                      <p className="text-[12px] font-medium text-gray-500">
                        {course.lessons} Lessons
                      </p>
                    </div>
                  </div>

                  <motion.div
                    className="flex items-center mt-6 py-3 space-x-2"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                  >
                    <img
                      src={instructorIcon}
                      alt={course.instructor}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="text-sm text-[#A8A8A8]">Instructor</p>
                      <p className="text-[18px] text-[#000] ">{course.instructor}</p>
                    </div>
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl text-sm sm:text-base ${isLocked ? 'bg-[#F4FAFF] text-[#0162D9]' : 'bg-[#0162D9] text-white'
                    }`}
                  onClick={(e) => onWatchClick(e, course)}
                >
                  {isLocked ? 'Upgrade Path to unlock' : 'Watch'}
                </motion.button>

              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Infinite-scroll sentinel + loader */}
      <div ref={sentinelRef} className="h-10 w-full" />

      {popupOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-live="polite"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setPopupOpen(false)}
          />

          {/* Popup card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative mx-4 w-full max-w-md rounded-2xl bg-white shadow-2xl border border-gray-200 p-6 text-center"
            initial={{ scale: 0.9, y: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1, transition: { type: 'spring', stiffness: 220, damping: 18 } }}
          >
            <div className="text-base font-semibold">Launching soon</div>
            <div className="mt-2 text-sm text-gray-600">{popupMsg}</div>

            <motion.div
              className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-gray-200 overflow-hidden"
              initial={{}}
              animate={{}}
            >
              <motion.div
                className="h-full w-24 bg-gray-400"
                initial={{ x: -96 }}
                animate={{ x: 0 }}
                transition={{ duration: 2.3, ease: 'easeOut' }}
              />
            </motion.div>

            <button
              onClick={() => setPopupOpen(false)}
              className="mt-5 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border border-gray-300 hover:bg-gray-50"
            >
              Okay
            </button>
          </motion.div>
        </motion.div>
      )}



    </div>
  );
}

export default Section2;
