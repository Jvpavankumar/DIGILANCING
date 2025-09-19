import React from 'react';

import play from "../../User/Assets/play.svg"
import like from "../../User/Assets/like.svg"
import greeting from "../../User/Assets/greeting.svg"
const GreetingSection = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const now = new Date();
    // IST offset is +5:30 hours from UTC
    const istOffset = 5.5 * 60; // minutes
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const istTime = new Date(utc + istOffset * 60000);
    const hours = istTime.getHours();

    // Determine greeting
    let greetingText = "Good Evening";
    if (hours >= 5 && hours < 12) {
        greetingText = "Good Morning";
    } else if (hours >= 12 && hours < 17) {
        greetingText = "Good Afternoon";
    }

    return (
        <div
            className="relative rounded-4xl p-6 text-white flex flex-col lg:flex-row justify-between items-start overflow-visible min-h-[17rem]"
            style={{ background: 'linear-gradient(to bottom right, #4852F4 0%, #6A50FF 100%)' }}
        >
            {/* Left Content */}
            <div className="max-w-md">
                <h2 className="text-3xl font-bold leading-tight" style={{ fontFamily: "'Roboto', sans-serif" }}>
                    {greetingText}, <br />
                    <span className="text-white">{user?.fullname}</span>
                </h2>
                <p className="text-sm mt-1 opacity-80">{user?.email}</p>

                <button
                    className="mt-6 bg-white text-black flex items-center gap-2 px-5 py-2 rounded-md font-medium hover:bg-gray-100 transition"
                >
                    <img src={play} alt="Play" className="h-5 w-5" />
                    Start Learning
                </button>


            </div>

            {/* Right Card */}
            <div
                className="w-full sm:w-56 bg-white text-black p-4 rounded-xl shadow-xl mt-6
    md:absolute md:top-[10%] md:right-6 md:mt-0"
            >

                <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-md">
                    Design
                </span>
                <h3 className="text-sm font-bold mt-2">Create 3D Illustration from Basic Shape</h3>

                <img
                    src={greeting}
                    alt="Course"
                    className="w-full h-24 object-cover rounded-md mt-3"
                />

                <p className="text-xs text-gray-600 mt-2">
                    Most 3D modeling software provides primitive shapes...
                </p>

                <div className="flex justify-between text-xs text-gray-500 mt-3">
                    <span className="flex items-center gap-1">
                        <img src={play} alt="Play" className="w-4 h-4" />
                        12 Lessons
                    </span>

                    <span className="flex items-center gap-1">
                        <img src={like} alt="Play" className="w-4 h-4" />
                        20k Likes</span>
                </div>
            </div>


        </div>
    );
};

export default GreetingSection;
