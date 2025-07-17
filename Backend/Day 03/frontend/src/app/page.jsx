import getData from "@/library/api-call";
import React from "react";
import Link from "next/link";
import DeleteBtn from "@/components/DeleteBtn";
import StatusBtn from "@/components/StatusBtn";

async function HomePage() {
  const users = await getData();

  return (
    <>

      <div className="mt-12 w-full mx-auto flex justify-center ">
        <div className="w-[1000px] bg-white border border-gray-300 rounded-xl shadow-lg p-6">
          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">User Details</h2>
            <Link href="/add">
              <button className="px-4 py-2 bg-teal-400 rounded-lg text-white font-bold cursor-pointer mt-4">Add+</button></Link>

          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-blue-50">
                <th className="py-3 px-4 border-b text-left">Name</th>
                <th className="py-3 px-4 border-b text-left">Email</th>
                <th className="py-3 px-4 border-b text-left">Contact</th>
                <th className="py-3 px-4 border-b text-left">Status</th>
                <th className="py-3 px-4 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users?.map((data, index) => {
                  return (
                    <tr key={data._id} className="hover:bg-gray-50 transition">
                      <td className="py-3 px-4 border-b">{data.name}</td>
                      <td className="py-3 px-4 border-b">{data.email}</td>
                      <td className="py-3 px-4 border-b">{data.contact}</td>
                      <td className="py-3 px-4 border-b">
                        <StatusBtn id={data._id} status={data.status} />
                      </td>
                      <td className="py-3 px-4 border-b">
                        <DeleteBtn id={data._id} />
                      </td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      </div>

    </>

  );
}

export default HomePage;
