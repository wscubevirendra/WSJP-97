import React from 'react';
import Image from 'next/image';
import { getRecipes } from '@/library/api-call';
import Card from '@/components/Card';
import Slider from '@/components/Slider';

export default async function Homepage() {
  const recipes = await getRecipes();
  const topRecipes = recipes.slice(1, 5);
  const featureRecipes = recipes.slice(6, 10);
  const mostLikeRecipes = recipes.slice(11, 15);
  const sliderImage = recipes.slice(20, 25);


  console.log(recipes)
  return (
    <div className="max-w-[1300px] mx-auto  space-y-10">

      <section className="p-8 rounded-lg h-[400px] shadow grid grid-cols-1 md:grid-cols-2 gap-8 bg-gradient-to-r from-yellow-100 to-orange-100 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Delicious Recipes for Everyone</h1>
          <p className="text-lg text-gray-600">
            Discover and cook amazing recipes from around the world. Whether you're a beginner or a pro, find your next favorite dish here!
          </p>
          <button className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition">
            Browse Recipes
          </button>
        </div>
        <div className="h-[300px]"> {/* Ensures space for the slider */}
          <Slider sliderImage={sliderImage} />
        </div>
      </section>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Top Recipes</h2>
        <div className='grid grid-cols-4 gap-4'>
          {
            topRecipes.map((data, index) => {
              return (
                <Card key={data.id} image={data.image} title={data.name} cookTimeMinutes={data.cookTimeMinutes} prepTimeMinutes={data.prepTimeMinutes} />
              )
            })
          }


        </div>

      </section>

      {/* Feature Recipes Section */}
      <section className="bg-gray-50 rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Feature Recipes</h2>
        <div className='grid grid-cols-4 gap-4'>
          {
            featureRecipes.map((data, index) => {
              return (
                <Card key={data.id} image={data.image} title={data.name} cookTimeMinutes={data.cookTimeMinutes} prepTimeMinutes={data.prepTimeMinutes} />
              )
            })
          }


        </div>
      </section>

      {/* Most Like Section */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-800">Most Like</h2>
        <div className='grid grid-cols-4 gap-4'>
          {
            mostLikeRecipes.map((data, index) => {
              return (
                <Card key={data.id} image={data.image} title={data.name} cookTimeMinutes={data.cookTimeMinutes} prepTimeMinutes={data.prepTimeMinutes} />
              )
            })
          }


        </div>
      </section>
    </div>
  );
}
