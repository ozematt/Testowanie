![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Testowanie licznika

## Cel

Celem tego ćwiczenia jest weryfikacja oraz utrwalenie zdobytej dotychczas wiedzy na temat testowania komponentów React. Będziemy w nim wykorzystywać wiedzę na temat wykorzystania symulacji użytkownika przy pomocy userEvent, wyszukiwania elementów, matcherów pochodzących z biblioteki `jest-dom` oraz warunków brzegowych.

## Zadanie

Zadaniem jest napisanie testów do komponentu `Counter`. Jest to klasyczny komponent licznika który zawiera etykietę wyświetlającą jego stan aktualny, przyciski zwiększajace oraz zmniejszające jego stan oraz przycisk zerowania stanu. Licznik zlicza tylko w zakresie od 0 - 10, oraz pozwala ustawić wartość początkową w tym zakresie. Jeżeli wartość podana będzie niższa niż 0 lub wyższa niż 10, zostanie przypisana odpowiednio minimalna lub maksymalna dopuszczalna wartość.

## Implementacja komponentu Counter

Poniżej znajduje się implementacja komponentu wykorzystywanego w testach:

```jsx
const VALUES = {
  MIN: 0,
  MAX: 10,
};

export function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(validateInitialValue(initialValue));

  const increment = () => {
    if (count < VALUES.MAX) {
      setCount((prev) => ++prev);
    }
  };

  const decrement = () => {
    if (count > VALUES.MIN) {
      setCount((prev) => --prev);
    }
  };

  const reset = () => setCount(0);

  return (
    <div>
      <button onClick={decrement} disabled={count === VALUES.MIN}>
        -
      </button>
      <span data-testid="counter">{count}</span>
      <button onClick={increment} disabled={count === VALUES.MAX}>
        +
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function validateInitialValue(value) {
  switch (true) {
    case value > VALUES.MAX:
      return VALUES.MAX;
    case value < VALUES.MIN:
      return VALUES.MIN;
    default:
      return value;
  }
}
```

### Implementacja testów

Testy powinny pokrywać następujące scenariusze:

- Inicjalizacja licznika, sprawdzenie czy wartość początkowa licznika będzie wynosić 0 przy braku podania wartości inicjalizacyjnej,
- Inicjalizacja licznika, sprawdzenie czy wartość początkowa licznika jest taka sama jak podana wartość w propsie initialValue (podana w zakresie 0 - 10),
- Inicjalizacja licznika, sprawdzenie czy wartość początkowa licznika wynosi 10 jeżeli podana wartość inicjalizacyjna jest większa niż 10,
- Inicjalizacja licznika, sprawdzenie czy wartość początkowa licznika wynosi 0 jeżeli podana wartość inicjalizacyjna jest mniejsza niż 0,
- Test zmiany stanu licznika, sprawdzenie czy kliknięcie w przycisk `+` spowoduje zwiększenie stanu licznika o 1 (wartość inicjalizacyjna musi wynosić 9 lub mniej),
- Test zmiany stanu licznika, sprawdzenie czy kliknięcie w przycisk `-` spowoduje zmniejszenie stanu licznika o 1 (wartość inicjalizacyjna musi wynosić 1 lub więcej),
- Test zmiany stanu licznika, sprawdzenie czy kliknięcie w przycisk `Reset` spowoduje wyzerowanie stanu licznika (wartość inicjalizacyjna musi być większa o 0),
- Test warunku brzegowego, sprawdzenie czy przy stanie licznika wyoszącego 10, kliknięcie nie powoduje zwiększenia jego stanu, oraz czy przycisk posiada stan `disabled`,
- Test warunku brzegowego, sprawdzenie czy przy stanie licznika wyoszącego 0, kliknięcie nie powoduje zmniejszenia jego stanu, oraz czy przycisk posiada stan `disabled`,

### Wskazówki do zadania

- Stan licznika pobieramy za pomocą atrybutu dataset testid.
- Przyciski można wyszukiwać za pomocą roli, wyszczególniając ich nazwę.
- Korzystamy ze skonfigurowanej sesji użytkownia,
- Można wykorzystać zagnieżdżony kontekst, dla powtarzającego się typu testów ("Inicjalizacja licznika", "Test zmiany stanu licznika", "Test warunku brzegowego")

### Ocena wyników

Po zaimplementowaniu testów, sprawdź, czy wszystkie z nich przechodzą pomyślnie. Natępnie dla pewności warto zepsuć kod, aby sprawdzić czy po zmianie, testy już nie przechodzą. To da pewność, że testy są odpowienio napisane.

## Zakończenie

Po zakończniu zadania, można poeksperymentować na różne sposoby - co jest świetnym sposobem na pogłębianie wiedzy i zrozumienia jak testy nam pomagają! Może jakiś refaktor? Może modyfikacja licznika w taki sposób, żeby zachować kompatybilność z istniejącym aktualnie kodem? Proszę bardzo! Testy będą pilnować, aby zachowanie się nie zmieniło dla określonych scenariuszy. A po dodaniu funkcjonalności można ją znów otestować. Nie masz pomysłu co można zrobić z takim licznikiem? Proszę bardzo:

- inicjalizacja licznika wartością z local storage,
- wczytywanie na żądanie stanu licznika z local storage (np. przycisk read memory jak w kalkulatorze),
- zapis stanu licznika do local storage,
- zapis na żadanie stanu licznika do local storage (przycisk save to memory),
- inicjalizacja oraz zapis do local storage oparty na fladze przekazywanej jako props,
- usuwanie z local storage informacji o liczniku,
- resetowanie w pamięci licznika,
- przekazywanie w opcjonalnym argumencie o ile zwiększać licznik,
- itd.

Jak widać, taki prosty komponent można rozbudowywać na wiele sposobów, mając dzięki temu kolejne scenariusze do pokrycia, a jednocześnie będziemy nabierali zaufania do testów, bo zrozumiemy, że pilnują nas przed regresją.

Powodzenia przy pisaniu testów!