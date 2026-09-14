import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestuarantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showInstructions, setShowInstructions] = useState(false);

    if (resInfo === null) {
        return <Shimmer />;
    }

    // Parse ingredients from API
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = resInfo[`strIngredient${i}`];
        const measure = resInfo[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            ingredients.push({
                name: ingredient,
                measure: measure || ""
            });
        }
    }

    return (
        <div className="menu-container">
            <div className="menu-header">
                <img 
                    src={resInfo.strMealThumb} 
                    alt={resInfo.strMeal} 
                    className="menu-image"
                />
                <div className="menu-info">
                    <h1 className="menu-title">{resInfo.strMeal}</h1>
                    <div className="menu-meta">
                        <span className="menu-category">{resInfo.strCategory}</span>
                        <span className="menu-area">{resInfo.strArea}</span>
                    </div>
                    <p className="menu-description">{resInfo.strInstructions}</p>
                </div>
            </div>

            <div className="menu-section">
                <h2 className="section-title">Ingredients</h2>
                <div className="ingredients-grid">
                    {ingredients.map((ing, index) => (
                        <div key={index} className="ingredient-item">
                            <span className="ingredient-name">{ing.name}</span>
                            <span className="ingredient-measure">{ing.measure}</span>
                        </div>
                    ))}
                </div>
            </div>

            {resInfo.strYoutube && (
                <div className="menu-section">
                    <h2 className="section-title">Watch Tutorial</h2>
                    <div className="video-container">
                        <iframe
                            width="100%"
                            height="400"
                            src={resInfo.strYoutube.replace('watch?v=', 'embed/')}
                            title="Recipe Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}

            <div className="menu-links">
                {resInfo.strSource && (
                    <a href={resInfo.strSource} target="_blank" rel="noopener noreferrer" className="source-link">
                        Original Recipe
                    </a>
                )}
                {resInfo.strTags && (
                    <div className="tags">
                        {resInfo.strTags.split(',').map((tag, index) => (
                            <span key={index} className="tag">{tag.trim()}</span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestaurantMenu;
