import React from "react";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 text-center p-6">
            {/* Animated Illustration */}
            <div className="relative w-72 h-72 mb-6">
                {/* Main Circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-100 to-amber-100 animate-pulse" />

                {/* Sad Face Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="w-20 h-20 text-pink-500 animate-bounce"
                    >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 9h.01M15 9h.01M8 16s1.5-2 4-2 4 2 4 2" />
                    </svg>
                </div>
            </div>

            {/* 404 Text */}
            <h1 className="text-7xl font-bold text-gray-800 mb-2 animate-fadeIn">404</h1>
            <p className="text-lg text-gray-600 mb-6 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                Oops! The page you're looking for doesn't exist.
            </p>

            {/* Back Button */}
            <Link
                href="/"
                className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: '0.6s' }}
            >
                Go Home
            </Link>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
      `}</style>
        </div>
    );
}
