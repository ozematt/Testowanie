import { configureStore } from "@reduxjs/toolkit";
import { ProductDetails } from "./ProductDetails";

// store może być w pliku testowym lub bardziej realnie w pliku store.js
const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

import { Provider } from "react-redux";

// opakowanie komponentu w provider
<Provider store={store}>
  <ProductDetails />
</Provider>;
