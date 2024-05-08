import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";

import { SWIGGY_API } from "../config/constants";

const Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);

  // Page loads -> Render UI(blank since listOfRestaurants is empty) -> API call -> Re-Render API(we set listOfRestaurants using state variable setListOfRestaurants). Since we want to call API after initial render.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const promiseData = await fetch(SWIGGY_API);
    const apiDataJson = await promiseData.json();
    setListofRestaurants(
      apiDataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

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
