![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Techniki asercji

## Cel

Celem tego zadania jest zastosowanie w praktyce technik asercji, które ułatwiają pracę z JSDOM i pomagają zweryfikować prawidłowość interakcji UI.

## Zadanie

Przygotowanie serii testów dla komponentu `AdvancedInput`, wykorzystując asercje z biblioteki `jest-dom`. Zadaniem jest przetestowanie różnych stanów i zachowań komponentu `AdvancedInput`:

- `toBeInTheDocument`: Sprawdzenie, czy komponent jest obecny w dokumencie.
- `toHaveClass`: Weryfikacja, czy komponent posiada określoną klasę CSS.
- `toHaveValue`: Sprawdzenie wartości elementu formularza.
- `toBeDisabled` / `toBeEnabled`: Testowanie, czy element jest wyłączony lub włączony.

### Komponent do przetestowania

```jsx
export function AdvancedInput ({ isDisabled, isVisible, className, value, onChange }) {
  if (!isVisible) {
    return null;
  }

  const inputClassName = isDisabled ? "input inactive" : `input ${className}`;

  return (
    <input
      className={inputClassName}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
    />
  );
};
```

### Scenariusze testowe

1. **Test obecności komponentu w dokumencie**

    - Sprawdzenie, czy komponent `AdvancedInput` jest obecny w dokumencie po renderowaniu.

2. **Test klasy komponentu**

    - Wyrenderowanie komponentu z różnymi wartościami `className` i sprawdzenie, czy odpowiednie klasy są przypisane.

3. **Test wartości komponentu**

    - Wyrenderowanie komponentu z początkową wartością i sprawdzenie, czy ta wartość jest widoczna w elemencie.

4. **Test stanu włączenia/wyłączenia komponentu**

    - Wyrenderowanie komponentu z flagą `isDisabled` ustawioną na `true` i `false`, a następnie przetestowanie, czy stan komponentu jest odpowiednio `disabled` lub `enabled`.

### Ocena wyników

Po napisaniu testów, należy upewnić się, że wszystkie one przechodzą. Należy pamiętać o przetestowaniu różnych scenariuszy i warunków brzegowych dla komponentu `AdvancedInput`.

Powodzenia!
