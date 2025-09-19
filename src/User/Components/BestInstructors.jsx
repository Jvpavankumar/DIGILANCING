import React, { useState } from 'react';
import icon from '../../User/Assets/icon.svg';
const allInstructors = [
  { name: 'Eleanor Bennett', courses: '5 Marketing Courses', image: icon },
  { name: 'James Smith', courses: '4 Coding Courses', image: icon},
  { name: 'Sophia Lee', courses: '7 Design Courses', image: icon },
  { name: 'Liam Johnson', courses: '3 Sales Courses', image: icon },
  { name: 'Ava Martinez', courses: '6 Writing Courses', image:icon },
  { name: 'Noah Davis', courses: '2 AI Courses', image: icon },
];

const BestInstructors = () => {
  const [showAll, setShowAll] = useState(false);

  const instructorsToShow = showAll ? allInstructors : allInstructors.slice(0, 3);

  return (
    <div className="px-4 lg:px-0 max-w-screen-xl mx-auto mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Best Instructors</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm font-medium text-black hover:underline"
        >
          {showAll ? 'View Less' : 'View All'}
        </button>
      </div>

      {/* Instructor Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {instructorsToShow.map((instructor, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border-black-600 rounded-xl shadow-sm bg-white"
          >
            {/* Profile Info */}
            <div className="flex items-center">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold text-sm">{instructor.name}</h3>
                <p className="text-xs text-gray-500">{instructor.courses}</p>
              </div>
            </div>

            {/* Course Button */}
            <button className="bg-[#1D4ED8] text-white text-xs font-semibold py-1.5 px-4 rounded-full hover:bg-blue-700">
              Course
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestInstructors;
