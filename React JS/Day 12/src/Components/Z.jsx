import React, { useContext } from 'react'
import { MainContext } from '../Store'

export default function Z() {
    const { count, setCount } = useContext(MainContext)
    return (
        <div>Z
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}
