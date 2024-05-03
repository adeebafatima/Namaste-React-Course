import React from "react";
import ReactDOM from "react-dom/client";

//Function Expressions are being used but you can use Function Statement as well.
const Title = function () {
  return <h1>Lets Learn Functional React Component</h1>;
};

const HeadingComponent = function () {
  return (
    <div id="container">
      <Title />
      <h2 id="heading"> Hello World Functional Component</h2>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
