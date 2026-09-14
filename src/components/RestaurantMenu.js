import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestuarantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const { resInfo, loading, error } = useRestaurantMenu(resId);
    const [showAll, setShowAll] = useState(false);

    if (loading) {
        return <Shimmer />;
    }

    if (error || !resInfo) {
        return (
            <div className="error-container-page">
                <h1>404</h1>
                <h2>Recipe not found</h2>
                <p>The recipe you're looking for doesn't exist or couldn't be loaded.</p>
                <a href="/React-Rest/" className="back-btn">Back to Home</a>
            </div>
        );
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

    // Format instructions
    const formattedInstructions = resInfo.strInstructions
        ? resInfo.strInstructions
              .split(/\r?\n/)
              .filter(line => line.trim())
              .map((line, idx) => <p key={idx} className="instruction-step">{line.replace(/^\d+\.\s*/, '')}</p>)
        : [];

    const displayInstructions = showAll ? formattedInstructions : formattedInstructions.slice(0, 5);

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
                        {resInfo.strCategory && (
                            <span className="menu-category">{resInfo.strCategory}</span>
                        )}
                        {resInfo.strArea && (
                            <span className="menu-area">{resInfo.strArea}</span>
                        )}
                    </div>
                    <div className="instructions-preview">
                        {displayInstructions}
                        {formattedInstructions.length > 5 && (
                            <button 
                                className="show-more-btn"
                                onClick={() => setShowAll(!showAll)}
                            >
                                {showAll ? "Show Less" : "Show More"}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {ingredients.length > 0 && (
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
            )}

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
                {resInfo.strTags && (
                    <div className="tags">
                        {resInfo.strTags.split(',').map((tag, index) => (
                            <span key={index} className="tag">{tag.trim()}</span>
                        ))}
                    </div>
                )}
                {resInfo.strSource && (
                    <a href={resInfo.strSource} target="_blank" rel="noopener noreferrer" className="source-link">
                        Original Recipe
                    </a>
                )}
            </div>
        </div>
    );
};

export default RestaurantMenu;
