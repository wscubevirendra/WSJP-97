import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import ProductView from "./pages/ProductView";
import Cart from "./pages/Cart";


function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/:category_slug?",
          element: <Home />
        },
        {
          path: "/product-view/:id",
          element: <ProductView />
        },
        {
          path:"/cart",
          element:<Cart/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routers} />
  )
}

export default App;