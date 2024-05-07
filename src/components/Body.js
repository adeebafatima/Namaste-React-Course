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

  // Array Destructing
  const [listOfRestaurants, setListofRestaurants] = useState(resList);

  // const arr = useState(resList);
  // const [listOfRestaurants, setListofRestaurants] = arr;

  // const arr = useState(resList);
  // const listOfRestaurants = arr[0];
  // const setListofRestaurants = arr[1];

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
