'use client';
import axios from 'axios'
import React from 'react'

export default function DeleteBtn({ id }) {

    function deleteHandler() {
        axios.delete("http://localhost:5000/user/delete/" + id).then(
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
        <div onClick={deleteHandler}>DeleteBtn</div>
    )
}
