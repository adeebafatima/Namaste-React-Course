import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./contexts/UserContext";

//Lazy loading/Code Splitting/Chunking/On-Demand Loading/Dynamic Bundling
const Grocery = lazy(() => import("./components/Grocery"));

// Context - when we click on Grocery than we will get code for Grocery , still updated context is present.Grocery code loads and update context(fetches)

const AppLayout = () => {
  const [userName, setUsername] = useState();

  //Authentication
  useEffect(() => {
    //API call to authenticate username,password
    const data = {
      username: "Adeeba Fatima",
    };
    setUsername(data.username);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUsername }}>
      {/*value override the intial context value*/}
      {/*Tied UserContext with local state*/}
      <div className="appLayout">
        {/* If we wrap only Header inside UserContext.Provider then change will refect only in Header. Nested .Provider also we can do*/}
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
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
