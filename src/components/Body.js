import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserOffline from "./UserOffline";
import useResData from "../utils/useResData";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const { allRestaurants: fetchedRestaurants, loading, error } = useResData();
    const isOnline = useOnlineStatus();

    // Update local state when data is fetched
    React.useEffect(() => {
        if (fetchedRestaurants && fetchedRestaurants.length > 0) {
            setAllRestaurants(fetchedRestaurants);
            setFilteredRestaurants(fetchedRestaurants);
        }
    }, [fetchedRestaurants]);

    const handleSearch = () => {
        if (searchText.trim() !== "") {
            const filtered = allRestaurants.filter(r => 
                r?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filtered);
        } else {
            setFilteredRestaurants(allRestaurants);
        }
    };

    if (!isOnline) {
        return <UserOffline />;
    }

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section">
                <h1 className="hero-title">
                    Experience <span>Exquisite</span><br />
                    Fine Dining Delivered
                </h1>
                <p className="hero-subtitle">
                    Curated culinary masterpieces from world-class restaurants, served with elegance
                </p>
            </section>

            <div className="body-container">
                {/* Search */}
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search for a restaurant..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button className="search-btn" onClick={handleSearch}>
                        🔍
                    </button>
                </div>

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
                                    key={restaurant?.info?.id} 
                                    to={`/restaurants/${restaurant?.info?.id}`}
                                    className="restaurant-link"
                                >
                                    <RestaurantCard resData={restaurant} />
                                </Link>
                            ))}
                        </div>

                        {filteredRestaurants.length === 0 && (
                            <div className="empty-state">
                                <p>No restaurants found. Try a different search term.</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Body;
