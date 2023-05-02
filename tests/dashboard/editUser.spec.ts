import { expect, test } from "@playwright/test";
import { LoginClass } from "../../classes/login";

test("edit user", async ({ page }) => {
  const Login = new LoginClass(page);
  await Login.gotoUrl();
  await page.getByRole("link", { name: "Sign In" }).click();
  await Login.login("moalamin001@gmail.com", "1234567");

  await expect(page.getByRole("button", { name: "Sign Out" })).toHaveText(
    "Sign Out"
  );

//   await page.pause();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Edit user' }).click();
  await page.getByRole('row', { name: 'manager manager abc@def.com Edit User' }).getByRole('link', { name: 'Edit User' }).click();
  await expect(page.getByRole('heading', { name: 'Edit user here' })).toHaveText("Edit user here");
});
