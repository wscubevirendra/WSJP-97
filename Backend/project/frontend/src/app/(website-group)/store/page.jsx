import ProductCard from '@/components/website/ProductCard';
import { getProducts } from '@/library/api-call'
import React from 'react'

export default async function page({ searchParams }) {
    const color = searchParams.color || null;
    const brand = searchParams.brand || null;
    const products = await getProducts(null, null, color,brand)
    const data = products.data || [];
    return (
        <div className='grid grid-cols-3 space-x-6 space-y-10 '>
            {
                data.map((product) => {
                    return <ProductCard product={product} key={product._id} />
                })
            }
        </div>


    )
}
