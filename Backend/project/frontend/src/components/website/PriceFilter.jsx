'use client'
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';


const PriceFilter = () => {
    const router = useRouter();
    const SearchParams = useSearchParams()
    const [price, setPrice] = useState([]);
    useEffect(
        () => {
            const min = SearchParams.get('min');
            const max = SearchParams.get('max');
            setPrice([Number(min), Number(max)]);
        },
        [SearchParams]
    )


    function changeHandler(data) {
        setPrice(data)
        const query = new URLSearchParams();
        query.set("min", data[0]);
        query.set("max", data[1]);
        router.push(`?${query.toString()}`);
    }


    return (
        <div className="bg-[#f1f2f6] my-6 rounded-lg p-4 w-64 font-sans">
            <h2 className="font-bold text-lg mb-4">COLOR</h2>
            <div className='flex gap-4 my-4'>
                <label>{price[0]}</label>
                <span>-</span>
                <label>{price[1]}</label>
            </div>
            <RangeSlider min="100" max="60000" value={price} onInput={changeHandler} />
        </div>
    );
};


export default PriceFilter;
