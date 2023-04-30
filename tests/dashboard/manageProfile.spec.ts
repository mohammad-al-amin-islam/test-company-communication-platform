import { expect, test } from "@playwright/test";
import { LoginClass } from "../../classes/login";

test("manage profile tests", async ({ page }) => {
  const Login = new LoginClass(page);
  await Login.gotoUrl();
  await page.getByRole("link", { name: "Sign In" }).click();
  await Login.login("moalamin001@gmail.com", "1234567");

  await expect(page.getByRole("button", { name: "Sign Out" })).toHaveText(
    "Sign Out"
  );
  await page.pause();
  await page.getByRole('button', { name: 'Md.' }).click();
  await page.getByRole('menuitem', { name: 'Manage your account' }).click();
  await page.getByRole('button', { name: 'Md.' }).click();
  await expect(page.getByRole('heading', { name: 'Update Your Information here' })).toHaveText("Update Your Information here");
  await page.getByRole("button", { name: "Sign Out" }).click();
});
