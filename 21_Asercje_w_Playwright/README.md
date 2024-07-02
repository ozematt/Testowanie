![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Tworzenie kompleksowych testów z asercjami

## Materiał:
Aplikacja "RealWorld", która została użyta w poprzednich zadaniach.

## Opis zadania:
Stworzenie testu z asercjami w scenariuszu logowania i interakcji z aplikacją. Należy zaimplementować test, który sprawdzi działanie aplikacji pod kątem dostępności niektórych elementów przed i po zalogowaniu oraz poprawność danych wyświetlanych na stronie.

## Scenariusz testowy:
1. **Przejście na stronę główną**
    - Upewnienie się, że element "Your Feed" nie jest widoczny na stronie, lecz "Sign In" oraz "Sign Up" są dostępne.

2. **Logowanie do aplikacji**
    - Zalogowanie się na konto `luke@coderslab.pl` używając hasła `secret`.
    - Sprawdzenie, czy po zalogowaniu element "Your Feed" jest już widoczny, a "Sign In" oraz "Sign Up" nie są już dostępne na stronie głównej.

Powodzenia przy implementacji kolejnego flow!

# Weryfikacja scenariuszy użytkownika

## Materiał:
Projekt aplikacji "RealWorld", który został użyty w poprzednich zadaniach.

## Opis zadania:
W tym zadaniu należy zaimplementować testy, które symulują realne działania użytkownika na stronie. Zadanie skupia się na weryfikacji procesu rejestracji nowego użytkownika, dodawaniu nowego postu oraz sprawdzaniu, czy dane wprowadzone przez użytkownika są poprawnie zapisywane i wyświetlane.

### Scenariusz testowy:

1. **Przejście na stronę główną**

2. **Sprawdzenie dostępności przycisku Sign Up**
   - Należy sprawdzić, czy przycisk "Sign Up" jest widoczny na stronie.

3. **Przejście do formularza rejestracji**
   - Kliknięcie w przycisk "Sign Up", aby przejść do formularza logowania.

4. **Wypełnienie formularza rejestracji**
   - Wpisanie danych w pola formularza: nazwa użytkownika, e-mail i hasło.

5. **Weryfikacja wprowadzonych danych**
   - Sprawdzenie, czy każde pole input zawiera dokładnie te dane, które zostały wprowadzone.

6. **Zatwierdzenie formularza rejestracji**

7. **Tworzenie nowego postu**
   - Uzupełnienie formularza danymi oraz dodanie dynamicznie generowanego tagu, zatwierdzając go klawiszem Enter (należy do tego wykorzytać metodę `.press("Enter)` wywoływaną na lokatorze elementu).

8. **Powrót na stronę główną**
   - Przejście na stronę główną (należy wykorzystać metodę `page.goto`)

9. **Weryfikacja widoczności tagu**
   - Sprawdzenie, czy tag dodany do posta jest widoczny na stronie głównej (aby odnaleźć tag, należy użyć flagi `exact` przy przekazywaniu opcji lokatora, jako drugi argument np. `{ name: "tagName", exact: true }`) .

## Podsumowanie:
To zadanie pomoże Ci zrozumieć jak przeprowadzać kompleksowe testy weryfikujące różne interakcje użytkownika z aplikacją. Jest to również dobre połącznie powtórki wszystkich dotychczasowych elementów.

Powodzenia w implementacji testu!
