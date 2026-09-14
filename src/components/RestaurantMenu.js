import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestuarantMenu";
import RestaurantCategory from "./RestaurantCategory";
import MOCK_MENUS from "../utils/mockMenus";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    console.log(resInfo);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const menuItems = resInfo?.cards?.[1]?.card?.card?.defaultMenuItems || [];
    const restaurantName = resInfo?.cards?.[0]?.card?.card?.name || "Restaurant";

    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold my-4">{restaurantName}</h1>
            <div className="menu-container">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-item p-4 border-b">
                        <div className="flex justify-between">
                            <span className="font-medium">{item.name}</span>
                            <span>₹{item.price / 100}</span>
                        </div>
                        {item.description && <p className="text-gray-500 text-sm">{item.description}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;
