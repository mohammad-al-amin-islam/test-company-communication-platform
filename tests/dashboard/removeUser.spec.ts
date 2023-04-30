import { expect, test } from "@playwright/test";
import { LoginClass } from "../../classes/login";

test("remove user test", async ({ page }) => {
  const Login = new LoginClass(page);
  await Login.gotoUrl();
  await page.getByRole("link", { name: "Sign In" }).click();
  await Login.login("moalamin001@gmail.com", "1234567");

  await expect(page.getByRole("button", { name: "Sign Out" })).toHaveText(
    "Sign Out"
  );

  await page.pause();
  await page.getByRole("link", { name: "Dashboard" }).click();
  await page.getByRole("link", { name: "Remove user" }).click();
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page
    .getByRole('row', { name: 'adding From Test member p1@test.com Remove' })
    .getByRole("button", { name: "Remove" })
    .click();
});
