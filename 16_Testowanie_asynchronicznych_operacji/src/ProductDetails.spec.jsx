import { ProductDetails } from "./ProductDetails";
import { screen, render } from "@testing-library/react";
import { afterAll, describe } from "vitest";
import * as useGetProductQueryFile from "./api";

const useGetProductQuerySpy = vi.spyOn(
  useGetProductQueryFile,
  "useGetProductQuery"
);

const mockUseGetProductQuery = ({
  data = {},
  isError = false,
  isLoading = false,
}) => {
  useGetProductQuerySpy.mockReturnValue({ data, isError, isLoading });
};

describe("<ProductDetails />", () => {
  afterAll(() => {
    useGetProductQuerySpy.mockRestore();
  });
  test("testing data display", () => {
    mockUseGetProductQuery({
      data: { id: 1, name: "TV", price: 120, quantity: 5, rating: "9" },
    });
    render(<ProductDetails productId={1} />);

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
  test("testing loading state display", () => {
    mockUseGetProductQuery({ isLoading: true });
    render(<ProductDetails />);

    expect(screen.getByText("Loading product details...")).toBeInTheDocument();
  });
});
