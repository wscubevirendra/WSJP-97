'use client'
import { AxiosInstance, notify } from '@/library/helper'
import React from 'react'
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'

export default function DeleteBtn({ path }) {
    const router = useRouter()
    function deleteHandler() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                AxiosInstance.delete(path).then((response) => {
                    notify(response.data.message, response.data.success);
                    if (response.data.success) {
                        router.refresh()
                    }
                }).catch((error) => {
                    notify("Something went wrong", 0);

                });
            }
        });

    }
    return (
        <button onClick={deleteHandler} className="rounded-md bg-rose-100 px-3 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-200">
            Delete
        </button>
    )
}
