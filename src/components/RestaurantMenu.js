import { useState } from "react";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (restInfo.length === 0) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    restInfo?.cards[2]?.card?.card?.info;

  const categories =
    restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-bold">{cuisines.join(", ")}</p>
      <p className="font-bold">
        {costForTwoMessage + "   - " + avgRating + " stars"}
      </p>
      {categories.map((cat, index) => (
        //RestaurantCategory is a controlled component.
        <RestaurantCategory
          key={cat?.card?.card?.title}
          data={cat?.card?.card}
          showItemList={index === showIndex && true}
          // setShowIndex k ander function pass kr diya jo basically dusre function setShowIndex(index) ko call kr raha hai.
          // RestaurantCategory se setShowIndex ko call kara jisne basically setShowIndex(index) ko call kara aur showIndex ko update kara
          // toh us particular RestaurantCategory k liye itemList khul gayi
          setShowIndex={() =>{setShowIndex(index)}}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
