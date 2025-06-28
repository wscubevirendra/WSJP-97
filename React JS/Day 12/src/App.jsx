import React, { useContext, useState } from 'react'
import B from './Components/B'
import X from './Components/X'
import { MainContext } from './Store'

export default function App() {
  const { count } = useContext(MainContext)
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100'>
      A: {count}
      <div className='flex'>
        <B />
        <X />
      </div>

    </div>
  )
}
