import { getBrands } from '@/library/api-call';
import React from 'react';

const BrandFilter = async () => {
    const brandData = await getBrands(null);
    const brands = brandData.data

    return (
        <div className="bg-[#f1f2f6] my-6 rounded-lg p-4 w-64 font-sans">
            <h2 className="font-bold text-lg mb-4">BRANDS</h2>

            <button className="bg-white font-semibold text-sm px-4 py-2 rounded-md shadow-sm mb-4">
                All Brands
            </button>

            <div>

                <ul className="space-y-1 text-sm text-gray-700">
                    {brands.map((item, index) => (
                        <li key={index} className="cursor-pointer space-y-3 hover:font-bold flex justify-between ">
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
