import { expect, test } from "@playwright/test";
import { LoginClass } from "../../classes/login";

test("add user test", async ({ page }) => {
  const Login = new LoginClass(page);
  await Login.gotoUrl();
  await page.getByRole("link", { name: "Sign In" }).click();
  await Login.login("moalamin001@gmail.com", "1234567");

  await expect(page.getByRole("button", { name: "Sign Out" })).toHaveText(
    "Sign Out"
  );

  await page.pause();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Add User' }).click();
  await page.locator('#name').click();
  await page.locator('#name').fill('adding From Test');
  await page.locator('#email').click();
  await page.locator('#email').fill('p2@test.com');
  await page.getByLabel('Enter user name:').click();
  await page.getByLabel('Enter user name:').fill('1234567');
  await page.getByRole('combobox', { name: 'Select a role for user:' }).selectOption('member');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Submit' }).click();
});
