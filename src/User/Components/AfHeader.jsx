import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import icon from "../../User/Assets/icon.svg";

const Loader = () => (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-md bg-black/30">
    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AfHeader = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const isOffers = location.pathname === "/Offers";
  const isAchievements = location.pathname === "/Acheivements";

  const renderTitle = () => {
    if (isOffers) return "OFFERS";
    if (isAchievements) return "ACHIEVEMENTS";
    return "AFFILIATE DASHBOARD";
  };
  const user = JSON.parse(sessionStorage.getItem("user") || "null");
  const name = user?.fullname
  const email = user?.email
 const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      sessionStorage.clear();
      navigate("/");
    }, 2000); // 2 seconds loader delay
  };
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#002B54] px-4 py-3 flex items-center justify-between ">

      {/* Title */}
      <h1 className="text-lg sm:text-xl md:text-xl bg-[#002B54] font-bold text-white truncate ml-16 lg:ml-65">
        {renderTitle()}
      </h1>

      {/* Large screens: profile + details + logout */}
      <div className="hidden lg:flex items-center space-x-4">
        <img
          src={icon}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-white font-semibold text-base">
            {name}
          </span>
          <span className="text-gray-300 text-sm">
            {email}
          </span>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none flex-shrink-0"
          aria-label="Logout"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-700"
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

      {/* Small screens: only profile icon */}
      <div className="lg:hidden">
        <img
          src={icon}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
          onClick={() => setIsPopupOpen(true)}
        />
      </div>

      {/* Popup for small screens */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={() => setIsPopupOpen(false)}
            >
              ✕
            </button>

            {/* Profile Info */}
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={icon}
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-gray-900 font-semibold text-base">
                  {name}
                </span>
                <span className="text-gray-500 text-sm">
                  {email}
                </span>
              </div>
            </div>

            {/* Logout */}
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-2 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
     {loading &&
        ReactDOM.createPortal(
          <Loader />,
          document.body
        )}
    </div>

  );
};

export default AfHeader;
