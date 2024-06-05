import { test, expect } from "@playwright/test";
import { selectors, urls, openURL } from "../pages/porfolio-page.ts";

test.describe("Navigation Links", () => {
  test.beforeEach(async ({ page }) => {
    await openURL(page);
  });

  test("should display correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/My Portfolio/);
  });

  test("should redirect to about me section", async ({ page }) => {
    await page.click(selectors.aboutButtonTop);
    await expect(page.locator(selectors.aboutHeader)).toBeVisible();
  });

  test("should redirect to experience section", async ({ page }) => {
    await page.click(selectors.experienceButtonTop);
    await expect(page.locator(selectors.experienceHeader)).toBeVisible();
  });

  test("should redirect to projects section", async ({ page }) => {
    await page.click(selectors.projectsButtonTop);
    await expect(page.locator(selectors.projectsHeader)).toBeVisible();
  });

  test("should redirect to contact me section", async ({ page }) => {
    await page.click(selectors.contactMeButtonTop);
    await expect(page.locator(selectors.contactHeader)).toBeVisible();
  });
});

test.describe("Button Tests", () => {
  test.beforeEach(async ({ page }) => {
    await openURL(page);
  });

  test("should open resume pdf file", async ({ page }) => {
    const [resumePage] = await Promise.all([
      page.waitForEvent("popup"),
      page.click(selectors.downloadResumeButton),
    ]);
    await resumePage.waitForLoadState();
    expect(resumePage.url()).toBe(urls.resumeURL);
  });

  test("should open github page", async ({ page }) => {
    const [gitHubPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.click(selectors.visitGitHubButton),
    ]);
    await gitHubPage.waitForLoadState();
    expect(gitHubPage.url()).toBe(urls.gitHubURL);
  });
  test("should open project 1 page", async ({ page }) => {
    const [projectOnePage] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator(selectors.projectOneButton).click(),
    ]);
    await projectOnePage.waitForLoadState();
    expect(projectOnePage.url()).toBe(urls.projectOneURL);
  });
  test("should open project 2 github page", async ({ page }) => {
    const [projectTwoPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator(selectors.projectTwoButton).click(),
    ]);
    await projectTwoPage.waitForLoadState();
    expect(projectTwoPage.url()).toBe(urls.projectTwoURL);
  });
  test("should open project 3 github page", async ({ page }) => {
    const [projectThreePage] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator(selectors.projectThreeButton).click(),
    ]);
    await projectThreePage.waitForLoadState();
    expect(projectThreePage.url()).toBe(urls.projectThreeURL);
  });
  test("should open LinkedIn page", async ({ page }) => {
    const [linkedInPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.locator(selectors.linkedInButton).click(),
    ]);
    await linkedInPage.waitForLoadState();
    expect(linkedInPage.url()).toBe(urls.linkedInURL);
  });
});

test.describe("Arrow Tests", () => {
  test.beforeEach(async ({ page }) => {
    await openURL(page);
  });

  test("should redirect to about me section / arrow", async ({ page }) => {
    await page.click(selectors.firstArrow);
    await expect(page.locator(selectors.aboutHeader)).toBeVisible();
  });

  test("should redirect to experience section / arrow", async ({ page }) => {
    await page.click(selectors.secondArrow);
    await expect(page.locator(selectors.experienceHeader)).toBeVisible();
  });

  test("should redirect to projects section / arrow", async ({ page }) => {
    await page.click(selectors.thirdArrow);
    await expect(page.locator(selectors.projectsHeader)).toBeVisible();
  });

  test("should redirect to manual projects section / arrow", async ({
    page,
  }) => {
    await page.click(selectors.fourthArrow);
    await expect(page.locator(selectors.manualProjectsHeader)).toBeVisible();
  });

  test("should redirect to contact me section / arrow", async ({ page }) => {
    await page.click(selectors.fifthArrow);
    await expect(page.locator(selectors.contactHeader)).toBeVisible();
  });

  test("should redirect to the top of the screen / arrow", async ({ page }) => {
    await page.click(selectors.buttomArrow);
    await expect(page.locator(selectors.profileHeader)).toBeVisible();
  });
});

test.describe("Footer Tests", () => {
  test.beforeEach(async ({ page }) => {
    await openURL(page);
  });

  test("should redirect to about me section from footer", async ({ page }) => {
    await page.click(selectors.aboutButtonFooter);
    await expect(page.locator(selectors.aboutHeader)).toBeVisible();
  });

  test("should redirect to experience section from footer", async ({
    page,
  }) => {
    await page.click(selectors.experienceButtonFooter);
    await expect(page.locator(selectors.experienceHeader)).toBeVisible();
  });

  test("should redirect to projects section from footer", async ({ page }) => {
    await page.click(selectors.projectsButtonFooter);
    await expect(page.locator(selectors.projectsHeader)).toBeVisible();
  });

  test("should redirect to contact me section from footer", async ({
    page,
  }) => {
    await page.click(selectors.contactMeButtonFooter);
    await expect(page.locator(selectors.contactHeader)).toBeVisible();
  });
});
