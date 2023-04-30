import { expect, test } from "@playwright/test";
import { LoginClass } from "../../classes/login";

test("create team test", async ({ page }) => {
  const Login = new LoginClass(page);
  await Login.gotoUrl();
  await page.getByRole("link", { name: "Sign In" }).click();
  await Login.login("moalamin001@gmail.com", "1234567");

  await expect(page.getByRole("button", { name: "Sign Out" })).toHaveText(
    "Sign Out"
  );

  await page.pause();
  await page.getByRole("link", { name: "Dashboard" }).click();
  await page.getByRole('link', { name: 'Create Teams' }).click();
  await page.getByLabel('Give A Team Name:').click();
  await page.getByLabel('Give A Team Name:').fill('creating Team Using Test 2');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Create Team' }).click();
});
