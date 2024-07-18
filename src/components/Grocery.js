import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Grocery = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>{loggedInUser}</h1>
      <h2>
        This is not just a simple component, It contains many components, those
        components again contain many sub level component
      </h2>
    </div>
  );
};

export default Grocery;
