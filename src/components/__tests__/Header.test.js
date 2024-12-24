import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Link } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../Header";
import appStore from "../../utils/appStore";

it("Should render Header with a login button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        {/* Header component contains useSelector which is a part of react-redux
        library so we need to provide it to Header here , because we are testing
        it seperately here - Unit Testing

        We are using Link in Header component which is a part of react-router-dom,
        so we need to provide it as well to Header here , because we are testing
        it seperately here - Unit Testing */}
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const loginBtn = screen.getByRole("button", { name: "Login" });

  expect(loginBtn).toBeInTheDocument();
});

it("Should render Header with a cart", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("Should render Header with cart items 0", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const cartItems = screen.getByText("Cart - (0)");

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login to Logout on click", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  const loginBtn = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", { name: "Logout" });

  expect(logoutBtn).toBeInTheDocument();
});
