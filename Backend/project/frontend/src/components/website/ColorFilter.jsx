import { getColors } from '@/library/api-call';
import React from 'react';

const ColorFilter = async () => {
    const colorsData = await getColors();
    const data = colorsData.data

    return (
        <div className="bg-[#f1f2f6] my-6 rounded-lg p-4 w-64 font-sans">
            <h2 className="font-bold text-lg mb-4">COLOR</h2>

            <button className="bg-white font-semibold text-sm px-4 py-2 rounded-md shadow-sm mb-4">
                All Colors
            </button>

            <div>
                <ul className="space-y-1 text-sm flex gap-4 flex-wrap text-gray-700">
                    {data.map((item, index) => (
                        <li style={{ background: item.hexcode }} key={index} className="cursor-pointer w-6 h-6 rounded-xl hover:underline">

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ColorFilter;
