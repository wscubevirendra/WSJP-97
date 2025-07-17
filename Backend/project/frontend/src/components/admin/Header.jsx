import React from "react";
import { FaCog, FaBell, FaTh } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-white  shadow-sm">
      {/* Search Input */}
      <div className="flex-1 max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Icons + Avatar */}
      <div className="flex items-center space-x-5 ml-6">
        <FaCog className="text-gray-600 hover:text-orange-500 cursor-pointer" size={18} />
        <FaBell className="text-gray-600 hover:text-orange-500 cursor-pointer" size={18} />
        <FaTh className="text-gray-600 hover:text-orange-500 cursor-pointer" size={18} />
        <img
          src="https://i.pravatar.cc/40"
          alt="Avatar"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Header;
