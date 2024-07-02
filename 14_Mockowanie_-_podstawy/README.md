![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Napisanie testu z przekazywaniem mocka i kontrolą jego wykorzystania

## Cel
Celem tego zadania jest sprawdzenie Waszych umiejętności w zakresie testowania interakcji z formularzem, mockowania funkcji przekazanych jako props i weryfikacji ich wywołań. Skupimy się na symulacji wysyłania formularza i kontroli przekazywania danych do mockowanej funkcji obsługi.

## Zadanie
Zadaniem jest napisanie testów dla komponentu `ContactForm`, który przyjmuje jedną funkcję jako props: `onSubmit`. Ta funkcja powinna być wywoływana z danymi formularza po jego wysłaniu. Dane formularza to obiekt zawierający pola `name` i `message`.

## Implementacja komponentu
```jsx
import { useState } from "react";

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !message) {
      return;
    }

    onSubmit({ name, message });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
```

## Scenariusze testowe
1. **Testowanie poprawnego renderowania komponentu**: Sprawdzenie, czy formularz i jego pola są poprawnie renderowane.
2. **Testowanie wysyłania formularza z danymi**: Wypełnienie formularza i sprawdzenie, czy funkcja `onSubmit` jest wywołana z prawidłowymi danymi.
3. **Weryfikacja braku wywołań mocka przy niekompletnych danych formularza**: Testowanie, czy funkcja `onSubmit` nie jest wywoływana, gdy formularz jest wysyłany z niekompletnymi danymi, co sugeruje, że walidacja formularza działa poprawnie i zapobiega wysłaniu formularza bez wymaganych pól.


## Wskazówki
- Do mockowania funkcji `onSubmit` należy użyć `vi.fn()`.
- Aby symulować interakcję użytkownika, warto skorzystać z `userEvent` z Testing Library.
- Do oczekiwania na wyniki asynchroniczne można wykorzystać `waitFor` lub asynchronicznych helperów `findBy*`.

## Ocena wyników
Zapewnienie, że wszystkie testy przechodzą pomyślnie i dokładnie odwzorowują zdefiniowane scenariusze. Mockowanie funkcji pozwala nie tylko na kontrolę wywołań funkcji, ale także na sprawdzenie danych, z którymi funkcja została wywołana, co jest kluczowe przy testowaniu formularzy.