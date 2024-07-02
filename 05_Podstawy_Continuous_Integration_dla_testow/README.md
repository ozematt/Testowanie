![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Skonfigurowania workflow dla testów na repozytorium github

## Cel zadania

Celem tego zadania jest praktyczne zapoznanie się z procesem Continuous Integration (CI) za pomocą GitHub Actions. Wykorzystanie wiedzy jak samodzielnie skonfigurować automatyzację testów dla swojego projektu. Pozwoli to na sprawne zarządzanie jakością kodu oraz wykrywanie potencjalnych błędów na wczesnym etapie rozwoju oprogramowania. W ćwiczeniu powinien zostać wykorzystany projekt utworzony podczas pierwszych tygodni nauki nad zaawansowanym zarządzaniem stanem aplikacji.

## Kroki do wykonania

Jeżeli projekt został wcześniej podłączony do repozytorium to część kroków można odpowiednio pominąć.

1. **Stworzenie nowego repozytorium na GitHub**:

    - Utwórz nowe repozytorium na GitHub, nie dodawaj pliku README, .gitignore, ani licencji.
    - Skopiuj adres URL nowo utworzonego repozytorium.

2. **Przygotowanie projektu lokalnego**:

    - Przejdź do katalogu projektu w terminalu.
    - Zainicjuj repozytorium Git za pomocą polecenia `git init`.
    - Utwórz plik `.gitignore` i dodaj do niego foldery `node_modules` oraz `.vscode` (lub inne, które chcesz zignorować).

3. **Pierwszy commit**:

    - Dodaj wszystkie pliki do repozytorium za pomocą `git add .`.
    - Zrób pierwszy commit, np. `git commit -m "Initial commit"`.

4. **Podłączenie i push do zdalnego repozytorium**:

    - Skonfiguruj zdalne repozytorium za pomocą skopiowanego adresu URL: `git remote add origin ADRES_REPOZYTORIUM`.
    - Wyślij swoje zmiany do zdalnego repozytorium za pomocą `git push -u origin master` (lub `main`, zależnie od preferencji).

5. **Konfiguracja GitHub Actions**:

    - W repozytorium na GitHub przejdź do zakładki "Actions".
    - Wybierz szablon dla Node.js i dostosuj go do swoich potrzeb, zmieniając nazwę na `CI` i dopasowując do swojego projektu.
    - Ustaw trigger na push i pull request do głównego brancha (master/main).
    - Skonfiguruj `jobs` tak, aby uruchamiał testy Twojego projektu. Użyj komend `npm install` oraz `npm test`.
    - Zapisz i zatwierdź plik konfiguracyjny workflow, który znajdzie się w `.github/workflows`.

6. **Testowanie CI**:
    - Wprowadź zmiany w kodzie, które mogą spowodować błąd w testach, aby zobaczyć, jak GitHub Actions reaguje na pull request.
    - Stwórz nowy branch, dokonaj zmian, commituj i pushuj na GitHub.
    - Stwórz pull request i obserwuj, jak działają testy CI.

## Wskazówka

Jeżeli w którymś momencie będzie coś nie jasne, warto wrócić do tutoriala "Konfiguracja środowiska testowego z wykorzystaniem Vitest".

Powodzenia!