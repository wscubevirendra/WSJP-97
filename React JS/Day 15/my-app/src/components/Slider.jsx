'use client'

import React, { useEffect, useState } from 'react'

export default function Slider({ sliderImage }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Hello")
            setCurrent((prev) => (prev === sliderImage.length - 1 ? 0 : prev + 1));
        }, 2000);


        return () => { clearInterval(interval) }  //


    }, [sliderImage.length]);

    return (
        <div className="relative w-full h-[300px] overflow-hidden rounded-3xl">
            {sliderImage.map((data, index) => (
                <img
                    key={index}
                    className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${current === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    src={data.image}
                    alt="Delicious food"
                />
            ))}
        </div>
    );
}
