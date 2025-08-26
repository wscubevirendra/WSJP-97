'use client'

import React, { useEffect } from 'react';
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { lstoCart } from '@/redux/features/cartSlice';
import { logoutHandler, lstoUser } from '@/redux/features/userSlice';

const Header = () => {
  const dispacher = useDispatch()
  const cartItems = useSelector((state) => state.cart);
  useEffect(
    () => {
      dispacher(lstoCart())
      dispacher(lstoUser())
    },
    []
  )

  useEffect(() => {
    const loginAt = JSON.parse(localStorage.getItem("loginAt"));
    if (loginAt) {
      const now = Date.now();  //abhi ki date
      const sevenDays = 7 * 24 * 60 * 60 * 1000; //after saven
      console.log(now - loginAt)

      if (now - loginAt > sevenDays) {
        dispacher(logoutHandler());
        window.location.href = "/user-login"; // redirect
      }
    }
  }, []);


  return (
    <header className="w-full shadow-sm">
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 py-2 text-sm bg-gray-50 text-gray-700">
        <div className="flex items-center gap-4">
          <div className="bg-gray-200 px-2 py-1 rounded text-xs">Hotline 24/7</div>
          <div className="font-semibold">(025) 3886 25 16</div>
        </div>
        <div className="flex items-center gap-6 text-xs">
          <a href="#" className="hover:underline">Sell on Swoo</a>
          <a href="#" className="hover:underline">Order Tracki</a>
          <div className="flex items-center gap-1 cursor-pointer">
            USD <MdKeyboardArrowDown />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <img src="https://flagcdn.com/us.svg" className="w-4 h-4" alt="USA flag" />
            Eng <MdKeyboardArrowDown />
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-green-500 text-white p-2 rounded-full text-lg">
            <IoMdCall />
          </div>
          <div>
            <h1 className="text-lg font-bold">SWOO</h1>
            <p className="text-xs text-gray-500">TECH MART</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6 font-medium text-sm text-black">
          <div className="flex items-center gap-1 cursor-pointer">
            <Link href="/">HOME</Link>

          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            PAGES <MdKeyboardArrowDown />
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <Link href="/store">STORE</Link>
          </div>
          <div className="cursor-pointer">CONTACT</div>
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-6">
          <FaRegHeart className="text-xl text-gray-600 cursor-pointer" />

          <div className="text-sm text-gray-500">
            <p className="text-[10px]">WELCOME</p>
            <Link href="/user-login?ref=header">LOG IN / REGISTER</Link>
          </div>

          <div className=" flex items-center gap-2">
            <Link href="/cart">
              <div className="bg-gray-200 relative p-2 rounded-full">
                <FaShoppingCart className="text-xl" />
                <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartItems.cart.length}</div>
              </div></Link>

            <div className="text-sm font-semibold">₹{cartItems.final_total}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
