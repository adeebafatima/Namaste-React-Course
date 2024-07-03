import { CDN_URL } from "../config/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;
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
    </div>
  );
};

export default RestaurantCard;
