import React from "react";
import { FaReact, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex items-center justify-between bg-gray-800 p-4 shadow-md">
            <div className="flex items-center space-x-2">
                <FaReact className="text-white text-3xl animate-spin" />
                <span className="text-white text-xl animate-pulse font-bold">My App</span>
            </div>
            <nav>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="text-white hover:text-blue-200 transition">
                            Home
                        </Link>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-blue-200 transition">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-white hover:text-blue-200 transition">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <FaUserCircle className="text-white text-3xl" />
        </header>
    );
};

export default Header;