import { screen, render } from "@testing-library/react";
import { ToggleContent } from "./ToggleContent";
import { userEvent } from "@testing-library/user-event";

describe("<ToggleContent />", () => {
  test("content is hidden, is in the document ", () => {
    render(<ToggleContent />);
    expect(screen.getByText("Content is hidden")).toBeInTheDocument();
  });
  test("content is visible", async () => {
    render(<ToggleContent />);

    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(await screen.findByText("Content is visible")).toBeInTheDocument();
  });
});
