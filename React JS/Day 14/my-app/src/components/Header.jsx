import React from 'react'

export default function Header() {
    return (
        <header className="w-full bg-white flex justify-center gap-4  shadow-md py-6">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </header>
    )
}
