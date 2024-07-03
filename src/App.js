import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

//Lazy loading/Code Splitting/Chunking/Dynamic Rendering/Dynamic Bundling
const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Outlet />
    </div>
  );
};

const routingConfig = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/grocery",
        //Why Suspense is needed? -Grocery code is loading on demand, now React throws an error because grocery code took 10 ms to come to the browser so react throw an error
        element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>,
        errorElement: <Error />,
      },
      {
        path: "/restaurantMenu/:resId", //resId is dynamic, you can fetch this in RestaurantMenu using useParam hook.
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routingConfig} />);
