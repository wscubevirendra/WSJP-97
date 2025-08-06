'use client'
import { useEffect, useRef, useState } from "react";
import { AxiosInstance, generateSlug, notify } from "@/library/helper";
import axios from "axios";
import { FaUpload } from "react-icons/fa"; // Using React Icon
import { getCategories } from "@/library/api-call";
import { useRouter } from "next/navigation";

export default function CategoryEdit({ params }) {
    const router = useRouter()
    const [category, setCategory] = useState({})

    async function getCategoryById() {
        const categoryJSON = await getCategories(params.category_id);
        setCategory(categoryJSON.data)

    }
    useEffect(
        () => {
            getCategoryById()
        },
        [params.category_id]
    )

    const nameRef = useRef();
    const slugRef = useRef();

    const slugCreate = () => {
        const slug = generateSlug(nameRef.current.value);
        slugRef.current.value = slug;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("slug", slugRef.current.value);
        formData.append("image", e.target.category_image.files[0]);

        AxiosInstance.put(`category/update/${category?._id}`,formData)
            .then((response) => {
                notify(response.data.message, response.data.success);
                if (response.data.success) {
                    router.push("/admin/category")
                }
            })
            .catch((error) => {
                console.log(error)
               notify("Something went wrong", 0);

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
                            defaultValue={category.name}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                            placeholder="Enter category name"
                        />
                    </div>

                    {/* Slug */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                        <input
                            type="text"
                            ref={slugRef}
                            readOnly
                            defaultValue={category.slug}
                            className="w-full rounded-lg bg-gray-100 border border-gray-300 px-4 py-2 text-sm text-gray-700 cursor-not-allowed"
                            placeholder="auto-generated slug"
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                        <label className="flex items-center justify-center gap-2 w-full cursor-pointer px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-gray-50">
                            <FaUpload className="text-gray-600" />
                            Upload Image
                            <input type="file" name="category_image" className="hidden" />
                        </label>
                        <img width={100} height={100} className="mt-10" src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/category/${category.image}`} alt="" />
                    </div>

                    {/* Submit Button */}
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
    );
}
