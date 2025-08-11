'use client'
import React, { useEffect, useState } from 'react';
import { getColors } from '@/library/api-call';
import { useRouter } from 'next/navigation';

const ColorFilter = () => {
    const router = useRouter()
    const [colors, setColors] = useState([]);
    const [selcolor, setSelcolor] = useState("");

    useEffect(
        () => {
            if (selcolor) {
                const query = new URLSearchParams({ color: selcolor })
                router.push(`?${query.toString()}`)
            } else {
                window.location.pathname
            }

        },
        [selcolor, router]
    )

    async function getdata() {
        const colorsData = await getColors();
        setColors(colorsData.data)
    }

    useEffect(
        () => {
            getdata()
        },
        []
    )

    return (
        <div className="bg-[#f1f2f6] my-6 rounded-lg p-4 w-64 font-sans">
            <h2 className="font-bold text-lg mb-4">COLOR</h2>

            <button className="bg-white font-semibold text-sm px-4 py-2 rounded-md shadow-sm mb-4">
                All Colors
            </button>

            <div>
                <ul className="space-y-1 text-sm flex gap-4 flex-wrap text-gray-700">
                    {colors.map((item, index) => (
                        <li onClick={() => setSelcolor(item.slug)} style={{ background: item.hexcode }} key={index} className="cursor-pointer w-6 h-6 rounded-xl hover:underline">

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ColorFilter;
