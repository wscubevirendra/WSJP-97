import { getBrands, getCategories } from "@/library/api-call";
import React from "react";
import Link from "next/link";
import DeleteBtn from "@/components/admin/DeleteBtn";
import StatusBtn from "@/components/admin/StatusBtn";

export default async function BrandTable() {
  const brandJSON = await getBrands();
  const brands = await brandJSON?.data;

  return (
    <div className="space-y-6">
      {/* top bar */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Brands</h3>
        <Link href="/admin/brand/add">
          <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            + Add Brand
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
              <th className="px-6 py-3 font-medium text-gray-500">Slug</th>
              <th className="px-20 py-3 font-medium text-gray-500">Actions</th>
            </tr>
          </thead>

          {/* body */}
          <tbody className="divide-y divide-gray-200">
            {
              brands &&
              brands.map((brand) => (
                <tr key={brand._id} className="odd:bg-white even:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-3">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/brand/${brand.image}`}
                      alt={brand.name}
                      className="h-10 w-10 rounded object-cover shadow"
                    />
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 font-medium">
                    {brand.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-3 text-gray-600">
                    {brand.slug}
                  </td>

                  <td className="whitespace-nowrap pl-10 py-3 space-x-2">
                    <StatusBtn status={brand.status} id={brand._id} />
                    <button className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium hover:bg-gray-200">
                      <Link href={`/admin/brand/edit/${brand._id}`}>
                        Edit
                      </Link>

                    </button>
                    <DeleteBtn id={brand._id} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
