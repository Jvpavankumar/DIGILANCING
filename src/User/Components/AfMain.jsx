import React from "react";
import profile from "../Assets/profile.png";
import walletIcon from "../Assets/wallet.png";
import upro from "../Assets/u_pro.png";

export default function MainDashboard() {
  return (
    <main className="flex-1 p-0 bg-[#002E5D] overflow-y-auto">
      <div className="flex flex-col text-[#000000] font-sans">

        {/* 🔹 Top Section with Curved Background */}
        <div className="bg-white rounded-b-[40px] shadow-lg px-4 sm:px-8 py-6 sm:py-10">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Profile Card */}
            <div className="relative w-full lg:w-[350px] h-[220px] rounded-2xl overflow-hidden shadow-md flex-shrink-0">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover px-6"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl shadow-md px-4 py-3 flex items-center justify-between">
                <div className="flex flex-col">
                  <h2 className="text-sm sm:text-base font-semibold text-black">
                    John Dae
                  </h2>
                  <p className="text-[11px] sm:text-xs text-gray-600 truncate">
                    ID-19713613103183108 |{" "}
                    <span className="text-[#0088FF] font-medium">
                      Pro member
                    </span>
                  </p>
                </div>
                <button className="bg-gradient-to-r from-[#1E6FFF] to-[#4A90E2] p-2 sm:p-3 rounded-full text-white shadow-md">
                  ➜
                </button>
              </div>
            </div>

            {/* Earnings Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 flex-1">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="bg-[#1E6FFF] rounded-2xl p-4 sm:p-6 flex flex-col justify-center shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={walletIcon}
                      alt="wallet"
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain bg-white rounded-full p-1"
                    />
                    <div>
                      <p className="text-white text-xs sm:text-sm">
                        All Time Earnings
                      </p>
                      <p className="text-white text-lg sm:text-xl font-bold">
                        ₹ 31,12,481 /-
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 Bottom Section */}
        <div className="bg-white rounded-t-[40px] shadow-lg p-4 sm:p-8 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">

            {/* LEFT big section → 7/10 on large screens */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Earning Graph */}
              <div className="bg-[#F9FAFB] rounded-2xl p-4 sm:p-6 shadow-sm">
                <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                  <h3 className="font-semibold text-lg">Earning Graph</h3>
                  <span className="text-xs bg-[#E6F7E9] text-[#1E6FFF] px-0 py-2 rounded-full">
                    Last 6 months
                  </span>
                </div>
                <div className="flex items-end justify-between gap-3 sm:gap-2 h-[180px] px-2 sm:px-6 pb-2">
                  {[70, 90, 110, 140, 160, 180].map((barHeight, idx) => (
                    <div key={idx} className="flex flex-col items-center flex-1">
                      <div
                        className="rounded-xl w-full max-w-[32px]"
                        style={{
                          height: `${barHeight}px`,
                          background: "linear-gradient(180deg, #C9E7FF 0%, #5BBEFF 100%)",
                          boxShadow: "0 4px 16px 0 rgba(30,111,255,0.07)",
                        }}
                      />
                      <span className="text-xs mt-2 text-[#062F43]">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Referrals + Leaderboard */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Recent Referrals */}
                <div className="bg-[#F9FAFB] rounded-2xl p-4 sm:p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                    <h3 className="font-semibold text-lg">Your Recent Referrals</h3>
                    <button className="text-xs bg-[#E6F7E9] text-[#1E6FFF] px-3 py-1 rounded-full">
                      See all
                    </button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Shaik Khalidbasha", earned: "2,000/-", pkg: "Elite package" },
                      { name: "Arshiya Zabeen", earned: "3,856/-", pkg: "Pro" },
                      { name: "Madhumitha Swathi", earned: "7,000/-", pkg: "Supreme" },
                      { name: "Valluru Deepa", earned: "14,500/-", pkg: "Elite package" },
                    ].map((ref, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <img src={upro} alt="user" className="w-10 h-10 rounded-full" />
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">{ref.name}</span>
                            <span className="text-xs text-gray-500">{ref.pkg}</span>
                          </div>
                        </div>
                        <span className="text-sm font-medium">{ref.earned}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Leaderboard */}
                <div className="bg-[#F9FAFB] rounded-2xl p-4 sm:p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                    <h3 className="font-semibold text-lg">Leaderboard</h3>
                    <p className="text-xs text-gray-500">Position #34</p>
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center p-3 rounded-lg bg-white"
                      >
                        <div className="flex items-center gap-3">
                          <img src={upro} alt="user" className="w-10 h-10 rounded-full" />
                          <span className="text-sm text-black">Shaik Khalidbasha</span>
                        </div>
                        <span className="text-sm font-medium text-black">
                          ₹ 31,12,481 /-
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT small section → 3/10 on large screens */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {/* Circle Today */}
              <div className="bg-[#F9FAFB] rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center">
                <div className="relative w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="100"
                      stroke="url(#gradCircle)"
                      strokeWidth="18"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradCircle" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#1E6FFF" />
                        <stop offset="100%" stopColor="#4A90E2" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-4xl sm:text-5xl font-bold">456</span>
                </div>
                <p className="mt-3 text-[#555555] text-lg">Today</p>
              </div>

              {/* Packages */}
              <div className="bg-[#F9FAFB] rounded-2xl p-6 shadow-sm">
                {[
                  { name: "Basic Package", percent: 66, desc: "Smart choice upgrade", color: "bg-[#0050D1]" },
                  { name: "Standard Package", percent: 11, desc: "Advance with focus", color: "bg-[#4A90E2]" },
                  { name: "Advanced Package", percent: 23, desc: "Master advance skills", color: "bg-gray-300" },
                  { name: "Premium Package", percent: 86, desc: "All-in-one learning", color: "bg-[#2BA8FF]" },
                  { name: "Ultimate Package", percent: 76, desc: "Everything unlocked", color: "bg-[#003B99]" },
                ].map((pkg, idx) => (
                  <div key={idx} className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <span className={`w-4 h-4 rounded-full ${pkg.color}`}></span>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{pkg.name}</span>
                        <span className="text-xs text-gray-500">{pkg.desc}</span>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">{pkg.percent}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
