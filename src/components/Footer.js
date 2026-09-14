import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Namaste Food</h4>
                    <p style={{ color: "#b0b0b0", lineHeight: "1.6" }}>
                        Discover the best restaurants and order delicious food delivered to your doorstep.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul>
                        <li>Email: hello@namastefood.com</li>
                        <li>Phone: +91 98765 43210</li>
                        <li>Address: 123 Food Street, Delhi, India</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="#" style={{ color: "#b0b0b0", textDecoration: "none" }}>Facebook</a></li>
                        <li><a href="#" style={{ color: "#b0b0b0", textDecoration: "none" }}>Twitter</a></li>
                        <li><a href="#" style={{ color: "#b0b0b0", textDecoration: "none" }}>Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Namaste Food. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
