import React from "react";
import food from "../images/food-png.png";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-hero">
                <div className="about-content">
                    <h2>
                        Where <br />
                        Culinary Art Meets <br />
                        <span>Modern Elegance</span>
                    </h2>
                    <p className="tagline">"Refined Dining, Delivered to Your Door"</p>
                    <p>
                        Welcome to Noir Table, where we bring the finest restaurants 
                        to your doorstep. We partner with acclaimed chefs and 
                        established eateries to deliver gourmet experiences.
                    </p>
                    <p>
                        From intimate dinners to grand feasts, our curated collection 
                        of premium dishes ensures every meal is a memorable occasion.
                    </p>
                    <Link to="/" className="checkout-btn" style={{ marginTop: '24px', display: 'inline-block' }}>
                        Explore Recipes
                    </Link>
                </div>
                <div className="about-image-wrapper">
                    <img 
                        src={food} 
                        alt="Delicious Food" 
                        className="about-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
