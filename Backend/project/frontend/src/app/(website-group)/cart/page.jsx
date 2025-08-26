'use client'

import { FaMinus, FaPlus } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "@/library/api-call";
import { useRouter } from "next/navigation";
import { formatIndianCurrency } from '@/library/helper'

export default function CartPage() {
    const router = useRouter()
    const [products, setProducts] = useState([]);
    const cartData = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user.token)
    async function getproducts() {
        const productJSON = await getProducts(null);
        setProducts(productJSON.data)
    }

    useEffect(
        () => {
            getproducts()
        },
        []
    )

    function checkoutHandler() {
        if (user) {
            router.push("/checkout")
        } else {
            router.push('user-login?ref=checkout')
        }
    }

    return (
        <div className="bg-gray-50 min-h-screen p-6 flex flex-col lg:flex-row gap-6">
            <div className="flex-1 space-y-6">
                {
                    cartData.cart.map((item) => {
                        const product = products.find((pd) => pd._id === item.productId)
                        return (
                            <div className="flex items-center justify-between bg-white rounded-2xl shadow p-4">

                                <div className="relative w-28 h-28 flex-shrink-0">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${product?.thumbnail}`}
                                        alt="phone"
                                        className="w-full h-full rounded-lg object-cover"
                                    />
                                </div>
                                <div className="ml-4 flex gap-10 flex-1">
                                    <h2 className="font-semibold">{product?.name}</h2>
                                    <div className="text-red-600 font-bold text-lg">{product?.finalPrice}</div>

                                    <div className="flex items-center gap-3">
                                        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                                            <FaMinus />
                                        </button>
                                        <span>{item.qty}</span>
                                        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                                            <FaPlus />
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-3 mt-2">
                                        <span className="text-green-600 text-xs font-semibold bg-green-100 px-2 py-1 rounded">
                                            FREE SHIPPING
                                        </span>
                                        <div className="flex items-center text-green-600 text-sm">
                                            <BsCheckCircleFill className="mr-1" /> In stock
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })


                }


            </div>

            <div className="w-full lg:w-1/3">
                <div className="bg-white rounded-2xl shadow p-6 border border-green-500">
                    <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                    <div className="flex justify-between text-gray-600 mb-2">
                        <span>Sub Total:</span>
                        <span className="font-medium">{formatIndianCurrency(cartData.original_total)}</span>
                    </div>

                    <div className="flex justify-between text-gray-600 mb-4">
                        <span>Saving:</span>
                        <span className="font-medium">{formatIndianCurrency(cartData.original_total - cartData.final_total)}</span>
                    </div>

                    <div className="flex justify-between font-bold text-lg mb-4">
                        <span>ORDER TOTAL:</span>
                        <span>{formatIndianCurrency(cartData.final_total)}</span>
                    </div>

                    <button onClick={checkoutHandler} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold">
                        CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
}
