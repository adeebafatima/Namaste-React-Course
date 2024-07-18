import { CDN_URL } from "../config/constants";

const ItemList = ({ itemCards }) => {
  console.log("item.card.info.imageId}", itemCards[0].card.info.imageId);
  return (
    <div>
      {itemCards.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left p-2 m-2 flex justify-between border-gray-300 border-b-2"
        >
          <div className="w-9/12">
            <div className="py-2">
              <div>{item.card.info.name}</div>
              <div>
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </div>
            </div>

            <p className="text-xs text-left">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="px-2 py-1 mx-8 mt-20 rounded-lg bg-black text-white shadow-lg">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
