import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainPage from './pages/MainPage'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> }
      ]
    },

  ])
  return (
    <RouterProvider router={routers} />
  )
}
