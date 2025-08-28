import React from "react";

export default function ThankYouPage({ params }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8">
                {/* Check Icon */}
                <div className="flex flex-col items-center text-center">
                    <div className="bg-green-100 w-20 h-20 flex items-center justify-center rounded-full mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-800">Thank you!</h2>
                    <p className="text-gray-500 mt-2">Your order has been confirmed.</p>
                </div>

                {/* Order Summary */}
                <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between">
                        <p className="text-sm text-gray-500">Order ID</p>
                        <p className="font-medium">{params.order_id}</p>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-sm text-gray-500">Total</p>
                        <p className="font-medium">₹1299</p>
                    </div>

                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button className="w-full sm:w-auto px-5 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition">
                        Continue Shopping
                    </button>
                    <button className="w-full sm:w-auto px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">
                        Print Receipt
                    </button>
                </div>
            </div>
        </div>
    );
}
