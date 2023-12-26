
const helper = require("../../pages/helper.js");
const login = require("../../pages/loginPage.js");
const nav = require("../../pages/navigationBar.js")


require('chromedriver');
require('geckodriver');
const password = "TestPass1!";
const userName = "Tim";
let userEmail;

if (browser.capabilities.browserName === "chrome") {
  userEmail = "timtestchrome@gmail.com";
} else if (browser.capabilities.browserName === "firefox") {
  userEmail = "timtestfire@gmail.com";
}

describe("Test Case 2: Login With Correct Info", () => {

  before(async () => {
    await browser.url("/");
    await helper.clickSignupLoginButton();
    await helper.fillOutSignupFields(userName, userEmail);
    await helper.clickSignupButton();
    await helper.fillAccountDetails(password);
    await helper.selectNewsletterCheckBox();
    await helper.selectOptinCheckBox();
    await helper.fillOutPersonalDetails("Tim", "Dot", "Tim's Place");
    await helper.fillOutAddressDetails("102 Big John Ln.", "Apt. B");
    await helper.fillOutStateDetails("New York", "New York", "10001");
    await helper.fillOutMobileNumber("5555555555");
    await helper.clickCreateAccountButton();
    await helper.clickContinueButton();
    await helper.clickHomeButton();
    await helper.clickLogout();
    await helper.clickHomeButton();
  });
  after(async () => {
    await helper.clickHomeButton();
    await helper.clickSignupLoginButton();
    await helper.loginToAccount(userEmail, password);
    await helper.deleteAccount();
    await helper.clickContinueButton();
  });
  it("Should Open the homepage", async () => {
    const homepageTitle = await browser.getTitle();
    const expectedTitle = "Automation Exercise";
    await expect(homepageTitle).toBe(expectedTitle);
  });
  it("Should move to the Login page", async () => {
    await helper.clickSignupLoginButton();
    const banner = await helper.getH2ElementByText("Login to your account");
    await banner.waitForDisplayed();
    await expect(banner).toBeExisting();
  });
  it("Should Fill out login fields", async () => {
    const loginEmailField = await $(login.loginEmailField);
    await loginEmailField.waitForDisplayed();
    await loginEmailField.setValue(userEmail);
    const actualEmail = await loginEmailField.getValue();
    const loginPasswordField = await $(login.loginPasswordField);
    await loginPasswordField.waitForDisplayed();
    await loginPasswordField.setValue(password);
    const actualPassword = await loginPasswordField.getValue();
    const expectedEmail = userEmail;
    const expectedPassword = password;
    await expect(actualEmail).toBe(expectedEmail);
    await expect(actualPassword).toBe(expectedPassword);
  });
});
