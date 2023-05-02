import { expect, test } from "@playwright/test";
import { LoginClass } from "../../classes/login";

test("dashboard check", async ({ page }) => {
  const Login = new LoginClass(page);
  await Login.gotoUrl();
  await page.getByRole("link", { name: "Sign In" }).click();
  await Login.login("moalamin001@gmail.com", "1234567");

  await expect(page.getByRole("button", { name: "Sign Out" })).toHaveText(
    "Sign Out"
  );

  await page.pause();
  await page.locator('//*[@id="__next"]/div/nav/div[1]/div/div[3]/a[2]').click();
  await expect(page.locator('#__next > div > main > div > main > div > h1')).toHaveText("Welcome to dashboard");

  await page.getByRole("button", { name: "Sign Out" }).click();
  await expect(page.getByRole('link', { name: 'Sign In' })).toHaveText("Sign In");
});
