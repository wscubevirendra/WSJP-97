'use client'

import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button>+</button>
            <h1>0</h1>
            <button>-</button>
        </div>
    )
}
