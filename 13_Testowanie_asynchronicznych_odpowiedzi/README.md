![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Testowanie asynchronicznych zdarzeń w interfejsie użytkownika

## Cel

Celem tego zadania jest praktyczne zastosowanie zdobytej wiedzy na temat testowania asynchronicznych zdarzeń w aplikacji React. Weryfikacja umiejętności napisania testów dla komponentów React, które zachowują się asynchronicznie.

## Zadanie

Przygotowanie serii testów dla komponentu `UserProfile`, który asynchronicznie ładuje dane użytkownika. Komponent powinien obsługiwać następujące scenariusze:
- Stan ładowania danych (`Loading...`).
- Stan po pomyślnym załadowaniu danych użytkownika.
- Stan błędu (`Oops, something went wrong.`), symulowany dla określonego `userId`.
- Stan "nie znaleziono użytkownika" (`User not found.`), również symulowany dla innego `userId`.
- Pojawienie się i automatyczne zamknięcie komponentu `Toast` z odpowiednim komunikatem.

## Implementacja hooka/komponentu

Poniżej znajduje się kod komponentu `UserProfile` oraz pomocniczej funkcji i komponentu `Toast`:

```javascript
export function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!userId) { 
      return; 
    }

    setLoading(true);
    setUser(null);
    setError(false);
    setNotFound(false);

    mockApiCall(userId)
      .then((data) => setUser(data))
      .catch((error) => {
        if (error.message === "NotFound") {
          return setNotFound(true);
        }

        setError(true);
      })
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops, something went wrong.</div>;
  }

  if (notFound) {
    return (
      <>
        <div>User not found.</div>;
        <Toast message="User not found" />
      </>
    );
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

function Toast({ message }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return <div>{message}</div>;
}

function mockApiCall(userId) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      switch (userId) {
        case 1:
          reject(new Error("Something went wrong"));
        case 2:
          reject(new Error("NotFound"));
        default:
          resolve({ id: userId, name: "John Doe", email: "john@example.com" });
      }
    }, 200)
  );
}
```

## Scenariusze testowe

1. **Testowanie stanu ładowania danych.**
    - Wyrenderowanie komponentu `UserProfile` z dowolnym `userId`.
    - Sprawdzenie, czy pojawi się napis `Loading...`.

2. **Testowanie stanu po pomyślnym załadowaniu danych.**
    - Wyrenderowanie komponentu `UserProfile` z dowolnym `userId` innym niż `1` lub `2`.
    - Sprawdzenie, czy stan ładowania zostanie poprawnie ukryty.
    - Oczekuje się, że pojawią się dane użytkownika, np. imię `"John Doe"`.

3. **Testowanie stanu "nie znaleziono użytkownika".**
    - Wyrenderowanie komponentu `UserProfile` z `userId` równym `2`.
    - Oczekuje się, że pojawi się komunikat `User not found.`.
    - Sprawdzenie, czy komponent `Toast` został wyświetlony z odpowiednim komunikatem i czy automatycznie znika po 200ms.

4. **Testowanie stanu błędu.**
    - Wyrenderowanie komponentu `UserProfile` z `userId` równym `1`.
    - Oczekuje się, że pojawi się komunikat błędu `Oops, something went wrong.`.
    - Sprawdzenie, czy nie pojawią się żadne dane użytkownika ani inny komunikat.


## Wskazówka

Do testowania zachowań asynchronicznych można wykorzystać `waitFor` i `findBy`.

## Ocena wyników

Po zaimplementowaniu testów, należy sprawdzić, czy wszystkie z nich przechodzą pomyślnie. Upewnienie się, że testy adekwatnie odzwierciedlają wymienione scenariusze i prawidłowo reagują na różne stany komponentu `UserProfile`.

Powodzenia!


# Testowanie formularzy i ich walidacji

## Cel

Celem tego zadania jest sprawdzenie waszych umiejętności w zakresie pisania testów dla formularzy z walidacją danych w aplikacjach React. Sprawdzimy, jak radzicie sobie z symulowaniem interakcji z formularzem, takich jak wpisywanie danych i próba wysłania formularza, oraz weryfikacją, czy komunikaty o błędach walidacji są właściwie wyświetlane, a zachowanie formularza po próbie wysłania jest prawidłowe.

## Implementacja komponentu

```jsx
export function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Provided email address is invalid.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Form submitted.", { email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div>{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div>{errors.password}</div>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
```

## Scenariusze testowe

1. **Renderowanie komponentu**: Sprawdzenie, czy formularz poprawnie renderuje pola dla emaila i hasła oraz przycisk rejestracji.

2. **Brakujący email**: Testowanie reakcji formularza na próbę wysłania bez podania adresu email, oczekiwany komunikat to "Email is required.".

3. **Nieprawidłowy format emaila**: Weryfikacja reakcji formularza na wprowadzenie adresu email bez znaku @, oczekiwany komunikat to "Provided email address is invalid.".

4. **Brakujące hasło**: Sprawdzenie, czy próba wysłania formularza bez podania hasła generuje komunikat "Password is required.".

5. **Zbyt krótkie hasło**: Testowanie, czy wprowadzenie hasła krótszego niż 8 znaków wywołuje komunikat "Password must be at least 8 characters long.".

6. **Wprowadzenie prawidłowych danych**: Weryfikacja, czy wprowadzenie prawidłowych danych (poprawny email i hasło o odpowiedniej długości) i kliknięcie przycisku "Register" nie generuje żadnych komunikatów o błędach i symuluje wysłanie formularza.

## Ocena wyników

Upewnienie się, że wszystkie testy przechodzą pomyślnie i adekwatnie odzwierciedlają zdefiniowane scenariusze. Testy powinny jasno wskazywać, czy formularz zachowuje się zgodnie z oczekiwaniami, zarówno w przypadku błędnych danych, jak i poprawnego wypełnienia formularza.
