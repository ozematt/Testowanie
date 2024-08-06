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
  });
});
