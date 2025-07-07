import React, { createContext, useEffect } from 'react'
import axios from 'axios';
const Context = createContext();

export default function Store({ children }) {
    const [cart, setCart] = React.useState([]);
    const [products, setProducts] = React.useState([]);
    function getProduct() {
        axios.get("https://dummyjson.com/products").then(
            (response) => {
                setProducts(response.data.products);
            }
        ).catch((error) => {
            console.error("Error fetching products:", error);
        });
    }

    useEffect(
        () => {
            getProduct()
        },
        []
    )


    function addToCart(id) {
        const product = products.find((item) => item.id === id);
        if (!product) return;
        const existingProduct = cart.find((item) => item.id === id);
        if (existingProduct) {
            //true update the quantity
            setCart(cart.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item));
        } else {
            //false add the product
            setCart([...cart, { ...product, qty: 1 }]);
        }

    }

    function qtyHandler(id, flag) {
        if (flag == 1) {
            setCart(cart.map((item) => item.id === id ? { ...item, qty: item.qty + 1 } : item));
        } else {
            setCart(cart.map((item) => item.id === id ? { ...item, qty: item.qty - 1 } : item));
        }
    }

    function removeFromCart(id) {
        setCart(cart.filter((item) => item.id !== id));
    }

    return (
        <Context.Provider value={{ products, addToCart, cart, qtyHandler, removeFromCart }}>
            {
                children
            }
        </Context.Provider>
    )
}


export { Context }
