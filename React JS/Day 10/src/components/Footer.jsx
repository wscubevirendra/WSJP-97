import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-primary mt-4 text-white pt-4 pb-2">
            <div className="container text-center">
                {/* Social Icons */}
                <div className="mb-3">
                    <a href="https://facebook.com" className="text-white me-3">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" className="text-white me-3">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" className="text-white me-3">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" className="text-white">
                        <FaLinkedinIn />
                    </a>
                </div>

                {/* Footer text */}
                <p className="mb-0">&copy; 2025 MyShop. All rights reserved.</p>
            </div>
        </footer>
    );
}
