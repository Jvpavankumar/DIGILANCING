import React from 'react';
import { PhoneCall } from 'lucide-react';
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const SupportSystem = () => {
  return (
    <div className="mt-8">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Support System</h2>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Support Cards */}
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-xl border border-gray-300 shadow-sm p-6">
          {/* Support Card 1 */}
          <div className="flex items-center gap-4 border-r border-gray-300 pr-4">
            <div className="text-blue-500 bg-blue-100 p-3 rounded-full">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600">We are here for you</p>
              <p className="font-semibold text-lg">+91 9625136861</p>
              <p className="text-xs text-gray-500">Monday - Sunday 9:00AM - 05:00PM</p>
            </div>
          </div>

          {/* Support Card 2 */}
          <div className="flex items-center gap-4 pl-4">
            <div className="text-blue-500 bg-blue-100 p-3 rounded-full">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Let’s Connect On</p>
              <p className="font-semibold text-lg">+91 9310246027</p>
              <p className="text-xs text-gray-500">Monday - Sunday 9:00AM - 05:00PM</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-6 flex flex-col justify-center items-center">
          <p className="font-semibold text-lg mb-4">Follow Us</p>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="text-red-500 hover:scale-110 transition-transform"><FaYoutube /></a>
            <a href="#" className="text-blue-600 hover:scale-110 transition-transform"><FaFacebookF /></a>
            <a href="#" className="text-blue-400 hover:scale-110 transition-transform"><FaTwitter /></a>
            <a href="#" className="text-pink-500 hover:scale-110 transition-transform"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSystem;
