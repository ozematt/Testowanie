import { AgeChecker } from "./AgeChecker";
import { render, screen } from "@testing-library/react";

describe("test <AgeCkecker />", () => {
  test("not displays 'Loading...' after render ", () => {
    render(<AgeChecker />);

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  test("not displays 'You are adult.' after render ", () => {
    render(<AgeChecker />);

    expect(screen.queryByText("You are adult.")).not.toBeInTheDocument();
  });

  test("not displays 'You are minor.' after render ", () => {
    render(<AgeChecker />);

    expect(screen.queryByText("You are minor.")).not.toBeInTheDocument();
  });
});
