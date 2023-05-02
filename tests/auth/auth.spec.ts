import { expect, test } from "@playwright/test";
import { LoginClass } from "../../classes/login";

test.beforeEach(async ({ page }) => {
  const Login = new LoginClass(page);
  await Login.gotoUrl();
  await page.getByRole("link", { name: "Sign In" }).click();
  await Login.login("moalamin001@gmail.com", "1234567");
  await page.pause();
});

test.afterAll(async({ page }) => {
  await page.close();
});

test("signing in test", async ({ page }) => {
  await expect(page.getByRole("button", { name: "Sign Out" })).toHaveText(
    "Sign Out"
  );
});

test("signing out test", async ({ page }) => {
  await page.getByRole("button", { name: "Sign Out" }).click();
});
