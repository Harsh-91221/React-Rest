import { useEffect, useState } from "react";
import MOCK_MENUS from "./mockMenus";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await fetch(MENU_API + resId, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
                    "Referer": "https://www.swiggy.com",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            const json = await response.json();
            setResInfo(json.data);
        } catch (error) {
            console.warn("Menu API unavailable, using mock data:", error.message);
            const mockMenu = MOCK_MENUS[resId];
            if (mockMenu) {
                const items = mockMenu.items.map((item, index) => ({
                    card: {
                        card: {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                            title: item.category,
                            id: `category-${index}`,
                            itemCount: 1,
                            value: item.name,
                            suggestionsText: `${item.name}`,
                            recommendationsText: `${item.description}`,
                        }
                    }
                }));
                
                const headerCard = {
                    card: {
                        card: {
                            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
                            message: "Show More",
                            id: "show_more_button"
                        }
                    }
                };
                
                const groupedCard = {
                    cardGroupMap: {
                        REGULAR: {
                            cards: [
                                { card: { card: { "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory", title: mockMenu.name, id: "header", itemCount: mockMenu.items.length } } }
                            ]
                        }
                    }
                };
                
                setResInfo({
                    cards: [
                        { card: { card: { "@type": "type.googleapis.com/swiggy.seo.widgets.v1.RestaurantMetaData", name: mockMenu.name } } },
                        { card: { card: { "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory", title: mockMenu.name, itemCount: mockMenu.items.length } } },
                        ...items.map(item => ({ card: { card: item.card.card } })),
                        headerCard
                    ]
                });
            } else {
                setResInfo({ cards: [] });
            }
        }
    }

    return resInfo;
};

export default useRestaurantMenu;
