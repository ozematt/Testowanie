import { ProductDetails } from "./ProductDetails";
import { screen, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./api";

describe("<ProductDetails />", () => {
  test("testing data display", async () => {
    renderComponent(1);
    expect(screen.getByText("Loading product details...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("TV")).toBeInTheDocument();
      expect(screen.getByText("Price: 120 EUR")).toBeInTheDocument();
      expect(screen.getByText("Quantity: 5 products")).toBeInTheDocument();
      expect(screen.getByText("Rating: 9/10")).toBeInTheDocument();
    });
  });
  test("testing error message display", async () => {
    renderComponent(2);

    expect(screen.getByText("Loading product details...")).toBeInTheDocument();
    expect(
      await screen.findByText("Could not load product details.")
    ).toBeInTheDocument();
  });
});

function renderComponent(productId) {
  const store = configureStore({
    reducer: {
      [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productApi.middleware),
  });

  render(
    <Provider store={store}>
      <ProductDetails productId={productId} />
    </Provider>
  );
}
