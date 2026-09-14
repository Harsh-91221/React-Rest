import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await fetch(`${MENU_API}${resId}`);
            const data = await response.json();
            setResInfo(data?.meals?.[0] || null);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    }

    return resInfo;
};

export default useRestaurantMenu;
