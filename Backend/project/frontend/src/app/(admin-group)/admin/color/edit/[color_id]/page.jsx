'use client'
import { useEffect, useRef, useState } from "react";
import { AxiosInstance, generateSlug, notify } from "@/library/helper";
import axios from "axios";
import { getColors } from "@/library/api-call";
import { useRouter } from "next/navigation";

export default function ColorEdit({ params }) {
    const router = useRouter()
    const [color, setColor] = useState({})

    async function getColorById() {
        const colorJSON = await getColors(params.color_id);
        setColor(colorJSON.data)

    }
    useEffect(
        () => {
            getColorById()
        },
        [params.color_id]
    )

    const nameRef = useRef();
    const slugRef = useRef();

    const slugCreate = () => {
        const slug = generateSlug(nameRef.current.value);
        slugRef.current.value = slug;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            slug: slugRef.current.value,
            hexcode: e.target.hexcode.value
        }
        if (data.name === "" || data.slug === "" || data.hexcode === "") {
            notify("All fields are required", 0);
            return;
        }

        AxiosInstance.put(`color/update/${color?._id}`, data)
            .then((response) => {
                notify(response.data.message, response.data.success);
                if (response.data.success) {
                    router.push("/admin/color")
                }
            })
            .catch((error) => {
                console.log(error)
                notify("Something .....", 0);

            });
    };

    return (
        <div className="space-y-6">
            {/* Top Bar */}
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Categories Edit</h3>
            </div>

            {/* Form Container */}
            <div className="overflow-x-auto rounded-lg p-10 mx-10 bg-white shadow-sm">
                <form onSubmit={submitHandler} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            ref={nameRef}
                            onChange={slugCreate}
                            defaultValue={color.name}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                            placeholder="Enter color name"
                        />
                    </div>

                    {/* Slug */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                        <input
                            type="text"
                            ref={slugRef}
                            readOnly
                            defaultValue={color.slug}
                            className="w-full rounded-lg bg-gray-100 border border-gray-300 px-4 py-2 text-sm text-gray-700 cursor-not-allowed"
                            placeholder="auto-generated slug"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">HexCode</label>
                        <input
                            type="color"
                            name="hexcode"
                            defaultValue={color.hexcode}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                            placeholder="Enter color hex code"
                        />
                    </div>

                    <div style={{ backgroundColor: color.hexcode }} className="w-20 h-10"></div>
                    <div>
                        <button
                            type="submit"
                            className="w-full rounded-lg px-4 py-2 text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
