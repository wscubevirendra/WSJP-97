import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 text-center">
            <p className="text-sm">&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
        </footer>
    )
}
