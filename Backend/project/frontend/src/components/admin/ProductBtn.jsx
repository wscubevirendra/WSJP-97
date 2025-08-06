'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { AxiosInstance, notify } from '@/library/helper'
import { useRouter } from 'next/navigation'
import DeleteBtn from './DeleteBtn'

export default function ProductBtn({ prod }) {
    const [toggle, setToggle] = useState(null)
    const router = useRouter()
    function statusHandler(flag) {
        AxiosInstance.patch(`/product/status/${prod._id}`, { flag }).then((response) => {
            notify(response.data.message, response.data.success);
            if (response.data.success) {
                router.refresh()
            }
        }).catch((error) => {
            notify("Someting", 0);

        });
    }
    return (
        <td className="whitespace-nowrap pl-10 py-3 space-x-2">


            <button onClick={() => statusHandler(1)} className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium hover:bg-gray-200">
                {prod.status ? "Active" : "Inactive"}
            </button>
            <button onClick={() => statusHandler(2)} className={`rounded-md ${prod.stock ? "bg-gray-100" : "bg-rose-100"} px-3 py-1.5 text-xs font-medium hover:bg-gray-200`}>
                {prod.stock ? "In Stock" : "Out of Stock"}
            </button>
            <button onClick={() => statusHandler(3)} className={`rounded-md ${prod.topSelling ? "bg-gray-100" : "bg-rose-100"} px-3 py-1.5 text-xs font-medium hover:bg-gray-200`}>
                {prod.topSelling ? "Top Selling" : "Not Top Selling"}
            </button>
            <button className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium hover:bg-gray-200">
                <Link href={`/admin/product/edit/${prod._id}`}>
                    Edit
                </Link>

            </button>
            <DeleteBtn path={`product/delete/${prod._id}`} />
            <button onClick={() => setToggle(prod)} className="rounded-md bg-rose-100 cursor-pointer px-3 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-200">
                View
            </button>
            {toggle && <ViewProduct product={toggle} close={() => setToggle(null)} />}
            <Link href={`/admin/product/images/${prod._id}`}>
                <button className="rounded-md bg-rose-100 cursor-pointer px-3 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-200">
                    Images
                </button>
            </Link>
        </td>
    )
}





const ViewProduct = ({ product, close }) => {
    return (
        <div className="w-full fixed bottom-0 right-0 z-20 p-6 bg-white shadow-xl rounded-t-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
                onClick={close}
            >
                Close
            </button>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Thumbnail */}
                <div className="w-full md:w-1/3">
                    <img
                        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${product.thumbnail}`}
                        alt={product.name}
                        className="rounded-lg w-full object-cover h-52"
                    />

                    {/* {product.images?.length > 0 && (
                        <div className="mt-4 flex gap-2 flex-wrap">
                            {product.images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${img}`}
                                    alt={`product-${idx}`}
                                    className="w-16 h-16 object-cover rounded border"
                                />
                            ))}
                        </div>
                    )} */}
                </div>

                {/* Product Info */}
                <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                    <p className="text-sm text-gray-500 mb-3">{product.shortDescription}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 text-yellow-500 text-sm">

                        <span className="text-sm font-medium text-gray-700">4.2</span>
                    </div>


                    <div
                        className="mt-4 space-y-2 text-sm text-gray-700"
                        dangerouslySetInnerHTML={{ __html: product.longDescription }}
                    />


                </div>


                {/* Pricing */}
                <div className="mt-4 flex items-center gap-3">
                    <p className="text-2xl font-bold text-green-600">₹{product.finalPrice}</p>
                    <p className="line-through text-gray-400">₹{product.originalPrice}</p>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                        {product.discountPercentage}% OFF
                    </span>
                </div>


            </div>
        </div>
    );
};