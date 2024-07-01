import { useState } from "react";

const User = ({ name, location, handle }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="userCard">
      <h3>{name}</h3>
      <p>{location}</p>
      <p>{handle}</p>
      <p>Count: {count}</p>
      <p>Count2: {count2}</p>
    </div>
  );
};
export default User;
