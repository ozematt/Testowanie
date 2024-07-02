![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Napisanie pierwszych prostych testów

## Materiały do zadania

Do zadania trzeba pobrać projekt z aplikacją "RealWorld" która jest prezentowana podczas materiałów typu `live-coding` w tym tygodniu nauki. Aplikacja znajduje się w folderze zadaie na repozytorium GitHub. Po pobraniu trzeba zainstalować zależności, oraz uruchomić serwer oraz aplikacje frontend. Serwer jest uruchamiany za pomocą skryptu `server` w package.json, natomiast aplikacja frontendowa przy pomocy skryptu `dev`.

## Opis zadania:
Zadaniem jest napisanie testu E2E dla aplikacji "RealWorld" z wykorzystaniem Playwright, które będzie sprawdzać konkretne flow użytkownika od logowania po publikację posta. Test ten ma na celu weryfikację funkcjonalności kluczowych komponentów interfejsu użytkownika oraz poprawność przekierowań i danych wyświetlanych na stronie.

## Scenariusz testowy:

1. **Przejście na stronę główną**
    - Test zaczyna się od otwarcia strony głównej aplikacji.
    - Sprawdzenie, czy strona główna została załadowana poprawnie.

2. **Logowanie do aplikacji**
    - Przejście do formularza logowania.
    - Wypełnienie formularza danymi użytkownika: `leia@coderslab.pl` (email) i `secret` (hasło).
    - Zatwierdzenie formularza i sprawdzenie, czy logowanie zakończyło się sukcesem i czy użytkownik został przekierowany na odpowiednią stronę po zalogowaniu.

3. **Przejście na stronę z tworzeniem postu**
    - Znalezienie i kliknięcie przycisku "New post".

4. **Tworzenie nowego postu**
    - Wypełnienie formularza wszystkimi danymi.
    - Sprawdzenie, czy po publikacji następuje przekierowanie na stronę z postem.

5. **Weryfikacja danych na stronie postu**
    - Po przekierowaniu, sprawdzenie czy adres URL jest zgodny z oczekiwanym.
    - Weryfikacja, czy treści na stronie są zgodne z danymi wprowadzonymi w formularzu (np. tytuł i treść postu).

## Kolejne scenariusze
Zadanie opisane powyżej to całkowite minimum. Zachęcam do przeklikania sobie samodzielnie aplikacji i samemu szukać nowego flow które można by otestować. Im więcej testów napiszecie tym będziecie coraz bardziej płynnie poruszać się w testach E2E i doskonalili swój warsztat.

## Dodatkowe informacje
Oryginalne repozytorium z różnymi wersjami "RealWorld" można znaleźć [tutaj](https://codebase.show/projects/realworld).

Powodzenia w tworzeniu testów, które pomogą zapewnić wysoką jakość aplikacji!