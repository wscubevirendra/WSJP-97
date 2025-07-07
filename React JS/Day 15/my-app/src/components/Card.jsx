import React from "react";
import Link from "next/link";
const Card = ({ image, title, prepTimeMinutes, cookTimeMinutes, id }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <Link href={`/recipes/${id}`}><img className="w-full h-48 object-cover" src={image} alt={title} /></Link>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <div className="flex justify-between text-gray-700 text-base">
                <span>Prep: {prepTimeMinutes} min</span>
                <span>Cook: {cookTimeMinutes} min</span>
            </div>
        </div>
    </div>
);

export default Card;