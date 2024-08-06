import { AdvancedInput } from "./AdvancedInput";
import { screen, render } from "@testing-library/react";

describe("<AdvancedInput />", () => {
  test("Testing the presence of a component in a document", () => {
    render(<AdvancedInput isVisible />);
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });
  test("class presence testing", () => {
    const { unmount } = render(<AdvancedInput isVisible className="active" />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveClass("active");

    unmount();
    render(<AdvancedInput isVisible isDisabled />);
    const input1 = screen.getByRole("textbox");
    expect(input1).toHaveClass("inactive");
  });
  test("testing display initial value", () => {
    render(<AdvancedInput isVisible value="initial value" />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("initial value");
  });
  test("Component On/Off State Test", () => {
    render(<AdvancedInput isVisible isDisabled />);
    const input = screen.getByRole("textbox");

    expect(input).toBeDisabled();
  });
  test("Component On/Off State Test", () => {
    render(<AdvancedInput isVisible isDisabled={false} />);
    const input = screen.getByRole("textbox");

    expect(input).toBeEnabled();
  });
});
