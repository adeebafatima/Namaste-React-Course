import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>Lets Learn Functional React Component</h1>;

//Component Composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h2 id="heading"> Hello World Functional Component</h2>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
