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

    it("Should ")
})