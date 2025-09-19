import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";

import TickBlue from "../assets/Tick_2.svg";
import TickPurple from "../assets/Tick_3.svg";
import TickRed from "../assets/Tick_4.svg";
import TickGreen from "../assets/Tick_1.svg";

import Card1 from "../assets/Card1.svg";
import Card2 from "../assets/Card2.svg";
import Card3 from "../assets/Card3.svg";
import Card4 from "../assets/Card4.svg";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.12 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const cardVariant = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 16 }
  }
};

const slideVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.35, ease: "easeOut" }
  }
};

const Section3 = () => {
  const location = useLocation();
  const isRegisterPage = location.pathname === '/Register'; 

  const packages = [
    {
      icon: Card1,
      title: "Basic Package",
      description: "Ideal for freelancers ready to expand their skills",
      price: "5,999",
      features: [
        "10+ Hours of Content",
        "Basic Project Templates",
        "Community Access",
        "Email Support",
        "3 Practice Projects",
      ],
      id:"DIGI0001",
      iconImage: TickGreen,
      buttonGradient: "linear-gradient(135deg, #10B682 0%, #0D9887 100%)",
    },
    {
      icon: Card2,
      title: "Standard Package",
      description: "Perfect for advanced learners looking to specialize",
      price: "9,999",
      features: [
        "25+ Hours of Content",
        "Premium Project Templates",
        "1-on-1 Mentorship",
        "Priority Support",
        "5 Real-World Projects",
      ],
      id:"DIGI0002",
      iconImage: TickBlue,
      buttonGradient: "linear-gradient(135deg, #3384EC 0%, #108FBD 100%)",
    },
    {
      icon: Card3,
      title: "Advanced Package",
      description: "For freelancers scaling their business",
      price: "16,999",
      features: [
        "50+ Hours of Content",
        "Automation Tools",
        "Advanced Challenges",
        "Dedicated Community Group",
        "10 Live Projects",
      ],
      id:"DIGI0003",
      iconImage: TickPurple,
      buttonGradient: "linear-gradient(135deg, #A054F5 0%, #5E49E8 100%)",
    },
    {
      icon: Card4,
      title: "Premium Package",
      description: "Become a top-tier freelancer with premium training",
      price: "21,999",
      features: [
        "100+ Hours of Content",
        "Lifetime Access",
        "Exclusive Webinars",
        "Direct Client Leads",
        "Unlimited Projects",
      ],
      id:"DIGI0004",
      iconImage: TickRed,
      buttonGradient: "linear-gradient(135deg, #F03B63 0%, #DD2975 100%)",
    },
     {
      icon: Card4,
      title: "Ultimate Package",
      description: "Become a top-tier freelancer with premium training",
      price: "29,999",
      features: [
        "100+ Hours of Content",
        "Lifetime Access",
        "Exclusive Webinars",
        "Direct Client Leads",
        "Unlimited Projects",
      ],
      id:"DIGI0005",
      iconImage: TickRed,
      buttonGradient: "linear-gradient(135deg, #F03B63 0%, #DD2975 100%)",
    },
  ];

  return (

    <motion.section
      className="py-20 max-w-screen-xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {!isRegisterPage && (
        <div className="text-center px-4">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-semibold font-['Outfit'] leading-snug bg-gradient-to-r from-[#5E4BDA] to-[#2C71A1] bg-clip-text text-transparent"
            variants={fadeUp}
          >
            Choose Your Path to Success
          </motion.h2>
          <motion.p
            className="mt-2 text-[#797979] text-[14px] sm:text-lg font-light max-w-2xl mx-auto"
            variants={fadeUp}
          >
            Transform your freelancing career with our comprehensive learning
            bundles, designed for every stage of your journey
          </motion.p>
        </div>
      )}

      <div className="mt-10 hidden sm:grid px-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:px-8 lg:px-5">
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="will-change-transform"
          >
            <Card {...pkg} />
          </motion.div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden mt-10 px-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
            renderBullet: (index, className) =>
              `<span class="${className} custom-dot"></span>`,
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
        >
          {packages.map((pkg, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.6 }}
                variants={slideVariant}
              >
                <Card {...pkg} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination container (outside Swiper, right below it) */}
        <div className="custom-swiper-pagination mt-4 flex justify-center"></div>
      </div>
    </motion.section>
  );
};

export default Section3;
