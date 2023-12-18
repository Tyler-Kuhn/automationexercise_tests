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
        await page.clickSignupLoginButton();
        await expect(await helper.getH2ElementByText("New User Signup!")).toBeExisting();
    });

    it("Should fill in the name and email fields", async () => {
        await page.clickSignupLoginButton();
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
        await page.clickSignupLoginButton();
        await page.fillOutSignupFields("John Does", "johndoestester@outlook.com");
        await page.clickSignupButton();
        await expect(await helper.getBElementByText("Enter Account Information")).toBeExisting();
    });

    it("Should Fill out the account Info fields", async () => {
        await page.clickSignupLoginButton();
        await page.fillOutSignupFields("John Does", "johndoestester@outlook.com");
        await page.clickSignupButton();
        await page.fillAccountDetails("TestPass1!");
    });
})