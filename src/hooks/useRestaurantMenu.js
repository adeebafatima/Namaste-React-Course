import { useEffect,useState } from "react";
import { REST_MENU_API } from "../config/constants";

const useRestaurantMenu = (resId) => {
  const [restInfo, setRestInfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(REST_MENU_API + resId);
    const json = await data.json();

    console.log(json);
    setRestInfo(json.data);
  };

  return restInfo;
};

export default useRestaurantMenu;