import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserOffline from "./UserOffline";
import { filterData } from "../utils/Helper";
import { API_URL } from "../utils/constants";
import useResData from "../utils/useResData";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [allRestaurants, FilterRes] = useResData(API_URL);
    const isOnline = useOnlineStatus();

    useEffect(() => {
        if (isOnline) {
            fetchData();
        }
    }, [isOnline]);

    const searchData = (searchText, restaurants) => {
        if (searchText !== "") {
            const filteredData = filterData(searchText, restaurants);
            setFilteredRestaurant(filteredData);
            setErrorMessage("");
            if (filteredData?.length === 0) {
                setErrorMessage(
                    `Sorry, we couldn't find any results for "${searchText}"`
                );
            }
        } else {
            setErrorMessage("");
            setFilteredRestaurant(restaurants);
        }
    };

    const fetchData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4808184&lng=77.5177682&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const data = await response.json();
            const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setListOfRestaurant(restaurants);
            setFilteredRestaurant(restaurants);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    if (!isOnline) {
        return <UserOffline />;
    }

    if (listOfRestaurant.length === 0) {
        return <Shimmer />;
    }

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchText(searchTerm);
        const filtered = listOfRestaurant.filter(res => res.info.name.toLowerCase().includes(searchTerm));
        setFilteredRestaurant(filtered);
    };

    return (
        <div className="body-container min-h-screen min-h-87vh">
            <div className="search-container mx-4 my-20 md:my-100 flex justify-center items-center w-full">
                <input
                    type="text"
                    className="w-80 max-w-md bg-white rounded-l-lg px-6 py-4 border border-gray-300 focus:border-dark-orange outline-none text-lg font-medium transition duration-300 ease-in-out rounded-xl mx-5"
                    placeholder="Search a restaurant"
                    value={searchText}
                    onChange={handleSearch}
                />
                <button
                    className="search-btn rounded-r-lg bg-dark-orange hover:bg-dark-green shadow-md text-white px-3 py-3 ml--4 cursor-pointer border-none outline-none rounded-lg"
                    onClick={() => {
                        // user click on button searchData function is called
                        searchData(searchText, allRestaurants);
                    }}
                >
                    🔍
                </button>
            </div>
            {errorMessage && <div className="error-container text-center text-lg my-20 mx-10">{errorMessage}</div>}
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`}>
                        <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
{/* {allRestaurants?.length === 0 && FilterRes?.length === 0 ? (
                <Shimmer />
            ) : (
                <div className="restaurant-list">
                    {(filteredRestaurant === null ? FilterRes : filteredRestaurant).map(
                        (restaurant) => {
                            return (
                                <Link
                                    to={"/restaurant/" + restaurant?.info?.id}
                                    key={restaurant?.info?.id}
                                >
                                    <RestaurantCard {...restaurant?.info} />
                                </Link>
                            );
                        }
                    )}
                </div>
            )}
        </div> */}
