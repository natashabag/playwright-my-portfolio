import { test, expect } from "@playwright/test";

/*test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
*/

test("check title", async ({ page }) => {
  await page.goto("https://natashabag.github.io/");
  await expect(page).toHaveTitle(/My Portfolio/);
});

test("check about section", async ({ page }) => {
  await page.goto("https://natashabag.github.io/");
  const aboutButton = page.getByRole("link", { name: "About me" });
  await aboutButton.click();
  await expect(page.locator('//*[@id="about"]/h1')).toBeVisible();
});

test("check experience section", async ({ page }) => {
  await page.goto("https://natashabag.github.io/");
  const experienceButton = page
    .getByRole("link", { name: "Experience" })
    .nth(0);
  await experienceButton.click();
  await expect(page.locator('//*[@id="experience"]/h1')).toBeVisible();
});

test("check projects section", async ({ page }) => {
  await page.goto("https://natashabag.github.io/");
  const projectsButton = page.getByRole("link", { name: "Projects" }).nth(0);
  await projectsButton.click();
  await expect(page.locator('//*[@id="projects"]/h1')).toBeVisible();
});

test("check contact me section", async ({ page }) => {
  await page.goto("https://natashabag.github.io/");
  const contactMeButton = page.getByRole("link", { name: "Contact me" }).nth(0);
  await contactMeButton.click();
  await expect(page.locator('//*[@id="contact"]/h1')).toBeVisible();
});

test("should display resume pdf file", async ({ page }) => {
  await page.goto("https://natashabag.github.io/");
  const [resumePage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("text=Download Resume"),
  ]);
  await resumePage.waitForLoadState();
  expect(resumePage.url()).toBe(
    "https://natashabag.github.io/assets/Natalia_Bagramian_QA_Engineer.pdf"
  );
});

test("should display github page", async ({ page }) => {
  await page.goto("https://natashabag.github.io/");
  const [gitHubPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("text=Visit GitHub"),
  ]);
  await gitHubPage.waitForLoadState();
  expect(gitHubPage.url()).toBe("https://github.com/natashabag/");
});
