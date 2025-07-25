'use client'
import { AxiosInstance, notify } from '@/library/helper'
import React from 'react'
import { useRouter } from 'next/navigation';

export default function StatusBtn({ id, status }) {
    const router = useRouter()
    function statusHandler() {
        AxiosInstance.patch(`category/status/${id}`).then((response) => {
            notify(response.data.message, response.data.success);
            if (response.data.success) {
                router.refresh()
            }
        }).catch((error) => {
            notify("Someting", 0);

        });
    }
    return (
        <>
            {
                status ?
                    <button onClick={statusHandler} className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium hover:bg-gray-200">
                        Active
                    </button> :
                    <button onClick={statusHandler} className="rounded-md bg-rose-100 px-3 py-1.5 text-xs font-medium hover:bg-gray-200">
                        Inactive
                    </button>
            }
        </>


    )
}
