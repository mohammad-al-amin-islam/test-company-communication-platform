import { expect, test } from "@playwright/test";
import { LoginClass } from "../../classes/login";

//hooks for login
test.beforeEach(async ({ page }) => {
  const Login = new LoginClass(page);
  await Login.gotoUrl();
  await page.getByRole("link", { name: "Sign In" }).click();
  await Login.login("moalamin001@gmail.com", "1234567");

  await expect(page.getByRole("button", { name: "Sign Out" })).toHaveText(
    "Sign Out"
  );
});


//hook for close the page
test.afterAll(async ({ page }) => {
  await page.close();
});

//testing sending msg
test("sending message test", async ({ page }) => {

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

//testing editing msg
test("edit text",async ({page})=>{
  await page.pause();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Start Conversation' }).click();
  await page.getByRole('button', { name: 'Start Conversations' }).first().click();
  await page.locator('//*[@id="__next"]/div/main/div/div/main/div/div[2]/div/div[20]/div/div/div/button[2]').click();
  await page.getByLabel('Enter Message:').click();
  await page.getByLabel('Enter Message:').fill('edit testing from playwright');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator('//*[@id="__next"]/div/main/div/div/main/div/div[2]/div/div[20]/div/p')).toHaveText("edit testing from playwright")
  await page.getByRole('link', { name: 'CCP' }).click();
});
