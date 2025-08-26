'use client'

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function AccountPage() {
    const user = useSelector((state) => state.user.data);

    const [activeTab, setActiveTab] = useState("account");

    // Reusable button
    const SideButton = ({ label, tab }) => (
        <button
            onClick={() => setActiveTab(tab)}
            className={`flex items-center justify-between px-4 py-2 rounded-md border transition-all ${activeTab === tab
                ? "bg-teal-600 text-white"
                : "bg-white hover:bg-gray-100"
                }`}
        >
            {label} <FaArrowRight />
        </button>
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Collect values directly from form
        const formData = {
            addressLine1: e.target.addressLine1.value,
            addressLine2: e.target.addressLine2.value,
            city: e.target.city.value,
            state: e.target.state.value,
            postalCode: e.target.postalCode.value,
            country: e.target.country.value,
            contact: e.target.contact.value,
        };

        AxiosInstance.patch(`user/address-update/${user?._id}`, formData).then((response) => {
            notify(response.data.message, response.data.success);
            console.log(response)
            if (response.data.success) {
                console.log(response.data)
            }
        })
            .catch((error) => {
                console.log(error)
                notify("Something went wrong", 0);
            });



    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white shadow-md rounded-2xl flex w-full max-w-6xl">
                {/* Left Sidebar */}
                <div className="w-1/3 md:w-1/4 bg-gray-50 border-r p-6 flex flex-col items-center">
                    <img
                        src="https://i.pravatar.cc/150?img=3"
                        alt="Profile"
                        className="w-32 h-32 rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-semibold">Mark Cole</h2>
                    <p className="text-gray-500 text-sm mb-6">swoo@gmail.com</p>

                    <div className="flex flex-col gap-3 w-full">
                        <SideButton label="Account info" tab="account" />
                        <SideButton label="My order" tab="order" />
                        <SideButton label="My address" tab="address" />
                        <SideButton label="Change password" tab="password" />
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 p-8">
                    {/* Account Info Tab */}
                    {activeTab === "account" && (
                        <>
                            <h2 className="text-2xl font-semibold mb-6">Account Info</h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Mark"
                                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Cole"
                                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-1">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue="swoo@gmail.com"
                                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-1">
                                        Phone Number <span className="text-gray-400">(Optional)</span>
                                    </label>
                                    <input
                                        type="tel"
                                        defaultValue="+1 0231 4554 452"
                                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700"
                                    >
                                        SAVE
                                    </button>
                                </div>
                            </form>
                        </>
                    )}

                    {/* My Order Tab */}
                    {activeTab === "order" && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
                            <p className="text-gray-500">You don’t have any orders yet.</p>
                        </div>
                    )}

                    {/* My Address Tab */}
                    {activeTab === "address" && (
                        <>
                            <h2 className="text-2xl font-semibold mb-6">Account Info</h2>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Address Line 1 */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-1">
                                        Address Line 1 <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="addressLine1"
                                        placeholder="123 Main St"
                                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        required
                                    />
                                </div>

                                {/* Address Line 2 (Optional) */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-1">
                                        Address Line 2 <span className="text-gray-400">(Optional)</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="addressLine2"
                                        placeholder="Apartment, suite, etc."
                                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>

                                {/* City */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        City <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="New York"
                                        name="city"
                                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        required
                                    />
                                </div>

                                {/* State */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        State <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="NY"
                                        name="state"
                                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        required
                                    />
                                </div>

                                {/* Postal Code */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Postal Code <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="10001"
                                        name="postalCode"
                                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        required
                                    />
                                </div>

                                {/* Country */}
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Country <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="country"
                                        placeholder="United States"
                                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        required
                                    />
                                </div>

                                {/* Contact (Phone Number, Optional) */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-1">
                                        Contact <span className="text-gray-400">(Optional)</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="contact"
                                        placeholder="+1 123 456 7890"
                                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                    />
                                </div>

                                {/* Save Button */}
                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700"
                                    >
                                        SAVE
                                    </button>
                                </div>
                            </form>

                        </>
                    )}

                    {/* Change Password Tab */}
                    {activeTab === "password" && (
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Change Password</h2>
                            <form className="flex flex-col gap-4 max-w-md">
                                <input
                                    type="password"
                                    placeholder="Current Password"
                                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                <input
                                    type="password"
                                    placeholder="Confirm New Password"
                                    className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                <button
                                    type="submit"
                                    className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700"
                                >
                                    UPDATE PASSWORD
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
