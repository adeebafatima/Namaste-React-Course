import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";

import { SWIGGY_API } from "../config/constants";

const Body = () => {
  console.log("Body Rendered!");
  // useState is use to create local state variable inside functional component
  // Good Practice
  //  -Always write it inside functional component and on the top.
  //  -Never create state variable inside if/else and loops - leads to inconsistency
  const [initialListOfRestaurants, setInitialListofRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  //IMP:Whenever state variable update ,react triggers a reconcillation cycle(re-renders the component)

  //Whenever you change local state variable react RE-RENDER the component, means on every letter you type inside input box whole Body component re-rendered.
  const [searchText, setSearchText] = useState("");

  // Page loads -> Render UI(blank since initialListOfRestaurants is empty) -> API call -> Re-Render API(we set initialListOfRestaurants using state variable setListOfRestaurants). Since we want to call API after initial render.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const promiseData = await fetch(SWIGGY_API);
    const apiDataJson = await promiseData.json();

    setInitialListofRestaurants(
      apiDataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredListOfRestaurants(
      apiDataJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional rendering/
  return initialListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBar"
            value={searchText}
            // searchText is initially empty and its value is tied to input box, searchText is not being updated but we are trying update inputbox value so we have to
            // write onChange and change searchText while typing, otherwise you will be unable to type in input box
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredListOfRestaurants = initialListOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredListOfRestaurants(filteredListOfRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurants = initialListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredListOfRestaurants(filteredListOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="resContainer">
        {filteredListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
