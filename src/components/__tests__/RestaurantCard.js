import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import restaurantCardData from "../../mocks/restaurantCardData.json";

it("should render restaurant card with data", () => {
  render(<RestaurantCard resData={restaurantCardData} />);
  const name = screen.getByText("Cake");

  expect(name).toBeInTheDocument();
});
