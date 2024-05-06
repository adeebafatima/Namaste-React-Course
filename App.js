import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="logoConatiner">
      <img
        className="logo"
        src="https://cdn.dribbble.com/userupload/9903003/file/original-8eae5aec60527b67b7678e42aa2d8645.jpg"
      />
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

const Body = () => (
  <div>
    <div className="searchBar">Search Bar</div>
    <div className="resContainer">
      <RestaurantCard />
    </div>
  </div>
);

const RestaurantCard = () => (
  // In-line CSS: In order to write in-line css pass object inside curly brackets to style attribute
  <div className="resCard" style={{ backgroundColor: "orange" }}>
    <div className="resImage"></div>
    <div className="resName">
      <h3>Zyaka Foods</h3>
    </div>
  </div>
);

const AppLayout = () => (
  <div className="appLayout">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
