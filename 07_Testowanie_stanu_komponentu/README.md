![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Testowanie stanu komponentów

## Cel

Celem tego ćwiczenia jest umożliwienie wykorzystania w praktyce zdobytej wiedzy na temat testowania reakcji UI na zmianę stanu komponentów. Będziecie pracować nad komponentem, który zmienia wyświetlaną treść w zależności od swojego wewnętrznego stanu, co pozwoli na zrozumienie, jak testować zachowanie komponentu w reakcji na interakcje użytkownika.

## Zadanie

Waszym zadaniem jest napisanie testów dla komponentu `ToggleContent`. Komponent ten ma przycisk, który po kliknięciu zmienia stan komponentu z `true` na `false` lub odwrotnie. W zależności od stanu, komponent wyświetla różną treść.

## Implementacja komponentu ToggleContent

```jsx
import { useState } from "react";

export function ToggleContent() {
  const [isToggled, setIsToggled] = useState(false);
  const contentVisibility = isToggled ? "visible" : "hidden";

  const toggleContent = () => setIsToggled(prev => !prev);

  return (
    <div>
      <button onClick={toggleContent}>Toggle</button>
      <p>
        Content is {contentVisibility}
      </p>
    </div>
  );
}
```

## Testy do implementacji

### 1. Testowanie początkowego stanu komponentu

Sprawdź, czy na początku treść jest ukryta.

### 2. Testowanie zmiany stanu po kliknięciu

Sprawdź, czy po kliknięciu w przycisk treść się zmienia z "Content is hidden" na "Content is visible" i na odwrót.

## Wskazówki

- Do symulacji kliknięcia użyj `userEvent`.

## Ocena wyników

Sprawdzenie, czy testy prawidłowo odzwierciedlają oczekiwane zachowanie komponentu, pozwoli Wam lepiej zrozumieć, jak testować reakcje komponentów na interakcje użytkownika i zmianę stanu. Pamiętajcie, że kluczem jest testowanie zachowania widocznego dla użytkownika, a nie wewnętrznej logiki komponentu.

Powodzenia!
