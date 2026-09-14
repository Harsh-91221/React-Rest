const MOCK_RESTAURANTS = [
    {
        info: {
            id: "1",
            name: "Pizza Hut",
            cuisines: ["Pizzas", "Italian", "Fast Food"],
            avgRating: 4.2,
            costForTwo: "₹350 for two",
            slaString: "30-35 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "2",
            name: "Biryani Blues",
            cuisines: ["Biryani", "North Indian", "Mughlai"],
            avgRating: 4.5,
            costForTwo: "₹400 for two",
            slaString: "25-30 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "3",
            name: "McDonald's",
            cuisines: ["Burgers", "Beverages", "American"],
            avgRating: 4.0,
            costForTwo: "₹300 for two",
            slaString: "20-25 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "4",
            name: "Subway",
            cuisines: ["Healthy Food", "Salads", "Sandwiches"],
            avgRating: 3.8,
            costForTwo: "₹250 for two",
            slaString: "25-30 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "5",
            name: "KFC",
            cuisines: ["Burgers", "Rolls", "Fast Food"],
            avgRating: 4.1,
            costForTwo: "₹350 for two",
            slaString: "20-25 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "6",
            name: "Domino's Pizza",
            cuisines: ["Pizzas", "Italian", "Fast Food"],
            avgRating: 4.0,
            costForTwo: "₹300 for two",
            slaString: "25-30 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "7",
            name: "Haldiram's",
            cuisines: ["North Indian", "Snacks", "Sweets"],
            avgRating: 4.3,
            costForTwo: "₹250 for two",
            slaString: "20-25 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "8",
            name: "Burger King",
            cuisines: ["Burgers", "American", "Fast Food"],
            avgRating: 3.9,
            costForTwo: "₹300 for two",
            slaString: "20-25 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "9",
            name: "Chai Point",
            cuisines: ["Beverages", "Snacks", "Tea"],
            avgRating: 4.4,
            costForTwo: "₹150 for two",
            slaString: "15-20 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "10",
            name: "Barbeque Nation",
            cuisines: ["North Indian", "Grills", "Mughlai"],
            avgRating: 4.2,
            costForTwo: "₹800 for two",
            slaString: "40-45 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "11",
            name: "Gupta Bhojnalay",
            cuisines: ["North Indian", "Thali", "Home Food"],
            avgRating: 4.0,
            costForTwo: "₹200 for two",
            slaString: "30-35 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "12",
            name: "Wow! Momo",
            cuisines: ["Chinese", "Tibetan", "Momos"],
            avgRating: 4.3,
            costForTwo: "₹250 for two",
            slaString: "25-30 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "13",
            name: "Behrouz Biryani",
            cuisines: ["Biryani", "Awadhi", "North Indian"],
            avgRating: 4.5,
            costForTwo: "₹600 for two",
            slaString: "35-40 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "14",
            name: "Faasos",
            cuisines: ["Rolls", "Kebabs", "Fast Food"],
            avgRating: 3.7,
            costForTwo: "₹200 for two",
            slaString: "20-25 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "15",
            name: "Sagar Ratna",
            cuisines: ["South Indian", "Vegetarian", "Indian"],
            avgRating: 4.1,
            costForTwo: "₹250 for two",
            slaString: "25-30 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "16",
            name: "The Good Bowl",
            cuisines: ["North Indian", "Biryani", "Curry"],
            avgRating: 4.0,
            costForTwo: "₹300 for two",
            slaString: "30-35 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "17",
            name: "Sweet Truth",
            cuisines: ["Desserts", "Bakery", "Snacks"],
            avgRating: 3.9,
            costForTwo: "₹200 for two",
            slaString: "25-30 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "18",
            name: "Napoli Pizzeria",
            cuisines: ["Pizzas", "Italian", "Pastas"],
            avgRating: 4.2,
            costForTwo: "₹400 for two",
            slaString: "30-35 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "19",
            name: "Andhra Delights",
            cuisines: ["South Indian", "Andhra", "Spicy"],
            avgRating: 4.4,
            costForTwo: "₹300 for two",
            slaString: "25-30 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        },
    },
    {
        info: {
            id: "20",
            name: "Punjab Grill",
            cuisines: ["North Indian", "Punjabi", "BBQ"],
            avgRating: 4.3,
            costForTwo: "₹700 for two",
            slaString: "40-45 min",
            cloudinaryImageId: "https://images.unsplash.com/photo-1529193591184-b1d580690dd0?w=400&h=300&fit=crop",
        },
    },
];

export default MOCK_RESTAURANTS;
