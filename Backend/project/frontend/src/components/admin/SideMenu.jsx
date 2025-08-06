'use client'

import React from "react";
import Link from "next/link";
import {
    FaClock,
    FaShoppingCart,
    FaPhone,
    FaFolder,
    FaSuitcase,
    FaDollarSign,
    FaComments,
    FaEnvelope,
    FaCalendarAlt,
    FaThLarge,
    FaChartBar,
    FaShareAlt,
    FaUserSecret
} from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { SiBrandfolder } from "react-icons/si";
import { AxiosInstance } from "@/library/helper";





const menuItems = [
    { label: "DashBoard", icon: <FaClock />, path: "/" },
    { label: "Categories", icon: <BiCategory />, path: "/admin/category" },
    { label: "Colors", icon: <IoIosColorPalette />, path: "/admin/color" },
    { label: "Brands", icon: <SiBrandfolder />, path: "/admin/brand" },
    { label: "Products", icon: <FaProductHunt />, path: "/admin/product" },
    { label: "Users", icon: <FaUserSecret />, badge: "NEW", path: "/stock" },


];

const SideMenu = () => {

    function logoutHandler() {
        AxiosInstance.get("admin/logout")

    }

    return (
        <div className="w-64 shadow-sm sticky top-0 left-0 bg-white h-screen p-6 ">
            <h1 className="text-orange-600 text-xl font-bold mb-6">Admin</h1>
            <p className="text-xs font-bold text-gray-500 mb-2">APPS</p>
            <ul className="space-y-2">
                {menuItems.map((item, idx) => (
                    <li key={idx}>
                        <Link
                            href={item.path}
                            className="flex items-center cursor-pointer text-gray-700 hover:text-orange-500 hover:bg-gray-200 p-2 rounded-sm transition-all"
                        >
                            <span className="text-lg mr-3">{item.icon}</span>
                            <span className="text-sm font-medium">{item.label}</span>
                            {item.badge && (
                                <span className="ml-2 text-[10px] bg-yellow-200 text-yellow-800 font-semibold px-1.5 py-0.5 rounded">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    </li>
                ))}
                <li >
                    <div
                        onClick={logoutHandler}

                        className="flex items-center text-gray-700 hover:text-orange-500 hover:bg-gray-200 p-2 rounded-sm transition-all"
                    >
                        <span className="text-lg mr-3"><FaUserSecret /></span>
                        <span className="text-sm font-medium">LogOut</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default SideMenu;
