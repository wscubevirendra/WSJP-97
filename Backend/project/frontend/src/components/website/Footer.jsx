import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 text-gray-200 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <span className="font-semibold text-lg">WSJP-97 Project</span>
            </div>
            <div className="flex space-x-4">
                <a href="/about" className="hover:text-white transition">About</a>
                <a href="/contact" className="hover:text-white transition">Contact</a>
                <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            </div>
            <div className="mt-4 md:mt-0 text-sm">
                &copy; {new Date().getFullYear()} WSJP-97. All rights reserved.
            </div>
        </div>
    </footer>
);

export default Footer;