import React from "react";
import food from "../images/food-png.png";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-hero">
                <div className="about-content">
                    <h2>
                        Step into <br />
                        Flavorful Fields of <br />
                        <span>Culinary Delight</span>
                    </h2>
                    <p className="tagline">"Where Every Bite Tells a Story"</p>
                    <p>
                        Welcome to Namaste Food, your ultimate destination for discovering 
                        delicious meals from around the world. We bring you a curated 
                        collection of recipes that celebrate diverse cuisines and flavors.
                    </p>
                    <p>
                        From hearty comfort foods to exotic delicacies, explore hundreds 
                        of authentic recipes with step-by-step instructions and high-quality 
                        ingredient lists.
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

            <div className="about-features">
                <div className="feature-card">
                    <div className="feature-icon">🍳</div>
                    <h3>Wide Variety</h3>
                    <p>Explore recipes from multiple cuisines including Italian, Asian, American, and more.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">📹</div>
                    <h3>Video Tutorials</h3>
                    <p>Watch step-by-step video guides to master every dish perfectly.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🥘</div>
                    <h3>Complete Ingredients</h3>
                    <p>Get detailed ingredient lists with precise measurements for each recipe.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">⭐</div>
                    <h3>Top Rated</h3>
                    <p>Discover highly-rated recipes loved by food enthusiasts worldwide.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
