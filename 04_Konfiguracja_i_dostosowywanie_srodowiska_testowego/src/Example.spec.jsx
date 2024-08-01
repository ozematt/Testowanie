import { Example } from "./Example";
import { render, screen } from "@testing-library/react";

describe("test <Example />", () => {
  test("test", () => {
    render(<Example />);

    expect(screen.getByText("Example")).toBeInTheDocument();
  });
});
