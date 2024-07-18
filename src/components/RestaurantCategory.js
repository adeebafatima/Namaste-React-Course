import { useState } from "react";

import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [arrow, setArrow] = useState("⌄");
  const [showItemList, setShowItemList] = useState(false);
  const handleClick = () => {
    setShowItemList(!showItemList);
    arrow === "＾" ? setArrow("⌄") : setArrow("＾");
  };
  return (
    <div className="w-6/12 bg-gray-50 m-auto p-4 my-4 shadow-lg">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-large">
          {data.title}({data.itemCards.length})
        </span>
        <span>{arrow}</span>
      </div>

      {showItemList && <ItemList itemCards={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
