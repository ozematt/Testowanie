import { AgeChecker } from "./AgeChecker";
import { render, screen, fireEvent } from "@testing-library/react";

describe("test <AgeChecker />", () => {
  describe("component Initial State Test", () => {
    test("not displays 'Loading...' after render ", () => {
      render(<AgeChecker />);

      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    test("not displays 'You are adult.' after render ", () => {
      render(<AgeChecker />);

      expect(screen.queryByText("You are adult.")).not.toBeInTheDocument();
    });

    test("not displays 'You are minor.' after render ", () => {
      render(<AgeChecker />);

      expect(screen.queryByText("You are minor.")).not.toBeInTheDocument();
    });
  });
  describe("Test of loading status and display of message for adults", () => {
    test("after clicking 'Check' and entering 20 years, loading will appears", async () => {
      render(<AgeChecker />);

      //input - search by placeholder
      // const inputElement = screen.getByPlaceholderText("Type your age...");

      //input type=number - search by role
      const inputElement = screen.getByRole("spinbutton");

      //button
      const buttonElement = screen.getByRole("button");

      // text 'Loading..' on screen
      const statusText = screen.findByRole("status");

      //input change value
      fireEvent.change(inputElement, { target: { value: 20 } });

      //button clicked
      fireEvent.click(buttonElement);

      expect(await statusText).toBeInTheDocument();
    });
  });
});
