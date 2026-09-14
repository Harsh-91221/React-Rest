const MOCK_RESTAURANTS = [
    {
        info: {
            id: "1",
            name: "Pizza Hut",
            cuisines: ["Pizzas", "Italian", "Fast Food"],
            avgRating: 4.2,
            costForTwo: "₹350 for two",
            slaString: "30-35 min",
            cloudinaryImageId: "huduj2vqbp0epk5kgg0s",
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
            cloudinaryImageId: "nqzvr8h5k7b7j3r0a2l4",
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
            cloudinaryImageId: "56c7ab469e0e42c3e61c8f7c4f6e7c9a",
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
            cloudinaryImageId: "xwz8v2c1y4b5n6m7k8j9",
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
            cloudinaryImageId: "1ecvakuq8prw7g9mzfkd",
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
            cloudinaryImageId: "x0hgnfzcqb4p7g1mzfkd",
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
            cloudinaryImageId: "lmp7cqbrs7k8g1mzfkd",
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
            cloudinaryImageId: "zm5k8g1mzfkd9a2c3e4f",
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
            cloudinaryImageId: "a3b4c5d6e7f8g9h0i1j2",
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
            cloudinaryImageId: "k3l4m5n6o7p8q9r0s1t2",
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
            cloudinaryImageId: "u4v5w6x7y8z9a0b1c2d3",
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
            cloudinaryImageId: "e5f6g7h8i9j0k1l2m3n4",
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
            cloudinaryImageId: "o6p7q8r9s0t1u2v3w4x5",
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
            cloudinaryImageId: "y7z8a9b0c1d2e3f4g5h6",
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
            cloudinaryImageId: "i8j9k0l1m2n3o4p5q6r7",
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
            cloudinaryImageId: "s9t0u1v2w3x4y5z6a7b8",
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
            cloudinaryImageId: "c0d1e2f3g4h5i6j7k8l9",
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
            cloudinaryImageId: "m1n2o3p4q5r6s7t8u9v0",
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
            cloudinaryImageId: "w2x3y4z5a6b7c8d9e0f1",
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
            cloudinaryImageId: "g3h4i5j6k7l8m9n0o1p2",
        },
    },
];

export default MOCK_RESTAURANTS;
