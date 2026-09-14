import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await fetch(`${MENU_API}${resId}`);
            if (!response.ok) throw new Error("Failed to fetch");
            const data = await response.json();
            setResInfo(data?.meals?.[0] || null);
        } catch (err) {
            console.error("Error in useRestaurantMenu:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return { resInfo, loading, error };
};

export default useRestaurantMenu;
