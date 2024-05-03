import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";

//React Element
// const heading = <h1>Hello World JSX</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//React Component - Everything in React is a Component, Button ,Top nav ...

const HeadingComponent = () => (
  <div id="container">
    <h1 id="heading"> Hello World Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
