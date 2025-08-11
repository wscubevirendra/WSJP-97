'use client'
import { getBrands } from '@/library/api-call';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const BrandFilter = () => {
    const router = useRouter()
    const [brands, setBrands] = useState([]);
    const [selbrand, setSelbrand] = useState("");

    useEffect(
        () => {
            if (selbrand) {
                const query = new URLSearchParams({ brand: selbrand })
                router.push(`?${query.toString()}`)
            } else {
                window.location.pathname
            }

        },
        [selbrand]
    )

    async function getdata() {
        const brandData = await getBrands(null);
        setBrands(brandData.data)
    }

    useEffect(
        () => {
            getdata()
        },
        []
    )


    return (
        <div className="bg-[#f1f2f6] my-6 rounded-lg p-4 w-64 font-sans">
            <h2 className="font-bold text-lg mb-4">BRANDS</h2>

            <button className="bg-white font-semibold text-sm px-4 py-2 rounded-md shadow-sm mb-4">
                All Brands
            </button>

            <div>

                <ul className="space-y-1 text-sm text-gray-700">
                    {brands.map((item, index) => (
                        <li onClick={() => setSelbrand(item.slug)} key={index} className="cursor-pointer space-y-3 hover:font-bold flex justify-between ">
                            <span> {item.name}</span>
                            <b>({item.productCount})</b>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BrandFilter;
