import { getRecipesById } from '@/library/api-call';
import React from 'react';


export default async function Page({ params }) {   
    const recipe = await getRecipesById(params?.recipe_id);
    console.log(recipe)
    return (
        <div className="max-w-[1200px] mx-auto p-6 bg-white rounded-lg shadow-xl my-8">
            <div className="flex flex-col md:flex-row gap-6">
                <img
                    src={recipe?.image}
                    alt={recipe?.name}
                    className="w-full md:w-64 h-64 object-cover rounded-lg shadow"
                />
                <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">{recipe.name}</h1>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-yellow-500 text-lg">★ {recipe.rating}</span>
                        <span className="text-gray-500 text-sm">({recipe.reviewCount} reviews)</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {recipe.tags.map(tag => (
                            <span key={tag} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">{tag}</span>
                        ))}
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{recipe.cuisine}</span>
                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">{recipe.difficulty}</span>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600 mb-2">
                        <span>Prep: {recipe.prepTimeMinutes} min</span>
                        <span>Cook: {recipe.cookTimeMinutes} min</span>
                        <span>Servings: {recipe.servings}</span>
                        <span>Calories: {recipe.caloriesPerServing}</span>
                    </div>
                    <div className="flex gap-2 text-xs text-gray-500">
                        {recipe.mealType.map(type => (
                            <span key={type} className="italic">{type}</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                <ul className="list-disc list-inside space-y-1">
                    {recipe.ingredients.map(ing => (
                        <li key={ing}>{ing}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                <ol className="list-decimal list-inside space-y-2">
                    {recipe.instructions.map((step, idx) => (
                        <li key={idx}>{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
