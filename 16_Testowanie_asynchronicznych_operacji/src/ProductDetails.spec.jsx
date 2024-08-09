import { ProductDetails } from "./ProductDetails";
import { screen, render } from "@testing-library/react";
import { describe } from "vitest";
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
  useGetProductQuerySpy.mockReturnValue({ data: product, isError, isLoading });
};

describe("<ProductDetails />", () => {
  test("testing data display", () => {
    render(<ProductDetails productId={1} />);
  });
});
