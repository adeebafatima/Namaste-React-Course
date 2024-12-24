import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

//describe is used to group test cases, we can nest describe till as many levels as required
describe("Test Cases for Contact Component", () => {
  it("Should load Contact component", () => {
    //In order to test UI component inside react , we need to render the component on jsdom
    render(<Contact />); // Support for the experimental syntax 'jsx' isn't currently enabled | Add @babel/preset-react to the 'presets' section of your Babel config to enable transformation.
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument(); // TypeError: expect(...).toBeInTheDocument is not a function | npm i -D @testing-library/jest-dom
  });

  it("Should check if Submit button is present in Contact Component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("Should check if Message placeholder is present in Contact Component", () => {
    render(<Contact />);
    const message = screen.getByPlaceholderText("Message");

    expect(message).toBeInTheDocument();
  });

  it("Should check if there are 2 input boxes present in Contact Component", () => {
    //RENDER
    render(<Contact />);

    //QUERY
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes) - inputBoxes - React Element

    //ASSERT
    expect(inputBoxes.length).not.toBe(3);
  });
});
