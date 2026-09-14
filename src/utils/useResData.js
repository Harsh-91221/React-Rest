import { useEffect, useState } from "react";
import { FOODFIRE_API_URL } from "./constants";

const useResData = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRestaurants();
    }, []);

    async function fetchRestaurants() {
        try {
            const response = await fetch(FOODFIRE_API_URL);
            if (!response.ok) throw new Error("Failed to fetch restaurants");
            
            const json = await response.json();
            
            // Extract restaurant data from Swiggy API
            function checkJsonData(jsonData) {
                for (let i = 0; i < jsonData?.data?.cards.length; i++) {
                    let checkData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                    if (checkData !== undefined) {
                        return checkData;
                    }
                }
                return [];
            }

            const resData = checkJsonData(json);
            
            if (resData && resData.length > 0) {
                setAllRestaurants(resData);
                setFilteredRestaurants(resData);
            } else {
                throw new Error("No restaurants found in response");
            }
        } catch (err) {
            console.error("Error in useResData:", err);
            setError(err.message);
            setAllRestaurants([]);
            setFilteredRestaurants([]);
        } finally {
            setLoading(false);
        }
    }

    return { allRestaurants, filteredRestaurants, loading, error };
};

export default useResData;
