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
        const signupButton = await $(page.signupButton);
        await signupButton.waitForDisplayed();
        await signupButton.click();
        const signupPageTitle = await browser.getTitle();
        const expectedTitle = "Automation Exercise - Signup / Login";
        await expect(signupPageTitle).toBe(expectedTitle);
    });

    it("Should fill in the name and email fields", async () => {
        const signupButton = await $(page.signupButton);
        await signupButton.waitForDisplayed();
        await signupButton.click();
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
    })
})