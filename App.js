import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
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
};

const Body = () => {
  return (
    <div>
      <div className="searchBar">Search Bar</div>
      <div className="resContainer">
        {/* React will take all these properties(resName, cusine) (props) and it will wrap it inside an object and it will pass it to the component as props */}
        <RestaurantCard resName="Zyaka International" cuisine="Muglai" />
        <RestaurantCard resName="Megna Foods" cuisine="North Indian" />
        <RestaurantCard resName="Golappa" cuisine="Chats" />
        <RestaurantCard resName="Fantastic Ice Cream" cuisine="Ice cream" />
        <RestaurantCard resName="Zukuba Foods" cuisine="Italian" />
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resName, cuisine } = props;
  return (
    <div className="resCard" style={{ backgroundColor: "orange" }}>
      <img
        className="resImage"
        alt="res image"
        src="https://home-cooks.co.uk/cdn/shop/products/chicken-biryani-by-azam-homecooks-981107.jpg"
      />

      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 Stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
