'use client'
import { AxiosInstance, notify } from '@/library/helper'
import React from 'react'
import { useRouter } from 'next/navigation';

export default function DeleteBtn({ id }) {
    const router = useRouter()
    function deleteHandler() {
        AxiosInstance.delete(`category/delete/${id}`).then((response) => {
            notify(response.data.message, response.data.success);
            if (response.data.success) {
                router.refresh()
            }
        }).catch((error) => {
            notify("Someting", 0);

        });
    }
    return (
        <button onClick={deleteHandler} className="rounded-md bg-rose-100 px-3 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-200">
            Delete
        </button>
    )
}
