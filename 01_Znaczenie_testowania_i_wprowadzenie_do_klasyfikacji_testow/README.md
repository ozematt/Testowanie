![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Napisanie funkcji do napisanego wcześniej testu

## Cel

Celem tego ćwiczenia jest "zasmakowanie" dewelopmentu metodą TDD. Oczywiście ciężko jest pisać testy nie wiedząc jeszcze jak to robić. Dlatego to ćwiczenie zostało przygotowane w specjalny sposób. Jedyne co musisz zrobić to pobrać plik ZIP, rozpakować go, a następnie zainstalować zależności.

## Zadanie

Twoim zadaniem jest zaimplementować funkcję `isPalindrome` która sprawdza czy podany ciąg znaków jest palindromem. Palindrom to taki wyraz, który czytany od tyłu daje ten sam wynik (np. kajak).

## Kroki

1. Analiza dostępnych testów:

- zapoznaj się z dostarczonymi testami w pliku `src/isPalindrome.spec.js`,

2. Implementacja funkcji:

- zacznij od pierwszego niezakomentowanego testu,
- napisz minimalną ilość kodu w funkcji `isPalindrome`, aby ten test przeszedł,

3. Refaktoryzacja:

- Po pomyślnym przejściu testu, przeprowadź refaktoryzację kodu, dbając o jego czytelność i efektywność,
- Upewnij się, że wszystkie poprzednie testy nadal przechodzą,

4. Iteracja:

- Odkomentuj kolejny test,
- Powtórz proces implementacji i refaktoryzacji, aby spełnić wymagania nowego testu,
- Kontynuuj ten proces, aż wszystkie testy będą odkomentowane i przechodzą,

5. Ocena Wyników:

- Sprawdź, czy Twoja implementacja spełnia wszystkie wymagania testów.
- Upewnij się, że kod jest zgodny z najlepszymi praktykami i jest dobrze zorganizowany.

## Rozpoczęcie zadanie:

1. Pobranie pliku z kodem do zadania
2. Rozpakowanie pliku na dysku komputera
3. Zainstalowanie zależności jednym z managerów pakietów:

- npm:

```bash
npm install
```

- yarn:

```bash
 yarn
```

4. Po zainstalowaniu zależności, można już uruchomić testy:

- npm:

```bash
npm run test
```

- yarn:

```bash
 yarn test
```

5. Implementacja funkcji. To ćwiczenie możemy spokojnie wykonać w jednym pliku w którym znajdują się testy `src/isPalindrome.spec.js`. Wystarczy rozpocząć implementację w globalnym zakresie tego pliku.