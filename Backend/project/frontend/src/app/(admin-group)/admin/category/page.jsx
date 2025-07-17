import React from "react";

/* ───────────────── fake data ───────────────── */
const categories = [
  {
    id: 1,
    name: "Electronics",
    slug: "electronics",
    img: "https://source.unsplash.com/80x80?electronics",
    status: "Active",
  },
  {
    id: 2,
    name: "Furniture",
    slug: "furniture",
    img: "https://source.unsplash.com/80x80?furniture",
    status: "Disabled",
  },
  {
    id: 3,
    name: "Fashion",
    slug: "fashion",
    img: "https://source.unsplash.com/80x80?fashion",
    status: "Active",
  },
];


/* ───────────────── component ───────────────── */
export default function CategoryTable() {
  return (
    <div className="space-y-6">
      {/* top bar */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Categories</h3>
        <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          + Add Category
        </button>
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
            {categories.map((c) => (
              <tr key={c.id} className="odd:bg-white even:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-3">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="h-10 w-10 rounded object-cover shadow"
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-3 font-medium">
                  {c.name}
                </td>
                <td className="whitespace-nowrap px-6 py-3 text-gray-600">
                  {c.slug}
                </td>

                <td className="whitespace-nowrap pl-10 py-3 space-x-2">
                  <button className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium hover:bg-gray-200">
                    Status
                  </button>
                  <button className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium hover:bg-gray-200">
                    Edit
                  </button>
                  <button className="rounded-md bg-rose-100 px-3 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-200">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
