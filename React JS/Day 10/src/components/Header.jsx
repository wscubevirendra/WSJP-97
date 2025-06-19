import React from 'react';
import { FaHome, FaUserAlt, FaShoppingCart, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                {/* Logo / Brand */}
                <a className="navbar-brand" href="#">
                    <FaShoppingCart className="me-2" /> MyShop
                </a>

                {/* Toggler for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <FaBars />
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <FaHome className="me-1" /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                <FaUserAlt className="me-1" /> About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                <FaUserAlt className="me-1" /> Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#cart">
                                <FaShoppingCart className="me-1" /> Cart
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
