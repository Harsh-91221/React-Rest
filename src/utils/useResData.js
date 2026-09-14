import { useEffect, useState } from "react";
import MOCK_RESTAURANTS from "./mockData";

const useResData = (API_URL) => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        try {
            const response = await fetch(API_URL, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
                    "Referer": "https://www.swiggy.com",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const json = await response.json();
            const restaurants = json?.data?.cards?.flatMap(card => 
                card?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
            ).filter(r => r !== undefined);

            if (restaurants.length > 0) {
                setAllRestaurants(restaurants);
                setFilteredRestaurants(restaurants);
            } else {
                throw new Error("No restaurants in response");
            }
        } catch (error) {
            console.warn("API unavailable, using mock data:", error.message);
            setAllRestaurants(MOCK_RESTAURANTS);
            setFilteredRestaurants(MOCK_RESTAURANTS);
        }
    }

    return [allRestaurants, filteredRestaurants];
};

export default useResData;
