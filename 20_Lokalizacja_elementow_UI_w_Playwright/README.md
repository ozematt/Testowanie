![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


# Lokalizacja elementów UI

Zadanie powinno być wykonane na aplikacji "RealWorld", dostarczonej z pierwszym zadaniem.

## Opis zadania:
Zadaniem jest modyfikacja istniejących testów E2E dla aplikacji "RealWorld" przez zastosowanie różnych technik selekcji dostępnych w Playwright. Przykładowo zamiast pobierać element za pomocą `page.getByPlaceholder` można zamienić na `page.locator`, lub zamiast pobierać `page.getByRole` można spróbować `page.getByText`.
Do elementów czasem można dostać się na wiele sposobów, dlatego warto eksperymentować. Nie ma jednego rozwiązania dla takiego zadania. Najważniejsze to aby próbować różnych metod aby nabierać doświadczenia.

Warto zajrzeć do oficjalnej [dokumentacji Playwrighta](https://playwright.dev/docs/locators).
Informacji na temat roli elementów dostarcza natomiast [w3](https://www.w3.org/TR/html-aria/#docconformance)


### Aktualne testy do modyfikacji:
1. **Test logowania:**
   ```javascript
   test.describe("Login flow", () => {
     test("Go to login page, submit form with valid data, verify redirection", async ({
       page,
     }) => {
       await page.goto("/");
       await page.getByRole("link", { name: "Sign in" }).click();
       await page.getByPlaceholder("Email").fill("luke@coderslab.pl");
       await page.getByPlaceholder("Password").fill("secret");
       await page.getByRole("button").click();
       await expect(page.getByRole("link", { name: "luke" })).toBeVisible();
     });
   });
   ```

2. **Test rejestracji:**
   ```javascript
   import { expect, test } from "@playwright/test";

   test.describe("Register user flow", () => {
     test("Go to register page, submit form with valid data, verify redirection", async ({
       page,
     }) => {
       const id = Date.now();
       const email = `yoda-${id}@coderslab.pl`;

       await page.goto("/");
       await page.getByTestId("register-link").click();
       await page.locator('input[placeholder="Your Name"]').fill("Yoda");
       await page.locator('input[name="email"]').fill(email);
       await page.locator('.form-control[type="password"]').fill("secret");
       await page.getByRole("button", { name: "Sign up" }).click();
       await expect(page.getByText("yoda")).toBeVisible();
     });
   });
   ```

Powodzenia w rozwijaniu swoich umiejętności w zakresie lokalizacji elementów UI oraz w tworzeniu efektywnych i niezawodnych testów E2E!