![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Konfiguracja Mock Service Worker w projekcie

## Cel zadania:
Celem jest zainstalowanie i skonfigurowanie Mock Service Worker (MSW) we włąsnym projekcie React.

## Zadanie do wykonania:
1. **Instalacja MSW**:
   Zainstalowanie MSW jako zależność deweloperską w swoim projekcie, korzystając z npm lub yarn. Upewnienie się, że użyta została wersja `2.2.10` (na potrzeby kursu, później warto aktualizować na bieżąco do najnowszej wersji).

2. **Konfiguracja serwera MSW**:
   Utwórzwnie odpowiedniej konfiguracji serwera MSW we własnym projekcie. Konfiguracja powinna zawierać przyjmniej definicje jednego handlera, który będzie obsługiwał zapytanie do API, na przykład zwracając statyczne dane dla testów.

3. **Integracja MSW z testami**:
   Zintegrowanie MSW z setupem testowym we własnym projekcie, tak aby przed uruchomieniem testów serwer MSW był uruchamiany, a po zakończeniu testów zamykany. Zapewni to, że wszystkie żądania API w testach będą obsługiwane przez MSW.

4. **Przeprowadzenie testu**:
   Przeprowadzenie prostego testu sprawdzającego, czy konfiguracja MSW działa poprawnie. Test powinien weryfikować, czy komponent lub funkcja korzystająca z API prawidłowo reaguje na symulowane odpowiedzi.

## Rozwiązanie zadania:
Rozwiązanie powinno zawierać przynajmniej jeden test, który potwierdzi, że MSW jest prawidłowo skonfigurowany i obsługuje żądania API zgodnie z oczekiwaniami. Można użyć jako przykładu jednego z poprzednich materiałów (z mockowaniem hooków albo axiosa) jako punktu wyjścia dla własnych testów.

## Dodatkowe uwagi:
- W razie problemów z konfiguracją lub niepewności co do poprawności instalacji, zachęcam do powrotu do materiału wideo, który krok po kroku przeprowadza przez cały proces instalacji i konfiguracji MSW.
- Konfiguracja MSW może wydawać się skomplikowana na początku, ale jest to inwestycja, która znacznie ułatwia testowanie aplikacji korzystających z zewnętrznych API, szczególnie w środowisku deweloperskim.


# Testowania różnych stanów komponentu w zależności od odpowiedzi API

## Cel zadania:
Kontrola wiedzy na temat MSW i umiejętność implementacji go do aktualnie napisanych testów. Zadanie obrazuje na prostym przykładzie migrację mockowania w testach za pomocą `spyOn` na poziom komunikacji z API za pomocą MSW.

## Opis zadania:
Przerobienie testów dla komponentu `ProductDetails`, które obecnie używają mockowania hooka RTK Query, tak aby zamiast tego wykorzystać Mock Service Worker (MSW). Umożliwi to bardziej realistyczne testowanie interakcji z API bez bezpośredniej manipulacji hookami.

## Ważne wskazówki:

Należy pamiętać o tym, aby nasz komponent był poprawnie owinięty za pomocą komponentu `Provider` z biblioteki `react-redux`.

Wskazówki co do implementacji tej części logiki bizesowej:
```jsx
import { configureStore } from "@reduxjs/toolkit";

// store może być w pliku testowym lub bardziej realnie w pliku store.js
const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
```

```jsx
import { Provider } from "react-redux";

// opakowanie komponentu w provider
<Provider store={store}>
  <ExampleComponent />
</Provider>
```

Jeżeli chcemy reagować na różne `id` w handlerze, należy wyciągnąć je z path paramsów. I na podstawie `id` możemy zwracać różne odpowiedzi.

Przykład wykorzystania path paramsów:
```javascript
http.delete("/posts/:nameOfPathParam", ({ params }) => {
  const { nameOfPathParam } = params;

  // reszta kodu który może wykorzystać id
}),
```

## Konkretne zadania do wykonania:
1. **Usunięcie mockowania hooków RTK Query**: Aktualnie testy używają `vi.spyOn` do stworzenia szpiega monitorującego wywołania `useGetProductQuery`. To podejście powinno zostać zastąpione przez odpowiedni handler w MSW.

2. **Konfiguracja MSW**:
    - Zdefiniowanie handlera dla MSW odpowiadającego endpointowi używanemu w komponencie `ProductDetails`.
    - Konfiguracja powinna obejmować obsługę różnych scenariuszy odpowiedzi: sukces oraz błąd. Ładowanie powinno być teraz częścią tych dwóch scenariuszy jako pierwszy etap przed pokazaniem rezultatu.

3. **Implementacja testów z użyciem MSW**:
    - Poprawienie testów sprawdzających dwa główne scenariusze dla komponentu `ProductDetails`: poprawne wyświetlenie danych, obsługę błędu wczytywania danych.
    - Test dla stanu ładowania powinien być usunięty.
    - Stan ładowania powinien być sprawdzony w obydwu przypadkach.

## Pliki do wykorzystania:
- `api.js` oraz `ProductDetails.jsx` już dostarczone w poprzednim zadaniu.

## Wskazówki:
- Przykłady konfiguracji MSW i tworzenia handlerów znajdziesz w dokumentacji MSW oraz materiałach wideo z kursu.
- Pamiętaj, aby zaktualizować pliki konfiguracyjne testów, tak aby korzystały z serwera MSW.

## Kryteria oceny:
Zadanie można uznać za zaliczone jeżeli oba testy weryfikują na początek stan ładowania oraz na końcu odpowiedni resultat - albo wyświetlenie poprawnie danych ale wyświetlenie komunikatu o błędzie. Naturalnie w pliku testowym nie powinny się znajdować żadne mocki.

Powodzenia w implementacji testów z użyciem MSW, a w razie pytań lub wątpliwości, zachęcam do powrotu do materiałów wideo.

# Testowanie komponentów w różnych konfiguracjach i stanach aplikacji

## Cel zadania:
Utrwalenie i podsumowanie umiejętności praktycznego stosowania narzędzi do testowania komponentów React w różnych stanach i konfiguracjach, ze szczególnym naciskiem na asynchroniczne interakcje z API.

## Opis zadania:
Zadanie obejmuje testowanie komponentu `UserForm`, który jest używany do edycji danych użytkownika. Komponent korzysta z RTK Query do pobierania i aktualizacji danych użytkownika oraz zarządza stanem formularza. Testy powinny sprawdzać różne scenariusze, w tym poprawne ładowanie danych, walidację formularza, wyświetlanie błędów oraz pomyślne przesyłanie danych. W dodatku zachodzi też potrzeba zaimplementowania handlerów do MSW.

## Konkretne zadania do wykonania:
1. **Testowanie ładowania danych użytkownika**:
    - Napisanie testu sprawdzającego, czy po załadowaniu danych użytkownika formularz jest poprawnie wypełniony odpowiednimi wartościami.

2. **Testowanie walidacji formularza**:
    - Napisanie testu weryfikującego, czy formularz poprawnie wyświetla błędy walidacji (np. brak wymaganego pola, nieprawidłowy format emaila).

3. **Testowanie wysyłania formularza**:
    - Napisanie testu sprawdzającego, czy po poprawnym wypełnieniu formularza i wysłaniu, wyświetlany jest komunikat o pomyślnej aktualizacji danych użytkownika.

## Techniczne detale implementacji:
Komponent `UserForm` jest już dostarczony wraz z konfiguracją testów i serverem do mockowania odpowiedzi API. Wykorzystaj poniższą konfigurację do implementacji testów:

```jsx
// UserForm.spec.jsx
export function UserForm({ userId }) {
  const { data: user, isLoading, isError } = useGetUserQuery(userId);
  const [updateUser, { isLoading: isSending, isSuccess }] =
    useUpdateUserMutation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (!user) {
      return;
    }

    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  }, [user]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      await updateUser(formData);
      setFormErrors({});

      return;
    }

    setFormErrors(errors);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading user data.</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        {formErrors.firstName && <p>{formErrors.firstName}</p>}

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        {formErrors.lastName && <p>{formErrors.lastName}</p>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {formErrors.email && <p>{formErrors.email}</p>}

        <button disabled={isSending} type="submit">
          Update User
        </button>
      </form>
      {isSuccess && <p>User has been updated</p>}
    </>
  );
}

function validateForm(formData) {
  const errors = {};

  if (!formData.firstName) {
    errors.firstName = "First name is required";
  }

  if (!formData.lastName) {
    errors.lastName = "Last name is required";
  }

  if (!formData.email.match(/\S+@\S+\.\S+/)) {
    errors.email = "Email is invalid";
  }
  return errors;
}

// api.js
export const api = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.example.com/api" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
    updateUser: builder.mutation({
      query: (body) => ({ url: "/users", method: "PUT", body }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } =
  api;
```

Powodzenia w realizacji testów!