import { test, expect } from "@playwright/test";

test.describe("Portfolio Site Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://natashabag.github.io/");
  });

  test("should display correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/My Portfolio/);
  });

  test("should redirect to about me section", async ({ page }) => {
    const aboutButton = page.getByRole("link", { name: "About me" });
    await aboutButton.click();
    await expect(page.locator('//*[@id="about"]/h1')).toBeVisible();
  });

  test("should redirect to experience section", async ({ page }) => {
    const experienceButton = page
      .getByRole("link", { name: "Experience" })
      .nth(0);
    await experienceButton.click();
    await expect(page.locator('//*[@id="experience"]/h1')).toBeVisible();
  });

  test("should redirect to projects section", async ({ page }) => {
    const projectsButton = page.getByRole("link", { name: "Projects" }).nth(0);
    await projectsButton.click();
    await expect(page.locator('//*[@id="projects"]/h1')).toBeVisible();
  });

  test("should redirect to contact me section", async ({ page }) => {
    const contactMeButton = page
      .getByRole("link", { name: "Contact me" })
      .nth(0);
    await contactMeButton.click();
    await expect(page.locator('//*[@id="contact"]/h1')).toBeVisible();
  });
});

test.describe("Button Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://natashabag.github.io/");
  });

  test("should open resume pdf file", async ({ page }) => {
    const [resumePage] = await Promise.all([
      page.waitForEvent("popup"),
      page.click("text=Download Resume"),
    ]);
    await resumePage.waitForLoadState();
    expect(resumePage.url()).toBe(
      "https://natashabag.github.io/assets/Natalia_Bagramian_QA_Engineer.pdf"
    );
  });

  test("should open github page", async ({ page }) => {
    const [gitHubPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.click("text=Visit GitHub"),
    ]);
    await gitHubPage.waitForLoadState();
    expect(gitHubPage.url()).toBe("https://github.com/natashabag");
  });
});

test.describe("Footer Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://natashabag.github.io/");
  });

  test("should redirect to correct sections", async ({ page }) => {
    const firstArrow = page.locator("//*[@id='profile']/img");
    await firstArrow.click();
    await expect(page.locator('//*[@id="about"]/h1')).toBeVisible();
    const secondArrow = page.locator("//*[@id='about']/img");
    await secondArrow.click();
    await expect(page.locator('//*[@id="experience"]/h1')).toBeVisible();
    const thirdArrow = page.locator("//*[@id='experience']/img");
    await thirdArrow.click();
    await expect(page.locator('//*[@id="projects"]/h1')).toBeVisible();
    const fourthArrow = page.locator('//*[@id="projects"]/img');
    await fourthArrow.click();
    await expect(page.locator('//*[@id="manual-projects"]/h1')).toBeVisible();
    const fifthArrow = page.locator('//*[@id="manual-projects"]/img');
    await fifthArrow.click();
    await expect(page.locator('//*[@id="contact"]/h1')).toBeVisible();
  });

  test("should redirect to about me section from footer", async ({ page }) => {
    const aboutButton = page.getByRole("link", { name: "About" }).nth(1);
    await aboutButton.click();
    await expect(page.locator('//*[@id="about"]/h1')).toBeVisible();
  });

  test("should redirect to experience section from footer", async ({
    page,
  }) => {
    const experienceButton = page
      .getByRole("link", { name: "Experience" })
      .nth(1);
    await experienceButton.click();
    await expect(page.locator('//*[@id="experience"]/h1')).toBeVisible();
  });

  test("should redirect to projects section from footer", async ({ page }) => {
    const projectsButton = page.getByRole("link", { name: "Projects" }).nth(1);
    await projectsButton.click();
    await expect(page.locator('//*[@id="projects"]/h1')).toBeVisible();
  });

  test("should redirect to contact me section from footer", async ({
    page,
  }) => {
    const contactMeButton = page
      .getByRole("link", { name: "Contact me" })
      .nth(1);
    await contactMeButton.click();
    await expect(page.locator('//*[@id="contact"]/h1')).toBeVisible();
  });
});
