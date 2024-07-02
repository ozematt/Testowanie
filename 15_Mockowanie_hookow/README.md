![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Zamockowania hooka

## Cel

Celem tego zadania jest sprawdzenie waszych umiejętności w zakresie zamokowania hooka (funkcji) w testach jednostkowych. Nauczycie się, jak kontrolować zwracane wartości z hooka dla różnych scenariuszy testowych, co jest kluczowe przy testowaniu komponentów reagujących na różne stany danych.

## Zadanie

Waszym zadaniem jest napisanie testów dla komponentu `WeatherWidget`, który wykorzystuje hook `useWeather` do pobierania danych o pogodzie. Hook ten zwraca obiekt z kluczami `data`, `isLoading` i `isError`. Zależnie od stanu hooka, komponent wyświetla informacje o pogodzie, komunikat ładowania, lub komunikat o błędzie.

### Implementacja komponentu

Komponent `WeatherWidget`:

```jsx
import { useWeather } from "./useWeather";

export function WeatherWidget() {
  const { data, isLoading, isError } = useWeather();

  if (isLoading) {
    return <div>Loading weather data...</div>;
  }

  if (isError) {
    return <div>Failed to load weather data.</div>;
  }

  if (!data) {
    return <div>No weather data available.</div>;
  }

  return (
    <div>
      <h2>Weather Forecast</h2>
      <p>Temperature: {data.temperature}°C</p>
      <p>Condition: {data.condition}</p>
    </div>
  );
}
```

### Scenariusze testowe

1. **Ładowanie danych**: Zamockowanie hooka `useWeather` tak, aby symulować stan ładowania danych i sprawdzenie, czy komponent wyświetla odpowiedni komunikat.
2. **Błąd ładowania danych**: Zamockowanie hooka `useWeather` tak, aby symulować błąd podczas ładowania danych i sprawdzenie, czy komponent wyświetla komunikat o błędzie.
3. **Wyświetlanie danych o pogodzie**: Zamockowanie hook `useWeather` tak, aby zwracał przykładowe dane o pogodzie i sprawdź, czy komponent poprawnie wyświetla te dane.

## Wskazówki

- Skorzystanie `vi.spyOn` do mockowania importowanego hooka `useWeather`.
- Użycie `vi.fn()` do definiowania zmockowanych wartości zwracanych przez hook w różnych scenariuszach testowych.
- Pamiętanie o sprzątaniu po testach, aby mocki nie wpływały na inne testy.

## Ocena wyników

Upewnienie się, że wszystkie testy przechodzą pomyślnie i prawidłowo odzwierciedlają zdefiniowane scenariusze. Poprawne mockowanie hooków i kontrola zwracanych przez nie wartości jest kluczowa dla wiarygodności testów komponentów reagujących na zmienne stany danych.