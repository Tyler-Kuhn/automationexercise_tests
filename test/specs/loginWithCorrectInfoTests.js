/*const page = require("../../page.js");
const helper = require("../../helper.js");

const password = "TestPass1!"
const userName = "Tim";
let userEmail;

if (browser.capabilities.browserName === 'chrome') {
    userEmail = 'timtestchrome@example.com';
} else if (browser.capabilities.browserName === 'firefox') {
    userEmail = 'timtestfire@example.com';
};

describe("Test Case 2: Login With Correct Info", () => {
    before( async () => {
        await browser.url("/");
        await page.clickSignupLoginButton();
        await page.fillOutSignupFields(userName, userEmail);
        await page.clickSignupButton();
        await page.fillAccountDetails(password);
        await page.selectNewsletterCheckBox();
        await page.selectOptinCheckBox();
        await page.fillOutPersonalDetails("Tim", "Dot", "Tim's Place");
        await page.fillOutAddressDetails("102 Big John Ln.", "Apt. B");
        await page.fillOutStateDetails("New York", "New York", "10001");
        await page.fillOutMobileNumber("5555555555");
        await page.clickCreateAccountButton();
        await page.clickContinueButton();
        await page.clickHomeButton();
        await page.clickLogout();
        await page.clickHomeButton();
    })
    after(async () => {
        await page.clickHomeButton();
        await page.clickSignupLoginButton();
        await page.loginToAccount(userEmail, password);
        const deleteAccountButton = await $(page.deleteAccountButton);
        await deleteAccountButton.waitForDisplayed();
        await deleteAccountButton.click();
        await page.clickContinueButton();
    })
    it("Should Open the homepage", async () => {
        const homepageTitle = await browser.getTitle();
        const expectedTitle = "Automation Exercise";
        await expect(homepageTitle).toBe(expectedTitle);
    });
    it("Should move to the Login page", async () => {
        await page.clickSignupLoginButton();
        await expect(await helper.getH2ElementByText("Login to your account")).toBeExisting();
    });
    it("Should Fill out login fields", async () => {
        const loginEmailField = await $(page.loginEmailField);
        await loginEmailField.waitForDisplayed();
        await loginEmailField.setValue(userEmail);
        const actualEmail = await loginEmailField.getValue();
        const loginPasswordField = await $(page.loginPasswordField);
        await loginPasswordField.waitForDisplayed();
        await loginPasswordField.setValue(password);
        const actualPassword = await loginPasswordField.getValue();
        const expectedEmail = userEmail;
        const expectedPassword = password;
        await expect(actualEmail).toBe(expectedEmail);
        await expect(actualPassword).toBe(expectedPassword);
    });
})*/