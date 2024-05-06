import RestaurantCard from "./RestaurantCard";

import resList from "../config/mockData";

const Body = () => {
  return (
    <div>
      <div className="searchBar">Search Bar</div>
      <div className="resContainer">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
