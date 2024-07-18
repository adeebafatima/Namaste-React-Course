import { useContext } from "react";
import { CDN_URL } from "../config/constants";
import UserContext from "../contexts/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;

  const user = useContext(UserContext)
  return (
    <div className="m-4 p-4 w-[250px] h-[404px] bg-gray-100 hover:bg-gray-300">
      <img
        className="rounded-lg h-56"
        alt="res image"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{user.loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component - A function that takes a component(function that return some piece of JSX) and returns a component[enhanced]
export const addPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-600 text-white ml-4 p-0.5 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
