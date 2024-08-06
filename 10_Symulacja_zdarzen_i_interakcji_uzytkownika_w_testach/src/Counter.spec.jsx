import { Counter } from "./Counter";
import { userEvent } from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";

describe("<Counter />", () => {
  describe("counter initialization", () => {
    test("checking whether the initial value of the counter will be 0 if no initialization value is provided", () => {
      const user = userEvent.setup();
      render(<Counter />);
      const count = screen.getByTestId("counter");

      expect(count).toHaveTextContent("0");
    });
    test("checking if the initial value of the counter is the same as the value given in the initialValue prop (given in the range 0 - 10)", () => {
      const user = userEvent.setup();
      render(<Counter initialValue={2} />);
      const count = screen.getByTestId("counter");

      expect(count).toHaveTextContent("2");
    });
    test("check if the initial value of the counter is 10 if the given initialization value is greater than 10", () => {
      const user = userEvent.setup();
      render(<Counter initialValue={12} />);
      const count = screen.getByTestId("counter");

      expect(count).toHaveTextContent("10");
    });
    test("checking if the initial value of the counter is 0 if the given initialization value is less than 0", () => {
      const user = userEvent.setup();
      render(<Counter initialValue={-12} />);
      const count = screen.getByTestId("counter");

      expect(count).toHaveTextContent("0");
    });
  });
  describe("Counter status change test", () => {
    test("checks whether clicking the + button will increase the counter by 1", async () => {
      const user = userEvent.setup();
      render(<Counter />);
      const count = screen.getByTestId("counter");
      const incrementButton = screen.getByRole("button", { name: "+" });

      await user.click(incrementButton);
      expect(count).toHaveTextContent("1");
    });
    test("checking whether clicking the button will decrease the counter by 1", async () => {
      const user = userEvent.setup();
      render(<Counter initialValue={5} />);
      const count = screen.getByTestId("counter");
      const decrementButton = screen.getByRole("button", { name: "-" });

      await user.click(decrementButton);
      expect(count).toHaveTextContent("4");
    });
    test("check whether clicking the Reset button will reset the counter to zero", async () => {
      const user = userEvent.setup();
      render(<Counter initialValue={5} />);
      const count = screen.getByTestId("counter");
      const resetButton = screen.getByRole("button", { name: "Reset" });

      await user.click(resetButton);
      expect(count).toHaveTextContent("0");
    });
  });
  describe("Boundary condition test", () => {
    test("checking whether, when the counter is at 10, clicking does not increase its status, and whether the button has a disabled status", async () => {
      const user = userEvent.setup();
      render(<Counter initialValue={10} />);
      const count = screen.getByTestId("counter");
      const incrementButton = screen.getByRole("button", { name: "+" });

      await user.click(incrementButton);
      expect(incrementButton).toBeDisabled();
      expect(count).toHaveTextContent("10");
    });
  });
});
