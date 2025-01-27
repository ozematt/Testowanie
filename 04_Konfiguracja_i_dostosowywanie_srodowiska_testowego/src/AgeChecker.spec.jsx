import { AgeChecker } from "./AgeChecker";
import { render, screen, fireEvent } from "@testing-library/react";
import { LABELS } from "./AgeChecker";

describe("test <AgeChecker />", () => {
  describe("component Initial State Test", () => {
    test("not displays 'Loading...' after render ", () => {
      render(<AgeChecker />);

      expect(screen.queryByText(LABELS.LOADING)).not.toBeInTheDocument();
    });

    test("not displays 'You are adult.' after render ", () => {
      render(<AgeChecker />);

      expect(screen.queryByText(LABELS.YOU_ARE_ADULT)).not.toBeInTheDocument();
    });

    test("not displays 'You are minor.' after render ", () => {
      render(<AgeChecker />);

      expect(screen.queryByText(LABELS.YOU_ARE_MINOR)).not.toBeInTheDocument();
    });
  });
  describe("Test of loading status and display of message for adults", () => {
    test("after clicking 'Check' and entering 20 years, loading will appears", async () => {
      render(<AgeChecker />);

      //input - search by placeholder
      // const inputElement = screen.getByPlaceholderText("Type your age...");

      //input type=number - search by role
      const inputElement = screen.getByRole("spinbutton");
      //input change value
      fireEvent.change(inputElement, { target: { value: 20 } });
      fireEvent.focusOut(inputElement); //input focus out

      //button
      const buttonElement = screen.getByRole("button");
      //button clicked
      fireEvent.click(buttonElement);

      expect(screen.getByRole("status")).toBeInTheDocument();
      expect(await screen.findByText(LABELS.YOU_ARE_ADULT)).toBeInTheDocument();
      expect(screen.queryByRole("status")).not.toBeInTheDocument();
    });
    test("if the message 'You are adult' is displayed, after loading", async () => {
      render(<AgeChecker />);
      //input - search by placeholder
      const inputElement = screen.getByPlaceholderText(LABELS.TYPE_YOUR_AGE);
      //input change value
      fireEvent.change(inputElement, { target: { value: "16" } });
      fireEvent.focusOut(inputElement); //input focus out

      fireEvent.click(screen.getByText(LABELS.CHECK));

      expect(await screen.findByText(LABELS.YOU_ARE_MINOR)).toBeInTheDocument();
    });
  });
});
