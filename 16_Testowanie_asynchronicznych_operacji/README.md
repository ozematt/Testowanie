![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Testowania różnych stanów komponentu w zależności od odpowiedzi API

## Cel:
Celem tego zadania jest weryfikacja umiejętności pisania testów jednostkowych dla komponentów React korzystających z RTK Query. Zadanie weryfikuje umiejętność testowania różnych stanów komponentu, takie jak ładowanie danych, błąd ich wczytywania oraz poprawne wyświetlanie danych.

## Opis:
Zadanie polega na napisaniu testów dla komponentu `ProductDetails`, który wykorzystuje hook `useGetProductQuery` z RTK Query do pobierania danych o produkcie. Komponent wyświetla szczegółowe informacje o produkcie, takie jak nazwa, cena, ilość dostępnych produktów oraz ocena. Testy powinny sprawdzać poprawność obsługi stanów: ładowania danych, błędu ich wczytywania oraz poprawnego wyświetlenia danych.

## Pliki do zadania:
**api.js**
```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.example.com/api" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductQuery } = productApi;
```

**ProductDetails.jsx**
```jsx
import { useGetProductQuery } from "../../api"; // tu ścieżka według implementacji

export function ProductDetails({ productId }) {
  const { data: product, isError, isLoading } = useGetProductQuery(productId);

  if (isLoading) {
    return <p>Loading product details...</p>;
  }

  if (isError) {
    return <p>Could not load product details.</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price} EUR</p>
      <p>Quantity: {product.quantity} products</p>
      <p>Rating: {product.rating}/10</p>
    </div>
  );
}
```

## Testy do implementacji:
1. **Test poprawnego wyświetlenia danych produktu:**
    - Sprawdź, czy po załadowaniu danych produktu wyświetlane są wszystkie szczegóły produktu (nazwa, cena, ilość, ocena).

2. **Test wyświetlenia komunikatu o błędzie:**
    - Sprawdź, czy w przypadku błędu podczas wczytywania danych wyświetlany jest komunikat "Could not load product details."

3. **Test wyświetlenia stanu ładowania:**
    - Sprawdź, czy podczas ładowania danych wyświetlany jest komunikat "Loading product details..."

## Wymagania:
Przed przystąpieniem do zadania, należy upewnić się, że zainstalowano niezbędne zależności:
- `@reduxjs/toolkit`
- `react-redux`

## Kryteria oceny:

Zapewnienie, że wszystkie testy przechodzą pomyślnie i dokładnie odwzorowują zdefiniowane scenariusze.

Powodzenia w implementacji testów!