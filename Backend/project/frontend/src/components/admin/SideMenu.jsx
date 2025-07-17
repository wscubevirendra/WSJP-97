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
} from "react-icons/fa";

const menuItems = [
    { label: "DashBoard", icon: <FaClock />, path: "/" },
    { label: "Categories", icon: <FaShoppingCart />, path: "/admin/category" },
    { label: "Colors", icon: <FaPhone />, path: "/crm" },
    { label: "Brands", icon: <FaFolder />, path: "/project-management" },
    { label: "Orders", icon: <FaSuitcase />, path: "/travel-agency" },
    { label: "Users", icon: <FaDollarSign />, badge: "NEW", path: "/stock" },
    { label: "Chat", icon: <FaComments />, path: "/chat" },
    { label: "Email", icon: <FaEnvelope />, path: "/email" },
    { label: "Events", icon: <FaCalendarAlt />, path: "/events" }
];

const SideMenu = () => {
    return (
        <div className="w-64 shadow-sm sticky top-0 left-0 bg-white h-screen p-6 ">
            <h1 className="text-orange-600 text-xl font-bold mb-6">Admin</h1>
            <p className="text-xs font-bold text-gray-500 mb-2">APPS</p>
            <ul className="space-y-2">
                {menuItems.map((item, idx) => (
                    <li key={idx}>
                        <Link
                            href={item.path}
                            className="flex items-center text-gray-700 hover:text-orange-500 hover:bg-gray-200 p-2 rounded-sm transition-all"
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
            </ul>
        </div>
    );
};

export default SideMenu;
