import React, { useEffect, useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

export default function Card({ title, description, image }) {
    const [recipes, setRecipes] = useState([]);
    async function getrecipes() {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        setRecipes(data.recipes)
    }

    useEffect(
        () => {
            getrecipes()
        },
        []
    )

    return (
        <div className='container-xl my-5'>
            <div className='row gy-4'>
                {
                    recipes.map((data, index) => {
                        return (
                            <div className=" col-3">
                                <div className='card shadow-sm'>
                                    <img src={data.image} className="card-img-top" alt={data.name} />

                                    {/* Card Body */}
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>


                                        {/* Action buttons */}
                                        <div className="d-flex justify-content-between">
                                            <button className="btn btn-outline-primary">
                                                <FaShoppingCart className="me-1" /> Add to Cart
                                            </button>
                                            <button className="btn btn-outline-danger">
                                                <FaHeart />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </div>


    );
}
