import { AdvancedInput } from "./AdvancedInput";
import { screen, render } from "@testing-library/react";

describe("<AdvancedInput />", () => {
  test("Testing the presence of a component in a document", () => {
    render(<AdvancedInput isVisible />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
  });
});
