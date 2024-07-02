![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Testowanie propsów w React

## Cel

Celem tego ćwiczenia jest weryfikacja umiejętności w zakresie testowania propsów przekazywanych do komponentów React. Kontorlujemy czy potrafimy sprawdzać, jak komponent reaguje na różne propsy - sprawdzanie poprawnych danych oraz reakcji UI na zmianę danych.

## Zadanie

Zadaniem jest napisanie testów dla komponentu `UserProfile`. Komponent ten wyświetla informacje o użytkowniku: jego imię (`name`), nazwisko (`surname`) oraz e-mail (`email`). Dodatkowo, komponent ma możliwość wyświetlenia awatara użytkownika, jeśli URL do niego (`avatarUrl`) został przekazany jako props.

## Implementacja komponentu UserProfile

```jsx
export function UserProfile({ name, surname, email, avatarUrl }) {
  const defaultMessage = "Information not provided";

  return (
    <div className="user-profile">
      {avatarUrl && <img src={avatarUrl} alt="User avatar" />}
      <p>Name: {name ?? defaultMessage}</p>
      <p>Surname: {surname ?? defaultMessage}</p>
      <p>Email: {email?? defaultMessage}</p>
    </div>
  );
}
```

## Testy do implementacji

1. Testowanie wyświetlania informacji o użytkowniku

Sprawdzenie, czy komponent poprawnie wyświetla imię, nazwisko i e-mail użytkownika przekazane jako propsy.

2. Testowanie obecności awatara

Sprawdzenie, czy awatar jest wyświetlany, gdy URL awatara jest przekazany, oraz czy nie jest wyświetlany, gdy URL awatara nie jest przekazany.

3. Testowanie wyświetlania domyślnego tekstu przy braku danych

Sprawdzenie, czy w przypadku nie przekazania propsów `name`, `surname` lub `email`, komponent wyświetla tekst "Information not provided" w odpowiednich miejscach.

## Wskazówki

- Do wyszukiwania tekstów i elementów można skorzystać  metod dostępnych w React Testing Library, takich jak `getByText` lub `getByAltText`.
- Do sprawdzania atrybutów korzystamy z metody `toHaveAttribute` z `@testing-library/jest-dom`.

## Ocena wyników

Upewnienie się, że wszystkie testy przechodzą i odpowiednio odzwierciedlają zachowanie komponentu przy różnych przekazanych propsach. Praktyczne zastosowanie tych testów pozwoli lepiej zrozumieć znaczenie i wpływ propsów na działanie komponentów React.

Powodzenia!