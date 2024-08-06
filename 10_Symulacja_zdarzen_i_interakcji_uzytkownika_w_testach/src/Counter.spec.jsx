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
  });
});
