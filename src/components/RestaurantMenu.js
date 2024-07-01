import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { REST_MENU_API } from "../config/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restInfo, setRestInfo] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchRestMenu();
  }, []);

  const fetchRestMenu = async () => {
    const data = await fetch(REST_MENU_API + resId);
    const jsonData = await data.json();
    console.log(jsonData);
    //Need to update state variable because as state variable updates component re-renders and we want resturant data so this is needed.
    setRestInfo(jsonData.data);
  };

  if (restInfo.length === 0) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    restInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
      ?.categories[0];

  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage + "   - " + avgRating + " stars"}</p>
      <h2>Menu</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name +
              "  -  Rs " +
              (item.card.info.defaultPrice / 100 || item.card.info.price / 100)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
