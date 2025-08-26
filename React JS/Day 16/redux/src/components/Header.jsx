'use client'

import { useSelector } from "react-redux";
export default function Header() {
    const count = useSelector((state) => state.count.value)
    return (
        <header className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="bg-black text-white rounded-lg h-8 w-8 flex items-center justify-center font-bold">
                            A
                        </div>
                        <span className="text-lg font-semibold">Acme</span>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex gap-6">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Products</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Count({count})</a>
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Log in</a>
                        <a
                            href="#"
                            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="p-2 rounded-md hover:bg-gray-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
