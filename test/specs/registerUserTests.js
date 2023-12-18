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
        const signupPasswordField = await $(page.signupPasswordField);
        const actualPassword = await signupPasswordField.getValue();
        const expectedPassword = "TestPass1!";
        await page.selectNewsletterCheckBox();
        await page.selectOptinCheckBox();
        await page.fillOutPersonalDetails("John", "Does", "John's Place");
        const firstNameField = await $(page.firstNameField);
        const actualFirstName = await firstNameField.getValue();
        const expectedFirstname = "John";
        const lastNameField = await $(page.lastNameField);
        const actualLastName = await lastNameField.getValue();
        const expectedLastname = "Does";
        const companyField = await $(page.companyField);
        const actualCompany = await companyField.getValue();
        const expectedCompany = "John's Place";
        await expect(actualPassword).toBe(expectedPassword);
        await expect(actualFirstName).toBe(expectedFirstname);
        await expect(actualLastName).toBe(expectedLastname);
        await expect(actualCompany).toBe(expectedCompany);
    });

    it("Should Fill in the location Info", async () => {
        await page.clickSignupLoginButton();
        await page.fillOutSignupFields("John Does", "johndoestester@outlook.com");
        await page.clickSignupButton();
        await page.fillAccountDetails("TestPass1!");
        await page.selectNewsletterCheckBox();
        await page.selectOptinCheckBox();
        await page.fillOutPersonalDetails("John", "Does", "John's Place");
        await page.fillOutAddressDetails("102 Big John Ln.", "Apt. B");
        await page.fillOutStateDetails("New York", "New York", "10001");
        await page.fillOutMobileNumber("5555555555");
        //Verifing Address 1
        const addressField = await $(page.addressField);
        const actualAddress = await addressField.getValue();
        const expectedAddress = "102 Big John Ln.";
        await expect(actualAddress).toBe(expectedAddress);
        //Verifing Address 2
        const addressTwoField = await $(page.addressTwoField);
        const actualAddressTwo = await addressTwoField.getValue();
        const expectedAddressTwo = "Apt. B";
        await expect(actualAddressTwo).toBe(expectedAddressTwo);
        //Verifiing Country
        const countryDropDown = await $(page.countryDropDown);
        const actualCountry = await countryDropDown.getValue();
        const expectedCountry = "United States";
        await expect(actualCountry).toBe(expectedCountry);
        //Verifing State
        const stateField = await $(page.stateField);
        const actualState = await stateField.getValue();
        const expectedState = "New York";
        await expect(actualState).toBe(expectedState);
        //Verifing City
        const cityField = await $(page.cityField);
        const actualCity = await cityField.getValue();
        const expectedCity = "New York";
        await expect(actualCity).toBe(expectedCity);
        //Verifing Zip
        const zipCodeField = await $(page.zipCodeField);
        const actualZip = await zipCodeField.getValue();
        const expectedZip = "10001";
        await expect(actualZip).toBe(expectedZip);
        //Verifing Mobile Number
        const mobileNumberField = await $(page.mobileNumberField);
        const actualMobileNumber = await mobileNumberField.getValue();
        const expectedMobileNumber = "5555555555";
        await expect(actualMobileNumber).toBe(expectedMobileNumber);
    });

    it("Should Create an Account", async () => {
        await page.clickSignupLoginButton();
        await page.fillOutSignupFields("John Does", "johndoestester@outlook.com");
        await page.clickSignupButton();
        await page.fillAccountDetails("TestPass1!");
        await page.selectNewsletterCheckBox();
        await page.selectOptinCheckBox();
        await page.fillOutPersonalDetails("John", "Does", "John's Place");
        await page.fillOutAddressDetails("102 Big John Ln.", "Apt. B");
        await page.fillOutStateDetails("New York", "New York", "10001");
        await page.fillOutMobileNumber("5555555555");
        await page.clickCreateAccountButton();
        await expect(await helper.getBElementByText("Account Created!")).toBeExisting();
    });

    it("Should Verify Account is Logged in", async () => {
        await page.clickSignupLoginButton();
        await page.fillOutSignupFields("John Does", "johndoestester@outlook.com");
        await page.clickSignupButton();
        await page.fillAccountDetails("TestPass1!");
        await page.selectNewsletterCheckBox();
        await page.selectOptinCheckBox();
        await page.fillOutPersonalDetails("John", "Does", "John's Place");
        await page.fillOutAddressDetails("102 Big John Ln.", "Apt. B");
        await page.fillOutStateDetails("New York", "New York", "10001");
        await page.fillOutMobileNumber("5555555555");
        await page.clickCreateAccountButton();
        await page.clickContinueButton();
        await expect(await helper.getBElementByText("John")).toBeExisting();
    });

    it("Should Delete the Account", async () => {
        await page.clickSignupLoginButton();
        await page.fillOutSignupFields("John Does", "johndoestester@outlook.com");
        await page.clickSignupButton();
        await page.fillAccountDetails("TestPass1!");
        await page.selectNewsletterCheckBox();
        await page.selectOptinCheckBox();
        await page.fillOutPersonalDetails("John", "Does", "John's Place");
        await page.fillOutAddressDetails("102 Big John Ln.", "Apt. B");
        await page.fillOutStateDetails("New York", "New York", "10001");
        await page.fillOutMobileNumber("5555555555");
        await page.clickCreateAccountButton();
        await page.clickContinueButton();
        const deleteAccountButton = await $(page.deleteAccountButton);
        await deleteAccountButton.waitForDisplayed();
        await deleteAccountButton.click();
        await expect(await helper.getBElementByText("Account Deleted!")).toBeExisting();
        await page.clickContinueButton();
    });
})