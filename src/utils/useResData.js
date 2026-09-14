import { useEffect, useState } from "react";
import { API_URL, CATEGORIES_URL } from "./constants";

const useResData = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            // Fetch categories first
            const catResponse = await fetch(CATEGORIES_URL);
            const catData = await catResponse.json();
            const categoryList = catData?.meals || [];
            setCategories(categoryList);

            // Fetch meals from first category
            if (categoryList.length > 0) {
                const firstCategory = categoryList[0].strCategory;
                const response = await fetch(`${API_URL}${firstCategory}`);
                const data = await response.json();
                const meals = data?.meals || [];
                
                // Transform meal data to match restaurant card format
                const restaurantData = meals.map((meal, index) => ({
                    info: {
                        id: String(meal.idMeal),
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
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    return { allRestaurants, filteredRestaurants, categories, loading };
};

export default useResData;
