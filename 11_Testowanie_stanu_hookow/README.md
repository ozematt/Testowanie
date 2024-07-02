![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Testowanie stanu custom hooka

## Cel

Celem zadania jest praktyczne zastosowanie wiedzy na temat testowania custom hooka React. Do przetestowania jest hook `useTextWithValidation`, który pozwala na kontrolę długości wprowadzanego tekstu oraz jego walidację.

## Zadanie

Zadaniem jest napisanie testów dla hooka `useTextWithValidation`, który przyjmuje tekst wprowadzany przez użytkownika i sprawdza, czy spełnia on określone kryteria (minimalna i maksymalna długość tekstu). Hook powinien również udostępniać informację o tym, czy wprowadzony tekst jest poprawny (`isValid`).

### Custom Hook do przetestowania

```javascript
export function useTextWithValidation(minLength = 3, maxLength = 20) {
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (newText) => {
    const isValid = newText.length >= minLength && newText.length <= maxLength;

    setIsValid(isValid);
    setText(newText);
  };

  return { text, isValid, handleChange };
}
```

### Scenariusze testowe

1. **Sprawdzenie początkowego stanu**

    - Test inicjalizuje hook z domyślnymi wartościami i sprawdza początkowy stan `text` oraz `isValid`.

2. **Walidacja tekstu**

    - Przetestowanie, czy wprowadzenie tekstu spełniającego wymagania (np. długość między 3 a 20 znakami) ustawia flagę `isValid` na `true`.
    - Sprawdzenie, czy wprowadzenie tekstu krótszego niż minimalna długość lub dłuższego niż maksymalna długość ustawia flagę `isValid` na `false`.

3. **Obsługa zmiany tekstu**

    - Przetestowanie, czy funkcja `handleChange` poprawnie aktualizuje stan `text` oraz `isValid` przy różnych długościach wprowadzanego tekstu.

### Wskazówki

- Do renderowania custom hooka należy wykorzystać funkcję `renderHook` oraz `act` do symulowania wprowadzania tekstu przez funkcję `handleChange`.

### Ocena wyników

Sprawdzenie, czy wszystkie testy kończą się sukcesem i czy scenariusze testowe zostały w pełni zrealizowane. Upewnienie się, że hook poprawnie zarządza stanem tekstu i walidacją na podstawie określonych kryteriów.