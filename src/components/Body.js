import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserOffline from "./UserOffline";
import useResData from "../utils/useResData";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const { allRestaurants, categories, loading, error } = useResData();
    const isOnline = useOnlineStatus();

    // Apply search and category filters
    useEffect(() => {
        let result = allRestaurants;
        
        // Apply category filter - match cuisines to category
        if (selectedCategory) {
            result = result.filter(r => 
                r.info.cuisines.some(cuisine => 
                    cuisine.toLowerCase() === selectedCategory.toLowerCase()
                )
            );
        }
        
        // Apply search filter
        if (searchText.trim() !== "") {
            result = result.filter(r => 
                r.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
        }
        
        setFilteredRestaurants(result);
    }, [allRestaurants, selectedCategory, searchText]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    if (!isOnline) {
        return <UserOffline />;
    }

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title">
                    Discover <span>Extraordinary</span><br />
                    Flavors Worldwide
                </h1>
                <p className="hero-subtitle">
                    Explore hundreds of authentic recipes from top chefs around the globe
                </p>
            </section>

            <div className="body-container">
                {/* Search */}
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for a meal..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="search-btn" onClick={() => {}}>
                        🔍
                    </button>
                </div>

                {/* Veg/Non-Veg Toggle */}
                <div className="diet-toggle-container">
                    <button 
                        className={`diet-toggle ${selectedCategory === 'Chicken' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('Chicken')}
                    >
                        🍗 Non-Veg
                    </button>
                    <button 
                        className={`diet-toggle ${selectedCategory === 'Vegetarian' ? 'active' : ''}`}
                        onClick={() => handleCategoryClick('Vegetarian')}
                    >
                        🥬 Veg
                    </button>
                </div>

                {/* Theme Toggle */}
                <div className="theme-toggle-container">
                    <label className="theme-toggle-label">Dark Mode</label>
                    <button 
                        className="theme-toggle-switch"
                        onClick={() => {
                            const html = document.documentElement;
                            html.classList.toggle('dark-mode');
                        }}
                    >
                        <span className="theme-toggle-thumb"></span>
                    </button>
                    <label className="theme-toggle-label">Light Mode</label>
                </div>

                {/* Category Filter */}
                {!loading && categories.length > 0 && (
                    <div className="category-filter">
                        <h2 className="filter-title">Browse by Category</h2>
                        <div className="category-list">
                            {categories.map((cat) => (
                                <button
                                    key={cat.strCategory}
                                    className={`category-btn ${selectedCategory === cat.strCategory ? 'active' : ''}`}
                                    onClick={() => handleCategoryClick(cat.strCategory)}
                                >
                                    {cat.strCategory}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Loading State */}
                {loading ? (
                    <Shimmer />
                ) : error ? (
                    <div className="error-container">
                        <p>Failed to load data. Please try again later.</p>
                    </div>
                ) : (
                    <>
                        {/* Restaurant Grid */}
                        <div className="restaurant-list">
                            {filteredRestaurants.map((restaurant) => (
                                <Link 
                                    key={restaurant.info.id} 
                                    to={`/restaurants/${restaurant.info.id}`}
                                    className="restaurant-link"
                                >
                                    <RestaurantCard resData={restaurant} />
                                </Link>
                            ))}
                        </div>

                        {filteredRestaurants.length === 0 && (
                            <div className="empty-state">
                                <p>No meals found. Try a different category or search term.</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Body;