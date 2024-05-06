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
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  </div>
);

const RestaurantCard = () => (
  // In-line CSS: In order to write in-line css pass object inside curly brackets to style attribute
  <div className="resCard" style={{ backgroundColor: "orange" }}>
    <img
      className="resImage"
      alt="res image"
      src="https://home-cooks.co.uk/cdn/shop/products/chicken-biryani-by-azam-homecooks-981107.jpg"
    />

    <h3>Zyaka Foods</h3>
    <h4>Biryani, North Indian, Asian</h4>
    <h4>4.4 Stars</h4>
    <h4>38 minutes</h4>
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
