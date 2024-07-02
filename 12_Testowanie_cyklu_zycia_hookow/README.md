![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Testowanie efektów ubocznych custom hooka

## Cel
Celem zadania jest praktyczne wykorzystanie nabytej wiedzy na temat efektów ubocznych w React Hooks, a konkretnie zastosowanie hooka `useEffect` w celu zmiany tytułu dokumentu. Kursant nauczy się, jak testować efekty uboczne spowodowane przez hooki w aplikacji React.

## Zadanie
Zadaniem jest napisanie testów dla custom hooka `useDocumentTitle`, który dynamicznie zmienia tytuł dokumentu na podstawie przekazanej wartości.

## Implementacja hooka/komponentu
Hook `useDocumentTitle` używa `useEffect` do ustawienia tytułu dokumentu. Wewnątrz efektu, tytuł dokumentu jest aktualizowany na podstawie przekazanej wartości `title`. Dodatkowo, efekt zawiera funkcję czyszczącą, która ustawia tytuł dokumentu na domyślną wartość, gdy komponent jest odmontowywany.

```jsx
import { useEffect } from "react";

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;

    return () => {
      document.title = "Cleanup title";
    };
  }, [title]);
}
```

## Scenariusze testowe

1. **Inicjalizacja tytułu**: Napisanie test, który sprawdza czy po zainicjowaniu hooka tytuł dokumentu jest ustawiony zgodnie z przekazaną wartością.

2. **Aktualizacja tytułu**: Zaimplementowanie testu, który sprawdza czy tytuł dokumentu jest aktualizowany, gdy zmienia się wartość przekazana do hooka.

3. **Czyszczenie po odmontowaniu**: Napisanie testu, który weryfikuje, czy po odmontowaniu komponentu używającego hooka, tytuł dokumentu jest ustawiany na domyślną wartość wskazaną w funkcji czyszczącej.

## Wskazówki

W procesie testowania hooków, często spotykamy się z potrzebą symulacji zmian stanu lub propsów, które mają wpływ na działanie hooka. Wykorzystanie `initialProps` w `renderHook` pozwala na zdefiniowanie początkowych propsów przekazywanych do hooka. Poniżej znajduje się przykład, jak możesz skorzystać z tej metody, aby zasymulować zmiany w hooku:

```javascript
const { rerender } = renderHook(({ args }) => useCustomHook(args), {
  initialProps: { args: "some argument passed to hook" },
});
```

W powyższym przykładzie `args` jest początkową wartością przekazaną do hooka `useCustomHook`. Użycie metody `rerender` z nowymi propsami pozwala na symulację reakcji hooka na zmiany. Jest to szczególnie przydatne, gdy hook reaguje na zmiany propsów, na przykład aktualizując stan wewnętrzny lub wywołując efekty uboczne.

Pamiętajcie, że dobra praktyka testowania zakłada, iż powinniśmy testować zachowanie komponentów i hooków w reakcji na zmiany, a nie sam wewnętrzny stan czy implementację. Korzystając z `initialProps` i `rerender`, macie możliwość skutecznego testowania, jak hooki reagują na różne scenariusze użytkowania.

## Ocena wyników

Udane testy powinny potwierdzić, że tytuł dokumentu jest odpowiednio inicjowany, aktualizowany przy zmianie przekazanego tytułu oraz czyszczony do wartości domyślnej po odmontowaniu komponentu. Pomyślnie zaimplementowane testy będą świadczyć o zrozumieniu i umiejętności testowania efektów ubocznych w React Hooks.


# Testowanie kompleksowe custom hooka

## Cel

Celem tego zadania jest wykorzystanie zdobytej wiedzy na temat testowania custom hooków w kontekście kompleksowego testowania, które obejmuje testowanie stanu, propsów, efektów ubocznych, oraz reakcji UI na zmianę stanu.

## Zadanie

Zadaniem jest napisanie serii testów dla custom hooka `useLocalStorage`, który pozwala na przechowywanie i aktualizację danych w `localStorage` przeglądarki. Hook powinien automatycznie serializować i deserializować przechowywane wartości do formatu JSON.

## Implementacja hooka/komponentu

Custom hook `useLocalStorage` jest zaimplementowany w następujący sposób:

```javascript
import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);

      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    function handleStorageChange() {
      setStoredValue(JSON.parse(window.localStorage.getItem(key)));
    }

    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key]);

  return [storedValue, setValue];
}
```

## Scenariusze testowe

1. **Inicjalizacja z wartością domyślną**: Sprawdzenie, czy hook inicjalizuje się z wartością domyślną, gdy w `localStorage` nie ma zapisanej wartości.

2. **Odczyt wartości z `localStorage`**: Sprawdzenie, czy hook poprawnie inicjalizuje się z wartością z `localStorage`, jeśli taka istnieje.

3. **Aktualizacja wartości**: Sprawdzenie, czy po aktualizacji wartości przez hook, wartość ta jest poprawnie zapisywana do `localStorage` i aktualizuje stan hooka.

4. **Reakcja na zmiany zewnętrzne**: Sprawdzenie, czy hook reaguje na zmiany wartości w `localStorage` dokonane przez zewnętrzne źródło (np. inną kartę przeglądarki).

## Wskazówki

- Aby zasymulować zmianę wartości w `localStorage` przez zewnętrzne źródło, można bezpośrednio zmodyfikować wartość w `localStorage`, a następnie wywołać `window.dispatchEvent(new Event('storage'))`.

- Warto pamiętać, że operacje na `localStorage` mogą być asynchroniczne, dlatego ważne jest użycie `act()` przy wywoływaniu funkcji aktualizujących stan hooka.

## Ocena wyników

Sprawdzenie, czy wszystkie scenariusze testowe są zielone i czy hook zachowuje się zgodnie z oczekiwaniami w różnych przypadkach użycia. Warto pamiętać, że kompleksowe testowanie hooka pozwala upewnić się, że jego logika biznesowa działa poprawnie w różnych scenariuszach.