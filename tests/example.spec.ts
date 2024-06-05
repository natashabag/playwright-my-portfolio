import { test, expect } from "@playwright/test";

test.describe("Navigation Links", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://natashabag.github.io/");
  });

  test("should display correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/My Portfolio/);
  });

  test("should redirect to about me section", async ({ page }) => {
    const aboutButton = page.getByRole("link", { name: "About me" }).nth(0);
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
  test("should open project 1 github page", async ({ page }) => {
    const [projectOneGitHubPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator('//*[@id="projects"]/div/div/div[1]/div[2]/button').click(),
    ]);
    await projectOneGitHubPage.waitForLoadState();
    expect(projectOneGitHubPage.url()).toBe(
      "https://github.com/natashabag/Swag-Labs"
    );
  });
  test("should open project 2 github page", async ({ page }) => {
    const [projectTwoGitHubPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator('//*[@id="projects"]/div/div/div[2]/div[2]/button').click(),
    ]);
    await projectTwoGitHubPage.waitForLoadState();
    expect(projectTwoGitHubPage.url()).toBe(
      "https://github.com/natashabag/Luma_Selenium_Python"
    );
  });
  test("should open project 3 github page", async ({ page }) => {
    const [projectThreeGitHubPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator('//*[@id="projects"]/div/div/div[3]/div[2]/button').click(),
    ]);
    await projectThreeGitHubPage.waitForLoadState();
    expect(projectThreeGitHubPage.url()).toBe(
      "https://github.com/natashabag/Urban-Routes-Web-App"
    );
  });
  test("should open LinkedIn page", async ({ page }) => {
    const [linkedInPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator('//*[@id="contact"]/div/div[2]/p/a').click(),
    ]);
    await linkedInPage.waitForLoadState();
    expect(linkedInPage.url()).toBe(
      "https://www.linkedin.com/in/natalia-bagramian"
    );
  });
});

test.describe("Arrow Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://natashabag.github.io/");
  });

  test("should redirect to about me section / arrow", async ({ page }) => {
    const firstArrow = page.locator('//*[@id="profile"]/img');
    await firstArrow.click();
    await expect(page.locator('//*[@id="about"]/h1')).toBeVisible();
  });

  test("should redirect to experience section / arrow", async ({ page }) => {
    const secondArrow = page.locator('//*[@id="about"]/img');
    await secondArrow.click();
    await expect(page.locator('//*[@id="experience"]/h1')).toBeVisible();
  });

  test("should redirect to projects section / arrow", async ({ page }) => {
    const thirdArrow = page.locator('//*[@id="experience"]/img');
    await thirdArrow.click();
    await expect(page.locator('//*[@id="projects"]/h1')).toBeVisible();
  });

  test("should redirect to manual projects section / arrow", async ({
    page,
  }) => {
    const fourthArrow = page.locator('//*[@id="projects"]/img');
    await fourthArrow.click();
    await expect(page.locator('//*[@id="manual-projects"]/h1')).toBeVisible();
  });

  test("should redirect to contact me section / arrow", async ({ page }) => {
    const fifthArrow = page.locator('//*[@id="manual-projects"]/img');
    await fifthArrow.click();
    await expect(page.locator('//*[@id="contact"]/h1')).toBeVisible();
  });

  test("should redirect to the top of the screen / arrow", async ({ page }) => {
    const buttomArrow = page.locator('//*[@id="contact"]/img');
    await buttomArrow.click();
    await expect(page.locator('//*[@id="profile"]/h1')).toBeVisible();
  });
});

test.describe("Footer Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://natashabag.github.io/");
  });

  test("should redirect to about me section from footer", async ({ page }) => {
    const aboutButton = page.getByRole("link", { name: "About me" }).nth(1);
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
