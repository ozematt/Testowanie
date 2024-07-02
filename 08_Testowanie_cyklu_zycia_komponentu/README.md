![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Testowania cyklów życia komponentów

## Cel

Celem zadania jest zrozumienie i praktyczne zastosowanie wiedzy na temat testowania cyklu życia komponentu React. Sprawdzimy czy nauczyliśmy się, jak testować różne aspekty cyklu życia komponentu: jego montowanie, aktualizacje stanu zależne od zmiany props oraz czyszczenie po sobie przy odmontowywaniu.

## Zadanie

Napisanie testów dla komponentu `UserStatus`, który ładuje i zapisuje dane użytkownika w `localStorage` w odpowiedzi na montowanie i aktualizacje komponentu oraz usuwa te dane przy odmontowywaniu.

## Implementacja komponentu `UserStatus`

```jsx
import { useEffect, useState } from "react";

export function UserStatus({ userId }) {
  const [userData, setUserData] = useState(null);

  // Ładowanie danych użytkownika przy montowaniu komponentu
  useEffect(() => {
    const data = localStorage.getItem(`user-${userId}`);

    setUserData(data ? JSON.parse(data) : null);
  }, [userId]);

  // Zapisywanie danych użytkownika przy aktualizacji stanu
  useEffect(() => {
    if (userData) {
      localStorage.setItem(`user-${userId}`, JSON.stringify(userData));
    }
  }, [userData]);

  // Czyszczenie danych użytkownika przy odmontowywaniu komponentu
  useEffect(() => {
    return () => {
      localStorage.removeItem(`user-${userId}`);
    };
  }, [userId]);

  // Obsługa aktualizacji danych użytkownika
  const handleUserDataUpdate = (newData) => {
    setUserData({ ...userData, ...newData });
  };

  // Wyświetlanie danych użytkownika lub stanu ładowania
  if (!userData) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <h1>User Status</h1>
      <p>{userData.name}</p>
      <button onClick={() => handleUserDataUpdate({ active: true })}>
        Set Active
      </button>
      <button onClick={() => handleUserDataUpdate({ active: false })}>
        Set Inactive
      </button>
    </div>
  );
}
```

## Testy do implementacji

### 1. Testowanie ładowania i wyświetlania danych użytkownika

Sprawdzenie, czy komponent poprawnie ładuje dane użytkownika z `localStorage` podczas montowania i wyświetla je użytkownikowi.

### 2. Testowanie aktualizacji danych użytkownika

Sprawdzenie, czy komponent poprawnie aktualizuje dane użytkownika w `localStorage` po zmianie stanu komponentu przez użytkownika.

### 3. Testowanie czyszczenia danych użytkownika

Sprawdzenie, czy po odmontowaniu komponentu, dane użytkownika zostają usunięte z `localStorage`, demonstrując właściwe zarządzanie zasobami i czyszczenie po sobie.

## Wskazówki

- Przed rozpoczęciem każdego testu należy pamiętać o zainicjalizowaniu `localStorage` przykładowymi danymi użytkownika.

## Ocena wyników

Zwrócenie uwagi, czy komponent prawidłowo zarządza danymi i zasobami, a także czy właściwie czyści po sobie, aby zapobiec wyciekom pamięci i innym błędom.

Powodzenia!