import React from "react";
import ReactDOM from "react-dom/client";

// You can put React Element inside React Component and vice versa + You can put React Element inside React Element & React Component inside React Component

const Head3 = () => <h3>React Functional Component H3</h3>;

const head2 = <h2>React Element H2</h2>;
const title = (
  <div>
    <h1>React Element H1</h1>
    {head2}
    <Head3 />
  </div>
);

const HeadingComponent = () => (
  <div id="container">
    {title}
    <h4>React Functional Component H4</h4>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
