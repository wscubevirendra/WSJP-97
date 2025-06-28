import React, { useContext } from 'react'
import { MainContext } from '../Store'

export default function D() {
    const { count } = useContext(MainContext)
    return (
        <div>D:{count}</div>
    )
}
