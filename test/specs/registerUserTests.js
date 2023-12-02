const page = require("../../page.js");
const helper = require("../../helper.js");

describe("Test Case 1: Registering a User", () => {

    beforeEach( async () => {
        await browser.url("/");
        });

    it("Should Open the Webpage", async () => {
        const homepageTitle = await browser.getTitle();
        const expectedTitle = "Automation Exercise";
        await expect(homepageTitle).toBe(expectedTitle);
    });

    it("Should navigate to the Signup / Login Page", async () => {
        const signupLoginButton = await $(page.signupLoginButton);
        await signupLoginButton.waitForDisplayed();
        await signupLoginButton.click();
        const signupLoginPageTitle = await browser.getTitle();
        const expectedTitle = "Automation Exercise - Signup / Login";
        await expect(signupLoginPageTitle).toBe(expectedTitle);
    });

    it("Should fill in the name and email fields", async () => {
        const signupLoginButton = await $(page.signupLoginButton);
        await signupLoginButton.waitForDisplayed();
        await signupLoginButton.click();
        const signupNameField = await $(page.signupNameField);
        await signupNameField.setValue("John Does");
        const signupEmailField = await $(page.signupEmailField);
        await signupEmailField.setValue("johndoestester@outlook.com");
        const signupName = await signupNameField.getValue();
        const expectedSignupName = "John Does";
        const signupEmail = await signupEmailField.getValue();
        const expectedSignupEmail = "johndoestester@outlook.com";
        await expect(signupName).toBe(expectedSignupName);
        await expect(signupEmail).toBe(expectedSignupEmail); 
    });

    it("Should submit a new user", async () => {
        const signupLoginButton = await $(page.signupLoginButton);
        await signupLoginButton.waitForDisplayed();
        await signupLoginButton.click();
        const signupNameField = await $(page.signupNameField);
        await signupNameField.setValue("John Does");
        const signupEmailField = await $(page.signupEmailField);
        await signupEmailField.setValue("johndoestester@outlook.com");
        const signupButton = await $(page.signupButton);
        await signupButton.click();
        const signupTitle = await browser.getTitle();
        const expectedTitle = "Automation Exercise - Signup";
        await expect(signupTitle).toBe(expectedTitle);
    });

    it("Should Fill out the account Info fields", async () => {

    });
})