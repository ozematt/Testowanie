![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Instalacja i konfiguracja środowiska testów w projekcie kursu

## Cel zadania

Celem tego zadania jest skonfigurowanie środowiska testowego w projekcie kursowym, aby móc pisać i uruchamiać testy jednostkowe oraz integracyjne. Jest to wykorzystanie w praktyce wiedzy zdobytej podczas tutoriala.

## Kroki do wykonania

1. Instalacja odpowiednich zależności które będą potrzebne w projekcie. Należy pamiętać, że paczki nie wykorzystywane w budowanej aplikacji pordukcyjnej powinny należeć do zależności developerskich.

2. Odpowiednia konfiguracja testów.

3. Plik z ustawieniami globalnymi testów.

4. Napisanie testu w projekcie celem kontroli poprawności konfiguracji.

5. Uruchomienie testów

## Wskazówka

Jeżeli któryś z punktów stanowi problem, to warto wrócić do tutoriala "Konfiguracja środowiska testowego z wykorzystaniem Vitest". Można też poekperymentować z róznymi reporterami na podstawie artykułu "Zaawansowane opcje i narzędzia w Vitest".

Powodzenia!

# Symulacja zachowania użytkownika

## Cel

Celem tego ćwiczenia jest praktyczne zastosowanie nabytej wiedzy podczas lekcji o `vitest` oraz `react testing library`. Choć najbardziej skupimy się na wykorzystaniu `fireEvent`.
Jest to pierwsze ćwiczenie również, które nie posiada pliku do pobrania. Nasza wiedza aktualnie powinna być wystarczająca do tego, aby móc samodzielnie skonfigurować środowisko testowe. Cały dotychczasowy materiał przekazywał tą wiedzę, więc nie będzie już tego typu załączników (skonfigurowany folder z projektem do testów jednostkowych oraz integracyjnych).

## Zadanie

Twoim zadaniem jest napisanie serii testów dla komponentu `AgeChecker`. Testy powinny weryfikować różne scenariusze działania komponentu, w tym reakcję na interakcje użytkownika oraz asynchroniczne zachowanie.

Implementacja komponentu:

```jsx
export function AgeChecker() {
  const [age, setAge] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");

  const handleBlur = () => {
    setAge(Number(value));
  };

  const handleChange = (event) => setValue(event.target.value);

  const handleClick = () => setIsLoading(true);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(() => {
      const newMessage =
        age >= 18 ? LABELS.YOU_ARE_ADULT : LABELS.YOU_ARE_MINOR;

      setMessage(newMessage);
      setIsLoading(false);
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [age, isLoading]);

  return (
    <div>
      <input
        type="number"
        value={age}
        placeholder={LABELS.TYPE_YOUR_AGE}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <button onClick={handleClick}>{LABELS.CHECK}</button>
      <Label isLoading={isLoading} label={message} />
    </div>
  );
}

function Label({ isLoading, label }) {
  if (isLoading) {
    return <p role="status">{LABELS.LOADING}</p>;
  }

  return <p>{label}</p>;
}
```

plik ze stałymi zawierający teksty:

```javascript
export const LABELS = {
  CHECK: "Check",
  LOADING: "Loading...",
  TYPE_YOUR_AGE: "Type your age...",
  YOU_ARE_ADULT: "You are adult.",
  YOU_ARE_MINOR: "You are minor.",
};
```

Plik z tekstami ma za zadanie, ułatwić pisanie testów, z pominięciem problemu zrobienia literówki.

### Testy do implementacji

1. **Test początkowego stanu komponentu**

    - Sprawdź, czy po wyrenderowaniu komponentu nie wyświetla się label "Loading...".
    - Sprawdź, czy po wyrenderowaniu komponentu nie wyświetla się label "You are adult.".
    - Sprawdź, czy po wyrenderowaniu komponentu nie wyświetla się label "You are minor.".

2. **Test stanu ładowania i wyświetlania komunikatu dla pełnoletnich**

   W teście tym wykorzystyjemy wyszukiwanie po roli, za wyjątkiem napisu "You are adult.", który powinien być znaleziony po tekście.

    - Po wpisaniu wieku 20 lat i kliknięciu przycisku "Check", sprawdź czy pojawia się stan ładowania.
    - Po zakończeniu ładowania, sprawdź czy wyświetla się komunikat "You are adult.".
    - Sprawdź, czy po wyświetleniu komunikatu, stan ładowania znika z DOM.

3. **Test wyświetlania komunikatu dla niepełnoletnich**
   W teście element input powinien być wyszukany na podstawie tekstu placeholdera.

    - Po wpisaniu wieku 16 lat i kliknięciu przycisku "Check", sprawdź czy wyświetla się komunikat "You are minor.".

### Wskazówki

1. Role są natywnie przypisywane przez przeglądarki. W naszym ćwiczeniu dostępne są następujące role:

- **`button`** jak sama nazwa wskazuje, jest to rola dla przycisków,
- **`spinbutton`** jest to rola, którą mają elementy `input` z `type=number`
- **`status`** jest to rola, która została przypisana do paragrafu z tekstem "Loading..."

  Do wyszukiwania wykorzystujemy metodę `getByRole`/`queryByRole`/`findByRole`.

2. Do wyszukiwania elementu po tekście w placeholderze wykorzystyjemy metodę `getByPlaceholderText`/`queryByPlaceholderText`/`findByPlaceholderText`

Zachęcamy do skupienia się na pisaniu testów i eksperymentowaniu z różnymi metodami wyszukiwania elementów w React Testing Library.

Również zachęcamy do napisania więcej testów! Można śmiało poeksperymentować i ćwiczyć wymyślanie własnych scenariuszy.
Czy widzicie jaki przypadek można było by dodać?

Powodzenia!