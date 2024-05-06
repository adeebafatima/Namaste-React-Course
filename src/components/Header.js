import { LOGO_URL } from "../config/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logoConatiner">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navItems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
