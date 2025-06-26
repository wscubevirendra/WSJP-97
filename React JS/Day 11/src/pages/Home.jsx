import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function Home() {
    const { category_slug } = useParams();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(
        () => {

            axios.get("https://dummyjson.com/products/categories").then(
                (response) => {
                    setCategories(response.data)
                }
            ).catch(
                (error) => {
                    setCategories([])
                }
            )
        },
        []
    )

    useEffect(
        () => {
            //category_slug==null
            let API = ""
            if (category_slug == null) {
                API = "https://dummyjson.com/products"
            } else {
                API = "https://dummyjson.com/products/category/" + category_slug
            }
            setLoading(true)

            axios.get(API).then(
                (response) => {

                    setProducts(response.data.products)
                }
            ).catch(
                (error) => {
                    setProducts([])
                }
            ).finally(
                () => {
                    setLoading(false)
                }
            )
        },
        [category_slug]
    )

    return (
        <div className=' max-w-[1300px] grid grid-cols-5  mx-auto '>
            <div className='col-span-1'>
                <ul className='p-6'>
                    {
                        categories.map((cat, index) => {
                            return (
                                <li key={index} className=' bg-gray-800 mb-2 cursor-pointer text-white text-center p-1 rounded-sm hover:bg-teal-700 hover:font-bold hover:animate-pulse'>
                                    <Link to={`/${cat.slug}`}> {cat.name}</Link>

                                </li>
                            )
                        })
                    }

                </ul>

            </div>
            <div className='col-span-4  grid grid-cols-3 content-start my-4 gap-4'>
                {
                    loading == true
                        ?
                        [1, 2, 3, 4, 5, 6, 7].map((d, i) => {
                            return (
                                <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                                    <div className="w-full h-62 bg-gray-300"></div>
                                    <div className="p-4 space-y-3">
                                        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                                        <div className="h-10 bg-gray-300 rounded-xl w-full mt-2"></div>
                                    </div>
                                </div>
                            )
                        })

                        :

                        products.map((data, index) => {
                            return (
                                <div key={index} className=" bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                    <Link to={`/product-view/${data.id}`}>
                                        <img
                                            className="w-full h-62 object-cover"
                                            src={data.thumbnail}
                                            alt={data.title}
                                        />
                                    </Link>

                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>
                                        <p className="text-xl font-bold text-green-600 mt-2">${data.price}</p>
                                        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            )
                        })

                }


            </div>

        </div>
    )
}
