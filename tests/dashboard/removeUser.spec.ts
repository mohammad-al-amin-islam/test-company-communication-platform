import { expect, test } from "@playwright/test";
import { LoginClass } from "../../classes/login";

test.beforeEach(async ({ page }) => {
  const Login = new LoginClass(page);
  await Login.gotoUrl();
  await page.getByRole("link", { name: "Sign In" }).click();
  await Login.login("moalamin001@gmail.com", "1234567");

  await expect(page.getByRole("button", { name: "Sign Out" })).toHaveText(
    "Sign Out"
  );
});

test.afterAll(async({page})=>{
  await page.close();
})


//admin can not be deleted testing
test("disable button testing", async ({ page }) => {
  // await page.pause();
  await page.getByRole("link", { name: "Dashboard" }).click();
  await page.getByRole("link", { name: "Remove user" }).click();
  await expect(page.locator('//*[@id="__next"]/div/main/div/main/div/table/tbody/tr[1]/td[4]/button')).toBeDisabled();
});


//other user delete testing
test("enable button user test", async ({ page }) => {
  await page.getByRole("link", { name: "Dashboard" }).click();
  await page.getByRole("link", { name: "Remove user" }).click();
  await expect(page.locator('//*[@id="__next"]/div/main/div/main/div/table/tbody/tr[13]/td[4]/button')).toBeEnabled();
});
