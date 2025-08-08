import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const {
        name,
        thumbnail,
        originalPrice,
        finalPrice,
        discountPercentage
    } = product;

    return (
        <div className="relative bg-white shadow-md rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300">
            {/* Discount Badge */}
            {discountPercentage && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md z-10">
                    {discountPercentage}% OFF
                </div>
            )}

            {/* Thumbnail */}
            <img
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}images/product/${thumbnail}`}
                alt={name}
                className="w-full h-48 object-cover"
            />

            {/* Product Info */}
            <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2 truncate">
                    {name}
                </h3>

                {/* Prices */}
                <div className="flex justify-between items-center gap-2">
                    <span className="text-lg font-bold text-green-600">
                        Rs. {finalPrice}
                    </span>
                    {originalPrice !== finalPrice && (
                        <span className="text-sm line-through text-gray-500">
                            Rs. {originalPrice}
                        </span>
                    )}
                </div>
            </div>

            {/* Hover Cart Button */}
            <div className="absolute   bottom-0 left-0 w-full px-4 pb-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <button className="w-full cursor-pointer  flex items-center justify-center gap-2 px-4 py-2 bg-[#01A49E] text-white text-sm rounded-md hover:bg-[#74adab] transition">
                    <FaShoppingCart /> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
