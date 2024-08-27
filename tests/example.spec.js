import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
	await page.goto("https://lunch.devbstaging.com/login-password");
	await page.getByLabel("Email").click();
	await page.getByLabel("Email").fill("admin8@sft.com");
	await page.getByLabel("Password").click();
	await page.getByLabel("Password").fill("admin434");
	await page.getByRole("button", { name: "Login" }).click();

	await expect(page).toHaveURL(
		"https://lunch.devbstaging.com/dishes/monday/Aga%20Team%20Menu"
	);
  
	const lunchEditingButton = await page.getByText("Lunch Editing");
	await lunchEditingButton.click();

});
