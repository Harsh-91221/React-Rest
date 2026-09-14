import { useEffect, useState } from "react";
import { API_URL, CATEGORIES_URL } from "./constants";

const useResData = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            // Fetch categories
            const catResponse = await fetch(CATEGORIES_URL);
            if (!catResponse.ok) throw new Error("Failed to fetch categories");
            const catData = await catResponse.json();
            const categoryList = catData?.meals || [];
            setCategories(categoryList);

            // Fetch meals from first category
            if (categoryList.length > 0) {
                const firstCategory = categoryList[0].strCategory;
                const response = await fetch(`${API_URL}${firstCategory}`);
                if (!response.ok) throw new Error("Failed to fetch meals");
                const data = await response.json();
                const meals = data?.meals || [];

                const restaurantData = meals.map((meal, index) => ({
                    info: {
                        id: meal.idMeal,
                        name: meal.strMeal,
                        cuisines: [meal.strCategory, meal.strArea || "International"],
                        avgRating: (4 + (index % 3) * 0.1).toFixed(1),
                        costForTwo: `₹${150 + (index * 25)} for two`,
                        slaString: `${20 + (index % 5) * 5}-${30 + (index % 5) * 5} min`,
                        cloudinaryImageId: meal.strMealThumb,
                    }
                }));

                setAllRestaurants(restaurantData);
                setFilteredRestaurants(restaurantData);
            }
        } catch (err) {
            console.error("Error in useResData:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return { allRestaurants, filteredRestaurants, categories, loading, error };
};

export default useResData;
