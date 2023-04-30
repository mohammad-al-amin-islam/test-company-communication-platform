import { expect, test } from "@playwright/test";
import { LoginClass } from "../../classes/login";
test("signin test", async ({ page }) => {

  const Login = new LoginClass(page);
  await Login.gotoUrl();
  await page.getByRole("link", { name: "Sign In" }).click();
  await Login.login("moalamin001@gmail.com", "1234567");

  await page.pause();

  await expect(page.getByRole('button', { name: 'Sign Out' })).toHaveText("Sign Out")
  await page.getByRole("button", { name: "Sign Out" }).click();
});
