import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Headset, Package, Home, Award, Network, LogOut, X } from 'lucide-react';

const LeftNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Using useLocation to track the current path
  const location = useLocation();

  const getActiveMenu = () => {
    switch (location.pathname) {
      case '/DashBoard':
        return 'DashBoard';
      case '/Certificates':
        return 'certificates';
      case '/AffiliatePanel':
        return 'affiliate';
      case '/Support':
        return 'support';
      case '/LogOut':
        return 'logout';
      default:
        return 'UserHome';
    }
  };

  const [activeMenu, setActiveMenu] = useState(getActiveMenu); // Initially set based on the current path

  useEffect(() => {
    // Update active menu when the location changes
    setActiveMenu(getActiveMenu());

    // Disable/Enable body scroll when sidebar is open/closed
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    // Cleanup on component unmount or isOpen change
    return () => {
      document.body.style.overflow = 'auto'; // Ensure scrolling is enabled when component unmounts
    };
  }, [isOpen, location]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button for Sidebar */}
      <button
        onClick={toggleSidebar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="sidebar"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>


      <aside
        id="sidebar"
        className={`fixed top-0 left-0 z-40 h-screen transition-transform transform
    ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
    lg:top-[2vh] lg:left-2 lg:w-64 lg:h-[96vh] lg:translate-x-0
    ${isOpen ? 'rounded-none' : 'lg:rounded-3xl'} lg:rounded-3xl
    w-[50vw] max-w-sm
  `}
        aria-label="Sidebar"
      >


        <div className="h-full bg-[#F3F5F2] shadow-xl flex flex-col p-2 lg:rounded-3xl rounded-none lg:w-64 lg:h-full lg:relative lg:flex-shrink-0 transition-all duration-300 ease-in-out">
          {/* Logo Section */}
          <div className="flex items-center justify-between  h-16">
            <span className="text-xl font-semibold text-[#002B54]">DIGI LANCING</span>
            <button
              onClick={() => setIsOpen(false)} // Close the sidebar on clicking "X"
              className="text-gray-500 hover:text-gray-700 lg:hidden"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-grow">
            <ul>
              <li className="mb-2">
                <Link
                  to="/"
                  className={`flex items-center text-sm text-gray-700 hover:bg-[#32406d] hover:text-white font-medium p-2 rounded-md ${activeMenu === 'UserHome' ? 'border-l-4 border-[#32406d] text-[#32406d]' : ''}`}
                >
                  <Home className="w-5 h-5 mr-3" />
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/DashBoard"
                  className={`flex items-center text-sm text-gray-700 hover:bg-[#32406d] hover:text-white font-medium p-2 rounded-md ${activeMenu === 'DashBoard' ? 'border-l-4 border-[#32406d] text-[#32406d]' : ''}`}
                >
                  <LayoutDashboard className="w-5 h-5 mr-3 fill-[#002B54]" />
                  Dashboard
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/Courses"
                  className={`flex items-center text-sm text-gray-700 hover:bg-[#32406d] hover:text-white font-medium p-2 rounded-md ${activeMenu === 'courses' ? 'border-l-4 border-[#32406d] text-[#32406d]' : ''}`}
                >
                  <Package className="w-5 h-5 mr-3" />
                  My Courses
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/Certificates"
                  className={`flex items-center text-sm text-gray-700 hover:bg-[#32406d] hover:text-white font-medium p-2 rounded-md ${activeMenu === 'certificates' ? 'border-l-4 border-[#32406d] text-[#32406d]' : ''}`}
                >
                  <Award className="w-5 h-5 mr-3 fill-[#002B54]" />
                  Certificates
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/AffiliatePanel"
                  className={`flex items-center text-sm text-gray-700 hover:bg-[#32406d] hover:text-white font-medium p-2 rounded-md ${activeMenu === 'affiliate' ? 'border-l-4 border-[#32406d] text-[#32406d]' : ''}`}
                >
                  <Network className="w-5 h-5 mr-3" />
                  Affiliate Panel
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/Support"
                  className={`flex items-center text-sm text-gray-700 hover:bg-[#32406d] hover:text-white font-medium p-2 rounded-md ${activeMenu === 'support' ? 'border-l-4 border-[#32406d] text-[#32406d]' : ''}`}
                >
                  <Headset className="w-5 h-5 mr-3" />
                  Support
                </Link>
              </li>
            </ul>


          </div>

          {/* Footer Links */}
          {/* <div>
            <ul>
              <li className='mb-5'>
                <Link
                  to="/LogOut"
                  className={`flex items-center text-sm text-gray-700 hover:bg-[#32406d] hover:text-white font-medium p-2 rounded-md ${activeMenu === 'logout' ? 'border-l-4 border-[#32406d] text-[#32406d]' : ''}`}
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Log Out
                </Link>
              </li>
            </ul>
          </div> */}
          {/* Premium Section */}
          <div
            className="text-white p-8 mb-20 lg:mb-2 rounded-lg shadow-lg text-center mt-5 max-w-full"
            style={{
              background: 'linear-gradient(to top right, #6a1b9a, #ab47bc, #ce93d8)', // adjusted for smooth gradient
              wordBreak: 'keep-all', // prevent breaking words
              whiteSpace: 'nowrap', // prevent title breaking into two lines
            }}
          >
            <h2 className="text-sm font-semibold mb-2 whitespace-nowrap overflow-hidden ">
              Upgrade Your Plan
            </h2>
            <p className="text-xs text-white mb-4">Accessible to 15+ Courses</p>
            <div className="flex justify-center mt-5">
              <button className="bg-white text-black py-3 px-8 rounded-full shadow-md hover:bg-[#ff5e00] transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-2 font-semibold whitespace-nowrap">
                Get Started
                <span className="text-xl font-bold">→</span>
              </button>
            </div>
          </div>

        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          id="overlay"
          className="fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default LeftNav;
