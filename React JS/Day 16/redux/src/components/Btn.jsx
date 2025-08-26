'use client'

import { increment } from '@/redux/features/counterSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function Btn() {
    const dispatcher = useDispatch()

    function Handlerfunction() {
        dispatcher(increment())
    }

    return (
        <div>
            <button onClick={Handlerfunction} className='bg-white text-red-400 px-6 py-3 rounded-3xl cursor-pointer'>Click</button>
        </div>
    )
}
