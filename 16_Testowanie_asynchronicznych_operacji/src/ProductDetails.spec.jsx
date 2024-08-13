import { ProductDetails } from "./ProductDetails";
import { screen, render } from "@testing-library/react";

describe("<ProductDetails />", () => {
  test("testing data display", () => {
    expect(screen.getByText("TV")).toBeInTheDocument();
    expect(screen.getByText("Price: 120 EUR")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 5 products")).toBeInTheDocument();
    expect(screen.getByText("Rating: 9/10")).toBeInTheDocument();
  });
  test("testing error message display", () => {
    mockUseGetProductQuery({ isError: true });
    render(<ProductDetails />);

    expect(
      screen.getByText("Could not load product details.")
    ).toBeInTheDocument();
  });
});
