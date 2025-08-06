'use client'
import { useEffect, useRef, useState } from "react";
import { AxiosInstance, generateSlug, notify } from "@/library/helper";
import { FaUpload } from "react-icons/fa"; // Using React Icon
import { useRouter } from "next/navigation";
import { getProducts } from "@/library/api-call";

export default function page({ params }) {
    const router = useRouter()
    const [product, setProduct] = useState({})

    async function getProductById() {
        const productJSON = await getProducts(params.product_id);
        setProduct(productJSON.data)

    }
    useEffect(
        () => {
            getProductById()
        },
        [params.product_id]
    )


    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        const files = e.target.images.files;
        for (let image of files) {
            formData.append("images", image);
        }

        AxiosInstance.patch(`product/images/${product?._id}`, formData)
            .then((response) => {
                notify(response.data.message, response.data.success);
                if (response.data.success) {
                    router.push("/admin/product")
                }
            })
            .catch((error) => {
                console.log(error)
               notify("Something went wrong", 0);
            });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Products Edit</h3>
            </div>
            <div className="overflow-x-auto rounded-lg p-10 mx-10 bg-white shadow-sm">
                <form onSubmit={submitHandler} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                        <label className="flex items-center justify-center gap-2 w-full cursor-pointer px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-gray-50">
                            <FaUpload className="text-gray-600" />
                            Upload Image
                            <input multiple type="file" name="images" className="hidden" />
                        </label>
                        {
                            product?.images && product.images.map((image, index) => (
                                <img key={index} width={100} height={100} className="mt-2" src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${image}`} alt="" />
                            ))
                        }

                    </div>
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
