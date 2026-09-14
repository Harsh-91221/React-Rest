import { useEffect, useState } from "react";
import { FOODFIRE_MENU_API_URL, IMG_CDN_URL, ITEM_IMG_CDN_URL, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY } from "./constants";

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRestaurantInfo();
    }, []);

    async function fetchRestaurantInfo() {
        try {
            const response = await fetch(`${FOODFIRE_MENU_API_URL}${resId}`);
            if (!response.ok) throw new Error("Failed to fetch menu");
            
            const json = await response.json();
            
            // Set restaurant data
            const restaurantData = json?.data?.cards?.map(x => x.card)?.
                                 find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
            setRestaurant(restaurantData);

            // Set menu item data
            const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                                groupedCard?.cardGroupMap?.REGULAR?.
                                cards?.map(x => x.card?.card)?.
                                filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                                map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
            
            // Remove duplicates
            const uniqueMenuItems = [];
            menuItemsData.forEach((item) => {
                if (!uniqueMenuItems.find(x => x.id === item.id)) {
                    uniqueMenuItems.push(item);
                }
            });
            
            setMenuItems(uniqueMenuItems);
        } catch (err) {
            console.error("Error in useRestaurantMenu:", err);
            setError(err.message);
            setMenuItems([]);
            setRestaurant(null);
        } finally {
            setLoading(false);
        }
    }

    return { restaurant, menuItems, loading, error };
};

export default useRestaurantMenu;
