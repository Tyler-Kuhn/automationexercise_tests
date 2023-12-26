
const helper = require("../../pages/helper.js");
const nav = require("../../pages/navigationBar.js");
const login = require("../../pages/loginPage.js");
const signup = require("../../pages/signUpPage.js");

const userName = "John";
const password = "TestPass1!"
const lName = "Does";
const company = "John's Place";
const address = "102 Big John Ln.";
const addressTwo = "Apt. B";
const state = "New York";
const city = "New York";
const zip = "10001";
const phone = "5555555555";
const country = "United States";

let userEmail;

if (browser.capabilities.browserName === 'chrome') {
    userEmail = 'johntestchrome@gmail.com';
} else if (browser.capabilities.browserName === 'firefox') {
    userEmail = 'johntestfire@gmail.com';
};

describe.skip("Test Case 1: Registering a User", () => {

    beforeEach( async () => {
        await browser.url("/");
        });

    it("Should Open the Homepage", async () => {
        const homepageTitle = await browser.getTitle();
        const expectedTitle = "Automation Exercise";
        await expect(homepageTitle).toBe(expectedTitle);
    });

    it("Should navigate to the Signup / Login Page", async () => {
        await helper.clickSignupLoginButton();
        await expect(await helper.getH2ElementByText("New User Signup!")).toBeExisting();
    });

    it("Should fill in the name and email fields", async () => {
        await helper.clickSignupLoginButton();
        const signupNameField = await $(login.signupNameField);
        await signupNameField.setValue(userName);
        const signupEmailField = await $(login.signupEmailField);
        await signupEmailField.setValue(userEmail);
        const signupName = await signupNameField.getValue();
        const expectedSignupName = userName;
        const signupEmail = await signupEmailField.getValue();
        const expectedSignupEmail = userEmail;
        await expect(signupName).toBe(expectedSignupName);
        await expect(signupEmail).toBe(expectedSignupEmail); 
    });

    it("Should submit a new user", async () => {
        await helper.clickSignupLoginButton();
        await helper.fillOutSignupFields(userName, userEmail);
        await helper.clickSignupButton();
        const banner = await helper.getBElementByText("Enter Account Information");
        await banner.waitForDisplayed()
        await expect(banner).toBeExisting();
    });

    it("Should Fill out the account Info fields", async () => {
        await helper.clickSignupLoginButton();
        await helper.fillOutSignupFields(userName, userEmail);
        await helper.clickSignupButton();
        await helper.fillAccountDetails(password);
        const signupPasswordField = await $(signup.signupPasswordField);
        const actualPassword = await signupPasswordField.getValue();
        const expectedPassword = password;
        await helper.selectNewsletterCheckBox();
        await helper.selectOptinCheckBox();
        await helper.fillOutPersonalDetails(userName, lName, company);
        const firstNameField = await $(signup.firstNameField);
        const actualFirstName = await firstNameField.getValue();
        const expectedFirstname = userName;
        const lastNameField = await $(signup.lastNameField);
        const actualLastName = await lastNameField.getValue();
        const expectedLastname = lName;
        const companyField = await $(signup.companyField);
        const actualCompany = await companyField.getValue();
        const expectedCompany = company;
        await expect(actualPassword).toBe(expectedPassword);
        await expect(actualFirstName).toBe(expectedFirstname);
        await expect(actualLastName).toBe(expectedLastname);
        await expect(actualCompany).toBe(expectedCompany);
    });

    it("Should Fill in the location Info", async () => {
        await helper.clickSignupLoginButton();
        await helper.fillOutSignupFields(userName, userEmail);
        await helper.clickSignupButton();
        await helper.fillAccountDetails(password);
        await helper.selectNewsletterCheckBox();
        await helper.selectOptinCheckBox();
        await helper.fillOutPersonalDetails(userName, lName, company);
        await helper.fillOutAddressDetails(address, addressTwo);
        await helper.fillOutStateDetails(state, city, zip);
        await helper.fillOutMobileNumber(phone);
        //Verifing Address 1
        const addressField = await $(signup.addressField);
        const actualAddress = await addressField.getValue();
        const expectedAddress = address;
        await expect(actualAddress).toBe(expectedAddress);
        //Verifing Address 2
        const addressTwoField = await $(signup.addressTwoField);
        const actualAddressTwo = await addressTwoField.getValue();
        const expectedAddressTwo = addressTwo;
        await expect(actualAddressTwo).toBe(expectedAddressTwo);
        //Verifiing Country
        const countryDropDown = await $(signup.countryDropDown);
        const actualCountry = await countryDropDown.getValue();
        const expectedCountry = country;
        await expect(actualCountry).toBe(expectedCountry);
        //Verifing State
        const stateField = await $(signup.stateField);
        const actualState = await stateField.getValue();
        const expectedState = state;
        await expect(actualState).toBe(expectedState);
        //Verifing City
        const cityField = await $(signup.cityField);
        const actualCity = await cityField.getValue();
        const expectedCity = city;
        await expect(actualCity).toBe(expectedCity);
        //Verifing Zip
        const zipCodeField = await $(signup.zipCodeField);
        const actualZip = await zipCodeField.getValue();
        const expectedZip = zip;
        await expect(actualZip).toBe(expectedZip);
        //Verifing Mobile Number
        const mobileNumberField = await $(signup.mobileNumberField);
        const actualMobileNumber = await mobileNumberField.getValue();
        const expectedMobileNumber = phone;
        await expect(actualMobileNumber).toBe(expectedMobileNumber);
    });

    it("Should Create an Account", async () => {
        await helper.clickSignupLoginButton();
        await helper.fillOutSignupFields(userName, userEmail);
        await helper.clickSignupButton();
        await helper.fillAccountDetails(password);
        await helper.selectNewsletterCheckBox();
        await helper.selectOptinCheckBox();
        await helper.fillOutPersonalDetails(userName, lName, company);
        await helper.fillOutAddressDetails(address, addressTwo);
        await helper.fillOutStateDetails(state, city, zip);
        await helper.fillOutMobileNumber(phone);
        await helper.clickCreateAccountButton();
        await expect(await helper.getBElementByText("Account Created!")).toBeExisting();
        //Clean Up
        await helper.clickContinueButton();
        const deleteAccountButton = await $(nav.deleteAccountButton);
        await deleteAccountButton.waitForDisplayed();
        await deleteAccountButton.click();
        await helper.clickContinueButton();
    });

    it("Should Verify Account is Logged in", async () => {
        await helper.clickSignupLoginButton();
        await helper.fillOutSignupFields(userName, userEmail);
        await helper.clickSignupButton();
        await helper.fillAccountDetails(password);
        await helper.selectNewsletterCheckBox();
        await helper.selectOptinCheckBox();
        await helper.fillOutPersonalDetails(userName, lName, company);
        await helper.fillOutAddressDetails(address, addressTwo);
        await helper.fillOutStateDetails(state, city, zip);
        await helper.fillOutMobileNumber(phone);
        await helper.clickCreateAccountButton();
        await helper.clickContinueButton();
        const accountLoggedIn = await $(nav.accountLoggedIn);
        const actualAccount = await accountLoggedIn.getText();
        const expectedAccount = userName;
        await expect(actualAccount).toBe(expectedAccount);
        //Clean Up
        const deleteAccountButton = await $(nav.deleteAccountButton);
        await deleteAccountButton.waitForDisplayed();
        await deleteAccountButton.click();
        await helper.clickContinueButton();
    });

    it("Should Delete the Account", async () => {
        await helper.clickSignupLoginButton();
        await helper.fillOutSignupFields(userName, userEmail);
        await helper.clickSignupButton();
        await helper.fillAccountDetails(password);
        await helper.selectNewsletterCheckBox();
        await helper.selectOptinCheckBox();
        await helper.fillOutPersonalDetails(userName, lName, company);
        await helper.fillOutAddressDetails(address, addressTwo);
        await helper.fillOutStateDetails(state, city, zip);
        await helper.fillOutMobileNumber(phone);
        await helper.clickCreateAccountButton();
        await helper.clickContinueButton();
        const deleteAccountButton = await $(nav.deleteAccountButton);
        await deleteAccountButton.waitForDisplayed();
        await deleteAccountButton.click();
        await expect(await helper.getBElementByText("Account Deleted!")).toBeExisting();
        await helper.clickContinueButton();
    }); 
})