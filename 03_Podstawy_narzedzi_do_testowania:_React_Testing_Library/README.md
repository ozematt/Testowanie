![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Napisanie pierwszych testów w React Testing Library

## Cel

Celem tego ćwiczenia jest wprowadzenie Was w świat testowania komponentów React z wykorzystaniem React Testing Library. Po części teoretycznej przychodzi czas na praktykę. Sama teoria nie poparta praktyką do niczego nam się nie przyda. Dlatego najważniejsze jest korzystanie z tej wiedzy przedewszystkim w praktyce. Nawet jeżeli na początku przychodzi ona z trudem, to każdy kolejny test będzie coraz łatwiejszy do napisania. To ćwiczenie standardowo zostało zaprojektowane, aby móc skupić się na pisaniu testów, nie martwiąc się o konfigurację środowiska.

## Zadanie

Twoim zadaniem jest napisanie testów dla prostego komponentu `TaskList`. Wyświetla on listę zadań. Komponent ten posiada również symulowany stan ładowania, który pokazuje tekst "Data is loading..." przed załadowaniem listy zadań. W zadaniu, trzeba napisać testy, które pokryją różne stany tego komponentu. Do zrealizowania zadania należy wykorzystać metody `findBy*`, `queryBy*`, `getBy*` dostarczone przez React Testing Library.

## Rozpoczęcie zadania

1. Pobranie pliku z zadaniem,

2. Rozpakowanie pliku na dysku komputera.

3. Instalacja zależności:

- Za pomocą npm:

```
npm install
```

- Lub yarn:

```
yarn
```

4. Zapoznanie się z kodem dostarczonego komponentu `TaskList` znajdującego się w pliku `src/TaskList.jsx`.

5. Implementacja testów.

6. Uruchomienie testów:

- Za pomocą npm:

```
npm run test
```

- Lub yarn:

```
yarn test
```

### Wskazówki do implementacji testów

Testy powinny być zaimplementowane w pliku `src/TaskList.spec.js`. Testy powinny pokrywać następujące scenariusze:

- Sprawdzenie, czy po wyrenderowaniu komponentu jest widoczny stan ładowania.
- Sprawdzenie, czy lista zadań załadowała się poprawnie po zniknięciu stanu ładowania.
- Sprawdzenie, czy przy początkowym renderowaniu komponentu nie ma widocznej listy zadań.
- Sprawdzenie, czy po załadowaniu listy zadań, stan ładowania nie jest już obecny w DOM.

### Ocena wyników

Sprawdź, czy wszystkie napisane przez Ciebie testy przechodzą.
