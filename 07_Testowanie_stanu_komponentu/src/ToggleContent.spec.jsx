import { screen, render } from "@testing-library/react";
import { ToggleContent } from "./ToggleContent";

describe("<ToggleContent />", () => {
  test("content is hidden, is in the document ", () => {
    render(<ToggleContent />);
    expect(screen.getByText("Content is hidden")).toBeInTheDocument();
  });
});
