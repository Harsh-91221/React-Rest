import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestuarantMenu";
import { ITEM_IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const { restaurant, menuItems, loading, error } = useRestaurantMenu(resId);
    const [showAll, setShowAll] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addItem({ card: { info: item } }));
    };

    if (loading) {
        return <Shimmer />;
    }

    if (error || !restaurant) {
        return (
            <div className="error-container-page">
                <h1>404</h1>
                <h2>Restaurant not found</h2>
                <p>The restaurant you're looking for doesn't exist or couldn't be loaded.</p>
                <a href="/React-Rest/" className="back-btn">Back to Home</a>
            </div>
        );
    }

    return (
        <div className="menu-container">
            <div className="menu-header">
                <img
                    src={ITEM_IMG_CDN_URL + restaurant?.cloudinaryImageId}
                    alt={restaurant?.name}
                    className="menu-image"
                    onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop";
                    }}
                />
                <div className="menu-info">
                    <h1 className="menu-title">{restaurant?.name}</h1>
                    <div className="menu-meta">
                        {restaurant?.avgRating && (
                            <span className="menu-rating">⭐ {restaurant?.avgRating} ({restaurant?.totalRatingsString})</span>
                        )}
                        {restaurant?.costForTwo && (
                            <span className="menu-cost">{restaurant?.costForTwo}</span>
                        )}
                        {restaurant?.sla?.slaString && (
                            <span className="menu-time">{restaurant?.sla.slaString}</span>
                        )}
                        {restaurant?.sla?.lastMileTravelString && (
                            <span className="menu-distance">📍 {restaurant.sla.lastMileTravelString}</span>
                        )}
                    </div>
                    {restaurant?.cuisines && (
                        <p className="menu-cuisines">{restaurant.cuisines.join(", ")}</p>
                    )}
                    {restaurant?.areaName && (
                        <p className="menu-address">📍 {restaurant.areaName}</p>
                    )}
                </div>
            </div>

            <div className="menu-section">
                <h2 className="section-title">Menu ({menuItems.length})</h2>
                <div className="menu-items-list">
                    {menuItems.map((item) => (
                        <div key={item.id} className="menu-item-card">
                            <div className="menu-item-info">
                                <h4 className="menu-item-name">{item.name}</h4>
                                {item.price ? (
                                    <span className="menu-item-price">₹{item.price / 100}</span>
                                ) : item.defaultPrice ? (
                                    <span className="menu-item-price">₹{item.defaultPrice / 100}</span>
                                ) : (
                                    <span className="menu-item-price">View Price</span>
                                )}
                                {item.rating && (
                                    <span className="menu-item-rating">⭐ {item.rating.avgRating}</span>
                                )}
                                {item.description && (
                                    <p className="menu-item-description">{item.description}</p>
                                )}
                                {item.badges && item.badges.length > 0 && (
                                    <div className="menu-item-badges">
                                        {item.badges.map((badge, idx) => (
                                            <span key={idx} className="tag">{badge.label}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="menu-item-right">
                                {item.imageId && (
                                    <img
                                        className="menu-item-image"
                                        src={ITEM_IMG_CDN_URL + item.imageId}
                                        alt={item.name}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                )}
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => handleAddToCart(item)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="menu-footer">
                <a href="/React-Rest/" className="back-btn">← Back to Restaurants</a>
            </div>
        </div>
    );
};
export default RestaurantMenu;
