![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Zastosowanie Page Object Model w praktyce

## Materiał:
Aplikacja "RealWorld" używana w poprzednich zadaniach.

### Zadanie:
Zadaniem jest utworzenie klasy `Article`, która będzie zawierać metody umożliwiające interakcję z formularzem tworzenia artykułów. Każda metoda powinna odpowiadać za jedno konkretne działanie, co zapewni łatwość utrzymania i możliwość ponownego użycia kodu.

### Metody klasy `Article`:

- **fillArticleTitle(title)**: metoda wypełniająca tytuł artykułu.
- **fillArticleSummary(summary)**: metoda wypełniająca podsumowanie artykułu.
- **fillArticleContent(content)**: metoda wypełniająca treść artykułu.
- **addTags(tags)**: metoda dodająca tagi do artykułu. Tagi powinny być przekazywane jako lista i każdy tag powinien być zatwierdzony przez symulację wciśnięcia klawisza Enter.
- **clickPublish()**: metoda klika przycisk publikacji artykułu.

Należy sprawdzić czy utworzona klasa działa poprawnie. W tym celu można wykorzystać napisany test w zadaniu `Zadanie: Weryfikacja scenariuszy użytkownika` i wykorzystać tę klasę refaktuorując kod. Oczywiście zachęcam do zrefaktorowania wszystkich speców i wykorzystywania POM przy każdej sytuacji.

Powodzenia w implementacji oraz migracji!