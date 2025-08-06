'use client'

import { AxiosInstance, notify } from '@/library/helper';
import { useRouter } from 'next/navigation';
import React from 'react';

const AdminLogin = () => {
    const router = useRouter()
    function loginHandler(e) {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        console.log(data)

        AxiosInstance.post("admin/login", data, { withCredentials: true }).then((response) => {
            notify(response.data.message, response.data.success);
            console.log(response)

            if (response.data.success) {
                router.push("/admin")
            }
        })
            .catch((error) => {
                console.log(error)
                notify("Something went wrong", 0);
            });
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
            <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl border border-gray-200">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>

                <form className="space-y-5" onSubmit={loginHandler} >
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none focus:border-blue-500 transition"
                            placeholder="admin@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none focus:border-blue-500 transition"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 shadow-md"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
