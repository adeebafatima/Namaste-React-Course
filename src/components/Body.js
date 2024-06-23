import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

import { SWIGGY_API } from "../config/constants";

const Body = () => {
  console.log("Body Rendered!");
  const [listOfRestaurants, setListofRestaurants] = useState([]);

  //IMP:Whenever state variable update ,react triggers a reconcillation cycle(re-renders the component)

  //Whenever you change local state variable react RE-RENDER the component
  const [searchText, setSearchText] = useState("");

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

  // Conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBar"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
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
      </div>
      <div className="resContainer">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
