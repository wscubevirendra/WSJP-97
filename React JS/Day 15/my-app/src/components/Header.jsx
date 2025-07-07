import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="shadow-lg px-8 py-4 bg-gray-800 flex items-center justify-between">
            <div className="font-bold text-2xl text-white">
                Recipe Website
            </div>
            <nav>
                <Link href="/" className="mx-3 no-underline text-white font-medium text-base px-3 py-1 rounded hover:bg-white hover:text-black shadow-sm transition">Home</Link>
                <Link href="/recipes" className="mx-3 no-underline text-white font-medium text-base px-3 py-1 rounded hover:bg-white hover:text-black shadow-sm transition">Recipe</Link>
                <Link href="/about" className="mx-3 no-underline text-white font-medium text-base px-3 py-1 rounded hover:bg-white hover:text-black shadow-sm transition">About</Link>
            </nav>
        </header>
    );
}
