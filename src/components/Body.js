import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserOffline from "./UserOffline";
import { filterData } from "../utils/Helper";
import useResData from "../utils/useResData";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [allRestaurants, filteredRestaurants] = useResData();
    const isOnline = useOnlineStatus();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category);
    };

    if (!isOnline) {
        return <UserOffline />;
    }

    return (
        <div className="body-container">
            {/* Category Filter */}
            <div className="category-filter">
                <h2 className="filter-title">Browse by Category</h2>
                <div className="category-list">
                    {allRestaurants.categories?.map((cat) => (
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

            {/* Search */}
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for a meal..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="search-btn" onClick={() => setSearchText("")}>
                    🔍
                </button>
            </div>

            {/* Loading State */}
            {allRestaurants.loading ? (
                <Shimmer />
            ) : (
                <>
                    {/* Restaurant Grid */}
                    <div className="restaurant-list">
                        {filteredRestaurants.allRestaurants?.map((restaurant) => (
                            <Link 
                                key={restaurant.info.id} 
                                to={`/restaurants/${restaurant.info.id}`}
                                className="restaurant-link"
                            >
                                <RestaurantCard resData={restaurant} />
                            </Link>
                        ))}
                    </div>

                    {filteredRestaurants.allRestaurants?.length === 0 && (
                        <div className="empty-state">
                            <p>No meals found. Try a different category or search term.</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Body;
