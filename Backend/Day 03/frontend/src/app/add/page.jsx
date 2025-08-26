'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


export default function AddUserForm() {
    const router = useRouter()
    const notify = (msg) => toast(msg);


    function submitHandler(e) {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            contact: e.target.contact.value,
            password: e.target.password.value
        }

        axios.post("http://localhost:5000/user/create", data).then(
            (response) => {
                notify(response.data.message);
                router.push("/")
                console.log(response.data)
            }
        ).catch((error) => {
            console.log(error)
        })

    }


    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">Add User</h2>
            <ToastContainer />
            <form onSubmit={submitHandler} className="space-y-5">
                <div>
                    <label className="block mb-1 font-medium text-gray-700" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-gray-700" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-gray-700" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        id="password"
                        name="password"
                        required
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium text-gray-700" htmlFor="contact">
                        Contact
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        id="contact"
                        name="contact"
                        required
                        autoComplete="off"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}