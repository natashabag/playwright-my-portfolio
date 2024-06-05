export const navigationSelectors = {
  aboutButtonTop: "//nav[@id='desktop-nav']//a[@href='#about']",
  experienceButtonTop: "//nav[@id='desktop-nav']//a[@href='#experience']",
  projectsButtonTop: "//nav[@id='desktop-nav']//a[@href='#projects']",
  contactMeButtonTop: "//nav[@id='desktop-nav']//a[@href='#contact']",
};
export const projectSelectors = {
  project1Button: "#projects div:nth-child(1) button",
  project2Button: "#projects div:nth-child(2) button",
  project3Button: "#projects div:nth-child(3) button",
};

export const socialMediaSelectors = {
  linkedInLink:
    '#contact p a[href="https://www.linkedin.com/in/natalia-bagramian"]',
};

export const arrowSelectors = {
  firstArrow: "#profile img",
  secondArrow: "#about img",
  thirdArrow: "#experience img",
  fourthArrow: "#projects img",
  fifthArrow: "#manual-projects img",
  bottomArrow: "#contact img",
};

export const footerSelectors = {
  aboutButtonFooter: '[role="link"][name="About me"]:nth-of-type(2)',
  experienceButtonFooter: '[role="link"][name="Experience"]:nth-of-type(2)',
  projectsButtonFooter: '[role="link"][name="Projects"]:nth-of-type(2)',
  contactMeButtonFooter: '[role="link"][name="Contact me"]:nth-of-type(2)',
};
