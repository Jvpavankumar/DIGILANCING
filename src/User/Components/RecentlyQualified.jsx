import React from 'react';
import trophy from '../../User/Assets/trophy.svg';
import icon from '../../User/Assets/icon.svg';

const RecentlyQualified = () => {
  const qualifiedUsers = [
    { name: 'Pavan', qualification: 'Normal Qualifier', timeAgo: '1 day ago', avatar: icon },
    { name: 'Karthik', qualification: 'Premium Plus Qualifier', timeAgo: '2 days ago', avatar: icon },
    { name: 'Saketh', qualification: 'Premium Qualifier', timeAgo: '3 days ago', avatar: icon },
    { name: 'Arun', qualification: 'Premium Plus Qualifier', timeAgo: '2 hours ago', avatar: icon },
    { name: 'Rakesh', qualification: 'Normal Qualifier', timeAgo: '5 hours ago', avatar: icon }
  ];

  return (
    <div
      className="bg-white rounded-4xl shadow-lg mb-4 overflow-hidden w-full max-w-sm"
    >
      {/* Header */}
      <div
        className="p-3"
        style={{ background: 'linear-gradient(to bottom right, #4852F4 0%, #8B38EA 100%)' }}
      >
        <h3 className="text-lg text-white font-semibold">Recently Qualified</h3>
      </div>

      {/* Content */}
      <div className="p-3">
        {qualifiedUsers.map((user, index) => (
          <div key={index} className="flex justify-between items-start mb-3">
            {/* Avatar + Info */}
            <div className="flex items-start">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover mr-2"
              />
              <div className="leading-tight">
                <p className="font-semibold text-sm">{user.name}</p>
                <p className="text-xs text-gray-600">{user.qualification}</p>
                <p className="text-xs text-gray-500">{user.timeAgo}</p>
              </div>
            </div>

            {/* Time + Icon */}
            <div className="flex items-center text-sm text-gray-500">
              <img src={trophy} alt="trophy" className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyQualified;
