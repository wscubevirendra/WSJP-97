import React, { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);

    function incHandler() {
        setCount(count + 1)
    }


    function decHandler() {
        if (count == 0) return
        setCount(count - 1)
    }


    return (
        <div className='card'>
            <button onClick={incHandler}>+</button>
            <h1>{count}</h1>
            <button onClick={decHandler}>-</button>
        </div>
    )
}

export default Count
