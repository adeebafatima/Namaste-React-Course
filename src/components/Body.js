import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";

import resList from "../config/mockData";

const Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState(resList);

  useEffect(() => {
    console.log("useEffect Called!");
  }, []);

  console.log("Body Rendered!");

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
