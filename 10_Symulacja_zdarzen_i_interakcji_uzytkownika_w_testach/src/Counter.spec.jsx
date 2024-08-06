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
      render(<Counter initialValue="2" />);
      const count = screen.getByTestId("counter");

      expect(count).toHaveTextContent("2");
    });
    test("check if the initial value of the counter is 10 if the given initialization value is greater than 10", () => {
      const user = userEvent.setup();
      render(<Counter initialValue="12" />);
      const count = screen.getByTestId("counter");

      expect(count).toHaveTextContent("10");
    });
    test("checking if the initial value of the counter is 0 if the given initialization value is less than 0", () => {
      const user = userEvent.setup();
      render(<Counter initialValue="-12" />);
      const count = screen.getByTestId("counter");

      expect(count).toHaveTextContent("0");
    });
  });
});
