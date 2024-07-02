![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Napisanie pierwszych testów w frameworku Vitest

## Cel

Celem tego ćwiczenia jest zastosowania zdobytej wiedzy na temat podstawowych asercji dostępnych w Vitest oraz funkcji `test` (`it`) oraz jej metody `each`. Jest to okazja do praktycznego zastosowania teorii poprzez napisanie testów dla kilku prostych funkcji. To pierwsze kroki w kierunku skutecznego wykorzystania testów jednostkowych w projektach.

## Zadanie

Zadaniem jest napisanie testów jednostkowych dla przygotowanego zestawu funkcji. Zostaną one przetestowane z wykorzystaniem frameworka Vitest, co pozwoli ugruntować różnice między testowaniem wartości prymitywnych, referencyjnych, a także obsługą asynchroniczności.

## Kroki

### Analiza dostępnych funkcji

Zapoznaj się z kodem dostępnych funkcji, które znajdują się w pliku `src/functions.js`. Funkcje te obejmują różne przypadki użycia, od prostego mnożenia, poprzez operacje na obiektach, aż do asynchronicznych zapytań.

### Implementacja testów

Testy powinny być zaimplementowane w pliku `src/functions.spec.js`. Testy powinny pokrywać następujące scenariusze:

1. **Funkcja `multiply`** - testowanie wyniku mnożenia dwóch liczb.
2. **Funkcja `isAdult`** - zastosowanie `test.each` do sprawdzenia, czy osoba jest dorosła na podstawie wieku. Sprawdzić 18, 20, 17, 16.
3. **Funkcja `getUsername`** - testowanie asynchronicznej funkcji pobierającej dane użytkownika. Sprawdź przypadki udanego (id 1) i nieudanego pobrania danych (jakiekolwiek inne id).

### Wskazówka

Przy testowaniu funkcji asynchronicznej jeżeli się spodziewamy, że wyrzuci wyjątek podczas wykonywania, można skorzystać z następującego sposobu, który operuje na obiekcie Promise:

```javascript
const result = asyncFunction();

expect(result).resolves.someCorrectMatcher();
```

Analogicznie można korzystać dla pozytywnych przypadków

```javascript
const result = asyncFunction();

expect(result).rejects.someCorrectMatcher();
```

Oczywiście `asyncFunction` to nazwa wykorzystywanej funkcji asynchroniczej, natomiast za `someCorrectMatcher` należy podstawić odpowieni matcher typu `toBe`, `toEqual` itp.

### Ocena wyników

Po zaimplementowaniu testów, sprawdź, czy wszystkie z nich przechodzą pomyślnie. Natępnie dla pewności warto zepsuć kod, aby sprawdzić czy po zmianie, testy już nie przechodzą. To da pewność, że testy są odpowienio napisane.

## Rozpoczęcie zadania

1. **Pobranie materiałów do zadania**

   Ściągnij i rozpakuj plik z zadaniem, który zawiera szkielet projektu oraz pliki z funkcjami do przetestowania.

2. **Instalacja zależności**

   W katalogu projektu, zainstaluj niezbędne zależności za pomocą jednego z menedżerów pakietów:

    - Za pomocą npm:

      ```
      npm install
      ```

    - Lub yarn:

      ```
      yarn
      ```

3. **Uruchomienie testów**

   Aby uruchomić testy i sprawdzić wyniki, skorzystaj z polecenia:

    - Za pomocą npm:

      ```
      npm run test
      ```

    - Lub yarn:

      ```
      yarn test
      ```

Powodzenia!