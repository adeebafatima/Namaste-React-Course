import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";

// JSX => Babel transpile it to React.createElement => ReactElement-JS Object =>HTML Element render
const jsxHeading = (
  <h1 id="heading1 " className="head">
    Hello World JSX
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
