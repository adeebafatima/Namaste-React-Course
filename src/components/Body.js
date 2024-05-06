import { useState } from "react";

import RestaurantCard from "./RestaurantCard";

import resList from "../config/mockData";

// React Hooks
// -Normal JS Utility Functions
// -Written by Facebook Developers
// -useState
// -useEffect

const Body = () => {
  //State Variable ->Super powerful variable . It maintains the state of your component .Super powerful - Keep UI in sync with data - RENDER - Whenever the state variable updates React re-render the component

  const [listOfRestaurants, setListofRestaurants] = useState([
    {
      info: {
        id: "636723",
        name: "Chinese Wok",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 3.3,
        sla: {
          deliveryTime: 36,
        },
      },
    },
    {
      info: {
        id: "636724",
        name: "Muglai",
        cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
        cuisines: ["North Indian", "Lucknawi"],
        avgRating: 4.5,
        sla: {
          deliveryTime: 43,
        },
      },
    },
  ]);

  return (
    <div>
      <div className="searchBar">Search Bar</div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredListOfRestaurants = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setListofRestaurants(filteredListOfRestaurants);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="resContainer">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
