import { getCategories, getProducts } from "@/library/api-call";
import React from "react";
import Link from "next/link";
import DeleteBtn from "@/components/admin/DeleteBtn";
import StatusBtn from "@/components/admin/StatusBtn";
import ProductBtn from "@/components/admin/ProductBtn";

export default async function ProductTable() {
    const productJSON = await getProducts();
    const products = await productJSON?.data;

    return (
        <div className="space-y-6">
            {/* top bar */}
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Products</h3>
                <Link href="/admin/product/add">
                    <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        + Add Product
                    </button>
                </Link>

            </div>

            {/* table */}
            <div className="overflow-x-auto rounded-lg  bg-white shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    {/* head */}
                    <thead className="bg-gray-50">
                        <tr className="text-left">
                            <th className="px-6 py-3 font-medium text-gray-500">Image</th>
                            <th className="px-6 py-3 font-medium text-gray-500">Name</th>
                            <th className="px-6 py-3 font-medium text-gray-500">Prices</th>
                            <th className="px-20 py-3 font-medium text-gray-500">Actions</th>
                        </tr>
                    </thead>

                    {/* body */}
                    <tbody className="divide-y divide-gray-200">
                        {
                            products &&
                            products.map((prod) => (
                                <tr key={prod._id} className="odd:bg-white even:bg-gray-50">
                                    <td className="whitespace-nowrap px-6 py-3">
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${prod.thumbnail}`}
                                            alt={prod.name}
                                            className="h-10 w-10 rounded object-cover shadow"
                                        />
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-3 font-medium">
                                        {prod.name}
                                    </td>
                                     <td className="whitespace-nowrap px-6 py-3 text-gray-600">
                                        {prod.originalPrice} | {prod.finalPrice} | {prod.discountPercentage}%
                                    </td>

                                    <ProductBtn prod={prod} />
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
