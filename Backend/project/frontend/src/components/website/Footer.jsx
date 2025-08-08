import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaStripe
} from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-white text-black text-sm">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="font-bold mb-2">SWOO - 1ST NYC TECH ONLINE MARKET</h2>
          <p className="text-xs text-gray-500">HOTLINE 24/7</p>
          <p className="text-xl font-bold text-green-600 mt-1">(025) 3686 25 16</p>
          <p className="mt-3 text-gray-600">257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
          <p className="text-gray-600">contact@Swootechmart.com</p>

          <div className="flex gap-3 mt-4">
            <div className="bg-gray-100 p-2 rounded-full text-gray-800"><FaTwitter /></div>
            <div className="bg-gray-100 p-2 rounded-full text-gray-800"><FaFacebookF /></div>
            <div className="bg-gray-100 p-2 rounded-full text-gray-800"><FaInstagram /></div>
            <div className="bg-gray-100 p-2 rounded-full text-gray-800"><FaYoutube /></div>
            <div className="bg-gray-100 p-2 rounded-full text-gray-800"><FaPinterestP /></div>
          </div>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="font-bold mb-2">TOP CATEGORIES</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Laptops</li>
            <li>PC & Computers</li>
            <li>Cell Phones</li>
            <li>Tablets</li>
            <li>Gaming & VR</li>
            <li>Networks</li>
            <li>Cameras</li>
            <li>Sounds</li>
            <li>Office</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-2">COMPANY</h3>
          <ul className="space-y-1 text-gray-600">
            <li>About Swoo</li>
            <li>Contact</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Sitemap</li>
            <li>Store Locations</li>
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="font-bold mb-2">HELP CENTER</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Customer Service</li>
            <li>Policy</li>
            <li>Terms & Conditions</li>
            <li>Trach Order</li>
            <li>FAQs</li>
            <li>My Account</li>
            <li>Product Support</li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="font-bold mb-2">PARTNER</h3>
          <ul className="space-y-1 text-gray-600">
            <li>Become Seller</li>
            <li>Affiliate</li>
            <li>Advertise</li>
            <li>Partnership</li>
          </ul>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="border-t py-8 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-base font-semibold">
            SUBSCRIBE & GET <span className="text-red-500">10% OFF</span> FOR YOUR FIRST ORDER
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border-b outline-none px-2 py-1 w-full sm:w-80 text-sm"
            />
            <button className="text-green-600 font-semibold text-sm">SUBSCRIBE</button>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-2">By subscribing, you're accepted the our <span className="underline">Policy</span></p>
      </div>

      {/* Bottom Footer */}
      <div className="border-t py-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 max-w-7xl mx-auto">
        <p>© 2024 <span className="font-semibold text-black">Shawonetc3</span>. All Rights Reserved</p>
        <div className="flex items-center gap-3 text-lg mt-2 md:mt-0">
          <FaCcPaypal />
          <FaCcMastercard />
          <FaCcVisa />
          <FaStripe />
          <img
            src="https://seeklogo.com/images/K/klarna-logo-70F6EFC27A-seeklogo.com.png"
            alt="Klarna"
            className="w-12 h-5 object-contain"
          />
        </div>
        <p className="text-blue-600 mt-2 md:mt-0">Mobile Site</p>
      </div>
    </footer>
  );
};

export default Footer;
