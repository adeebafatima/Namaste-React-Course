import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useOnlineStatus from "../hooks/useOnlineStatus";
import { LOGO_URL } from "../config/constants";

const Header = () => {
  // let btnText = "Login";

  const [btnText, setBtnText] = useState("Login");
  //Every time you call setBtnText WHOLE HEADER component will render
  console.log("Header Rendered!");
  // if no dependency array => useEffect is called on every render
  // if dependency array is empty [] => useEffect is called only on initial render - just once
  // if you have something inside dependency array (Ex. [btnText])=> useEffect is called every time btnText is updated
  useEffect(() => console.log("useEffect called!"), []);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logoConatiner">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul>
          <li>Online Status: {onlineStatus ? '🟢':'🔴'}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              // onClick btnText updated but UI didn't[Refresh doesn't happened]-That's why we need useState state variable.
              // btnText = "Logout";
              // console.log(btnText);

              // Whenever the state variable(btnText) will change (using setBtnText) React will RE-RENDER the whole HEADER  component.
              // When we call setBtnText WHOLE HEADER component will re-render so const variable btnText is not updating instaed it is a whole new const variable.
              btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
            }}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
