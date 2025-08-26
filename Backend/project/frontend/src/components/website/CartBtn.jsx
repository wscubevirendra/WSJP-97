'use client'
import { FaShoppingCart } from 'react-icons/fa';

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '@/redux/features/cartSlice';
import { AxiosInstance } from '@/library/helper';

export default function CartBtn({ product }) {
    const user = useSelector((state) => state.user.data);
    const dispatcher = useDispatch();
    async function addToCart() {
        if (user != null) {
            const response = await AxiosInstance.post("cart/add-cart", {
                userId: user._id,
                productId: product._id
            })

        }

        dispatcher(addtoCart({
            productId: product._id,
            original_price: product.originalPrice,
            final_price: product.finalPrice
        }))
    }
    return (
        <div className="absolute bottom-0 left-0 w-full px-4 pb-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
            <button onClick={addToCart} className="w-full cursor-pointer flex items-center justify-center gap-2 px-4 py-2 bg-[#01A49E] text-white text-sm rounded-md hover:bg-[#0bdfd8] transition">
                <FaShoppingCart /> Add to Cart
            </button>
        </div>
    )
}

