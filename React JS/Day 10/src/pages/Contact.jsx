import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <>
          
            <div className="container my-5">
                <h1 className="text-center mb-4">Contact Us</h1>

                <div className="row">
                    {/* Contact Info + Form */}
                    <div className="col-md-6 mb-4">
                        <h4>Get in Touch</h4>
                        <p><FaPhoneAlt className="me-2" /> +91 12345 67890</p>
                        <p><FaEnvelope className="me-2" /> info@myshop.com</p>
                        <p><FaMapMarkerAlt className="me-2" /> 123 Main Street, City, Country</p>

                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Your Email" required />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className="col-md-6">
                        <h4>Our Location</h4>
                        <div className="ratio ratio-16x9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.108749969379!2d75.78839971503077!3d26.91243398311557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3b24e51febb%3A0xc7e768f2f2497bb!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1638853543857!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
          
        </>

    );
}
