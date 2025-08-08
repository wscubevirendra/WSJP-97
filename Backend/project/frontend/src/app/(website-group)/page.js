import Card from '@/components/website/ProductCard'
import { getProducts } from '@/library/api-call';
import React from 'react'
import ProductCard from '@/components/website/ProductCard';

export default async function page() {
  const products = await getProducts(null);
  const data = products.data || [];
  return (
    <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-4 gap-4'>
      {
        data.map((product) => {
          return <ProductCard product={product} key={product._id} />
        })
      }
    </div>
  )
}
