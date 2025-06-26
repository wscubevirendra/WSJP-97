import { useState, useEffect } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    function getProduct() {
        axios.get("https://dummyjson.com/products/" + id).then(
            (response) => {
                setProduct(response.data)

            }
        ).catch(
            (error) => {
                setProduct([])
            }
        )
    }

    useEffect(
        () => {
            getProduct()
        },
        [id]
    )

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-start">
            <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Image */}
                <div className="w-full">
                    <img
                        src={product.thumbnail}
                        alt="Essence Mascara Lash Princess"
                        className="rounded-xl w-full h-auto object-contain shadow"
                    />
                    <div className="flex ">
                        {
                            product?.images?.map((img) => {
                                return <img width="100" src={img} alt="" />
                            })
                        }

                    </div>
                </div>

                {/* Right: Details */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        {product.title}
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">Brand: <span className="font-semibold">Essence</span></p>
                    <p className="text-sm text-gray-500 mt-1">Category: Beauty</p>

                    {/* Price & Discount */}
                    <div className="mt-4">
                        <span className="text-green-600 text-2xl font-bold">₹8.94</span>
                        <span className="line-through text-gray-400 ml-3 text-lg">₹9.99</span>
                        <span className="ml-2 text-red-500 text-sm">(10.48% OFF)</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center text-yellow-500 mt-3">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <span className="ml-2 text-sm text-gray-600">(Avg. Rating: 2.56)</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mt-4 text-sm">
                        The Essence Mascara Lash Princess is a popular mascara known for its
                        volumizing and lengthening effects. Achieve dramatic lashes with this
                        long-lasting and cruelty-free formula.
                    </p>

                    {/* Info */}
                    <div className="mt-6 space-y-1 text-sm text-gray-700">
                        <p><strong>Stock:</strong> 99</p>
                        <p><strong>SKU:</strong> BEA-ESS-ESS-001</p>
                        <p><strong>Weight:</strong> 4g</p>
                        <p><strong>Dimensions:</strong> 15.14 x 13.08 x 22.99 cm</p>
                        <p><strong>Warranty:</strong> 1 week warranty</p>
                        <p><strong>Shipping:</strong> Ships in 3-5 business days</p>
                        <p><strong>Return Policy:</strong> No return policy</p>
                        <p><strong>Min Order:</strong> 48 units</p>
                        <p className="text-green-600 font-semibold">In Stock</p>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="mt-6">
                        <button className="w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                            <FaShoppingCart className="mr-2" /> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
