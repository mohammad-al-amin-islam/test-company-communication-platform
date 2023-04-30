import { expect, test } from "@playwright/test";
import { LoginClass } from "../../classes/login";

test("start conversation test", async ({ page }) => {
  const Login = new LoginClass(page);
  await Login.gotoUrl();
  await page.getByRole("link", { name: "Sign In" }).click();
  await Login.login("moalamin001@gmail.com", "1234567");

  await expect(page.getByRole("button", { name: "Sign Out" })).toHaveText(
    "Sign Out"
  );

  // await page.pause();
  await page.getByRole("link", { name: "Dashboard" }).click();
  await page.getByRole('link', { name: 'Start Conversation' }).click();
  await page.getByRole('button', { name: 'Start Conversations' }).first().click();
  await expect(page.getByRole('heading', { name: 'My Teams' })).toHaveText("My Teams")
  await page.locator('.flex-grow > div > div:nth-child(3)').click();
  await page.getByPlaceholder('Type a message...').fill('hi again');
  await page.locator('form').getByRole('button').click();

  await expect(page.getByPlaceholder('Type a message...')).toHaveText(' ');

  await page.getByRole("link", { name: "Dashboard" }).click();

});
