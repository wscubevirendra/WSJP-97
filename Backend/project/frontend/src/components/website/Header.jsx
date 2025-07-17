import React from "react";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-blue-600">ShopEase</span>
                </div>
                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                        Home
                    </a>
                    <a href="/shop" className="text-gray-700 hover:text-blue-600 font-medium">
                        Shop
                    </a>
                    <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                        About
                    </a>
                    <a href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                        Contact
                    </a>
                </nav>
                {/* Actions */}
                <div className="flex items-center space-x-4">
                    <button className="relative">
                        <svg
                            className="w-6 h-6 text-gray-700 hover:text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h12.2a1 1 0 00.9-1.3L17 13M7 13V6h13"
                            />
                        </svg>
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                            2
                        </span>
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 font-medium">
                        Sign In
                    </button>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button>
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;