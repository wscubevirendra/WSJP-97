import React from 'react'
import ProductCard from './ProductCard'
import data from './data'

export default function App() {
  return (
    <div className='container'>
      <div className='row gap-2'>
        {
          data.map((item, index) => {
            return <ProductCard source={item.thumbnail} description={item.description} title={item.title} />
          })
        }

      </div>
    </div>
  )
}
