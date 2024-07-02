import { useEffect, useState } from "react";

const User = ({ name, location, handle }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("FC User useEffect");
    }, 1000);

    // Even if we switch page from About to Contact etc, Since its a Single Page Application.
    // Everytime I am coming to this page it will start a new setInterval and old one is also going on - Performance issue
    // This is why we use return to clearInterval once we moved to new component.

    return () => {
      clearInterval(timer);
    };
  }, []);

  //   -useEffect is not equivalent to componentDidMount. It is not using componentDidMount behind the scene. It is completely different.

  //   -If we dont put [] useEffect will be called after every render. In class based component 1st render - componentDidMount will be called,
  //   after every subsequent render componentDidUpdate will be called.If

  //   -If we use [] ,useEffect will be called once in initial render. If we write [count], whenever count is changed -> useEffect will be called

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
