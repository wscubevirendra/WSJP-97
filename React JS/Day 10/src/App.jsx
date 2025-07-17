import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage'

export default function App() {
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

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        { path: "/", element: <Home recipes={recipes} /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> }
      ]
    },

  ])
  return (
    <RouterProvider router={routers} />
  )
}
