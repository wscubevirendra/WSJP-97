import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
    return (
        <>
          
            <div className="container my-5">
                {/* Hero Section */}
                <div className="text-center mb-5">
                    <h1 className="display-4">About Us</h1>
                    <p className="lead">
                        Welcome to <strong>MyShop</strong> — your one-stop solution for amazing products!
                    </p>
                </div>

                {/* About Content */}
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuyiPeLNmRRAyptFcFF6eCk0zrMF4RkWsiQ&s"
                            alt="About MyShop"
                            className="img-fluid rounded shadow-sm"
                        />
                    </div>

                    <div className="col-md-6">
                        <h2>Who We Are</h2>
                        <p>
                            MyShop is a leading e-commerce platform delivering quality products to customers worldwide.
                            Our mission is to provide exceptional shopping experiences with great deals and fast delivery.
                        </p>
                        <p>
                            We value trust, quality, and customer satisfaction above all. Join our community and explore endless possibilities.
                        </p>

                        {/* Social Links */}
                        <div>
                            <a href="https://facebook.com" className="text-dark me-3 fs-4">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" className="text-dark me-3 fs-4">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" className="text-dark me-3 fs-4">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" className="text-dark fs-4">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
          
        </>

    );
}
