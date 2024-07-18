import { useState } from "react";

import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItemList ,setShowIndex}) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    // Accordion Head
    <div className="w-6/12 bg-gray-50 m-auto p-4 my-4 shadow-lg" onClick={handleClick}>
      <div className="flex justify-between cursor-pointer">
        <span className="font-bold text-large">
          {data.title}({data.itemCards.length})
        </span>
        <span>⌄</span>
      </div>
    {/* Accordion Body */}
      {showItemList && <ItemList itemCards={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
