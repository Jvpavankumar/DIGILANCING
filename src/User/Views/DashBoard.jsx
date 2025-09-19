import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

import LeftNav from "../../User/Components/LeftNav";
import GreetingSection from '../../User/Components/GreetingSection';
import RecentlyQualified from '../../User/Components/RecentlyQualified';
import UserCourses from '../../User/Components/UserCourses';
import TimeSpendingChart from '../../User/Components/TimeSpendingChart';
import Section2 from '../../Components/Packages/Section2';
import packagesData from '../../Data/packagesData';
import BestInstructors from '../../User/Components/BestInstructors';
import SupportSystem from '../../User/Components/SupportSystem';
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
 const [currentPackage, setCurrentPackage] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();  
    navigate("/login");
};
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

 useEffect(() => {

    const packageId = sessionStorage.getItem("packageId")
    if (!packageId) return;

    const matchedPackage = Object.values(packagesData).find(
      (pkg) => pkg.id === packageId
    );

    setCurrentPackage(matchedPackage);
  }, []);
  return (
    <div className="flex flex-col lg:flex-row p-2">
      {/* Sidebar */}
      <LeftNav />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-4 mr-4">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

          {/* Search & Logout */}
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="Search Support"
                className="w-full rounded-full bg-gray-100 border border-gray-300 px-4 py-2 pl-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
              aria-label="Logout"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
          <motion.div
            className="lg:col-span-3"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <GreetingSection />
           {currentPackage ? (
              <Section2 courses={currentPackage.courses} />
            ) : (
              <p className="text-gray-500">No courses found for your package.</p>
            )}
          </motion.div>

          <motion.div
            className="col-span-1"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <div className="flex flex-col md:flex-row lg:flex-col gap-4">
              <motion.div className="flex-1 w-full" variants={fadeIn} custom={1.2}>
                <RecentlyQualified />
              </motion.div>
              <motion.div className="flex-1 w-full" variants={fadeIn} custom={1.4}>
                <TimeSpendingChart />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="col-span-1 lg:col-span-4 mt-8"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <BestInstructors />
        </motion.div>

        <motion.div
          className="lg:col-span-4"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={2.2}
        >
          <SupportSystem />
        </motion.div>
      </div>
    </div>
  );
};

export default DashBoard;
