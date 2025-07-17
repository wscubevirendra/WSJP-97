'use client';

import React from 'react'
import axios from 'axios';

export default function StatusBtn({ status, id }) {
    function statusHandler() {
        axios.patch("http://localhost:5000/user/status-update/" + id).then(
            (response) => {
                window.location.reload()
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    return (
        <span onClick={statusHandler} className={`font-semibold ${status ? "text-green-600" : "text-red-600"}`}>
            {status ? "Active" : "Inactive"}
        </span>
    )
}
