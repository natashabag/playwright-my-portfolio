import { Page } from "@playwright/test";

export const selectors = {
  // Top Buttons:
  aboutButtonTop: "//nav[@id='desktop-nav']//a[@href='#about']",
  experienceButtonTop: "//nav[@id='desktop-nav']//a[@href='#experience']",
  projectsButtonTop: "//nav[@id='desktop-nav']//a[@href='#projects']",
  contactMeButtonTop: "//nav[@id='desktop-nav']//a[@href='#contact']",

  // Footer Buttons:
  aboutButtonFooter: "//footer//a[@href='#about']",
  experienceButtonFooter: "//footer//a[@href='#experience']",
  projectsButtonFooter: "//footer//a[@href='#projects']",
  contactMeButtonFooter: "//footer//a[@href='#contact']",

  // Other Buttons:
  downloadResumeButton: "//button[contains(text(), 'Download Resume')]",
  visitGitHubButton: "//button[contains(text(), 'Visit GitHub')]",
  linkedInButton: "//*[@id='contact']/div/div[2]/p/a",

  // Sections headers:
  profileHeader: "//*[@id='profile']//h1",
  aboutHeader: "//*[@id='about']/h1",
  experienceHeader: "//*[@id='experience']/h1",
  projectsHeader: "//*[@id='projects']/h1",
  manualProjectsHeader: "//*[@id='manual-projects']/h1",
  contactHeader: "//*[@id='contact']/h1",

  // Arrows:
  firstArrow: "//*[@id='profile']/img",
  secondArrow: "//*[@id='about']/img",
  thirdArrow: "//*[@id='experience']/img",
  fourthArrow: "//*[@id='projects']/img",
  fifthArrow: "//*[@id='manual-projects']/img",
  buttomArrow: "//*[@id='contact']/img",

  // Project Buttons:
  projectOneButton: "//*[@id='projects']/div/div/div[1]/div[2]/button",
  projectTwoButton: "//*[@id='projects']/div/div/div[2]/div[2]/button",
  projectThreeButton: "//*[@id='projects']/div/div/div[3]/div[2]/button",
};
export const urls = {
  resumeURL:
    "https://natashabag.github.io/assets/Natalia_Bagramian_QA_Engineer.pdf",
  gitHubURL: "https://github.com/natashabag",
  projectOneURL: "https://github.com/natashabag/Swag-Labs",
  projectTwoURL: "https://github.com/natashabag/Luma_Selenium_Python",
  projectThreeURL: "https://github.com/natashabag/Urban-Routes-Web-App",
  linkedInURL: "https://www.linkedin.com/in/natalia-bagramian",
};

export async function openURL(page: Page) {
  await page.goto("https://natashabag.github.io/");
}
