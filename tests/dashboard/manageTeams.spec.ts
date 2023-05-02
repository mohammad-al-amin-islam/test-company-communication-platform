import { expect, test } from "@playwright/test";
import { LoginClass } from "../../classes/login";

test("delete team test", async ({ page }) => {
  const Login = new LoginClass(page);
  await Login.gotoUrl();
  await page.getByRole("link", { name: "Sign In" }).click();
  await Login.login("moalamin001@gmail.com", "1234567");

  await expect(page.getByRole("button", { name: "Sign Out" })).toHaveText(
    "Sign Out"
  );

  await page.pause();
  await page.getByRole("link", { name: "Dashboard" }).click();
  await page.getByRole("link", { name: "Manage Teams" }).click();
  await page
    .getByRole("row", {
      name: "Md Al Amin Islam Team 2023-03-30T07:56:08.39828+00:00 Click here Click here",
    })
    .getByRole("link", { name: "Click here" })
    .click();
  await page
    .getByRole("combobox", { name: "Select Participant Name:" })
    .selectOption("68");
});
