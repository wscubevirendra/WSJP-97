'use client'

import { useState } from "react";
import { AxiosInstance } from '@/library/helper'
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/userSlice";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthPage() {
    const dispatcher = useDispatch()
    const router = useRouter()
    const params = useSearchParams()
    const [activeTab, setActiveTab] = useState("signin");
    const data = JSON.parse(localStorage.getItem("cart"))
    const cartData = data != null ? data.cart : null
    console.log(cartData, "cartData")


    function loginHandler(e) {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        AxiosInstance.post("user/login", data).then(
            async (response) => {
                if (response.data.success) {
                    dispatcher(setUser({
                        data: response.data.data.user,
                        token: response.data.data.token
                    }))

                    const updateCart = await AxiosInstance.post("cart/db-to-cart", {
                        cart: cartData ?? null,
                        userId: response.data?.data?.user?._id
                    });
                    let original_total = 0;
                    let final_total = 0;
                    const cart = updateCart.data.cart.map((item) => {
                        original_total += item.product_id.originalPrice * item.qty;
                        final_total += item.product_id.finalPrice * item.qty;
                        return {
                            productId: item.product_id._id,
                            qty: item.qty
                        }
                    })

                    localStorage.setItem("cart", JSON.stringify({ cart, original_total, final_total }));

                    if (params.get("ref") == "checkout") {
                        router.push("/checkout")
                    } else {
                        router.push("/")
                    }


                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-[600px] gap-4 bg-white shadow-xl rounded-2xl p-6">
                {/* Tab Buttons */}
                <div className="flex gap-5 mb-6">
                    <button
                        onClick={() => setActiveTab("signin")}
                        className={`flex-1 py-2 text-center font-medium rounded-lg transition 
              ${activeTab === "signin"
                                ? "bg-blue-600 text-white shadow"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        Sign In
                    </button>
                    <button
                        onClick={() => setActiveTab("signup")}
                        className={`flex-1 py-2 text-center font-medium rounded-lg transition 
              ${activeTab === "signup"
                                ? "bg-blue-600 text-white shadow"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Sign In Form */}
                {activeTab === "signin" && (
                    <form onSubmit={loginHandler} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            Sign In
                        </button>
                    </form>
                )}

                {/* Sign Up Form */}
                {activeTab === "signup" && (
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Confirm password"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Create a password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                        >
                            Sign Up
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}
