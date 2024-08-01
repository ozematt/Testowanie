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
      const inputElement = screen.getByPlaceholderText("Type your age...");
      const buttonElement = screen.getByRole("button");

      fireEvent.change(inputElement, { target: { value: 20 } });
      fireEvent.click(buttonElement);

      expect(await screen.findByText("Loading...")).toBeInTheDocument();
    });
  });
});
