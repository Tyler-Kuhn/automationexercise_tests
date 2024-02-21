
const Page = require("../../pages/page.js");
const LoginPage = require("../../pages/loginPage.js");
const SignupPage = require("../../pages/signUpPage.js");
const AdsPage = require("../../pages/adsPage.js");

const page = new Page();

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

describe("Test Case 1: Registering a User", () => {

    beforeEach("Open Browser Hook", async () => {
        await page.open();
        });

    it("Should Open the Homepage", async () => {
        const homepageTitle = await browser.getTitle();
        const expectedTitle = "Automation Exercise";
        await expect(homepageTitle).toBe(expectedTitle);
    });

    it("Should navigate to the Signup / Login Page", async () => {
        await page.clickSignupLoginButton();
        await expect(await page.getH2ElementByText("New User Signup!")).toBeExisting();
    });

    it("Should fill in the name and email fields", async () => {
        await page.clickSignupLoginButton();
        await LoginPage.signupNameField.waitForDisplayed();
        await LoginPage.signupNameField.setValue(userName);
        await LoginPage.signupEmailField.waitForDisplayed();
        await LoginPage.signupEmailField.setValue(userEmail);
        const signupName = await LoginPage.signupNameField.getValue();
        const expectedSignupName = userName;
        const signupEmail = await LoginPage.signupEmailField.getValue();
        const expectedSignupEmail = userEmail;
        await expect(signupName).toBe(expectedSignupName);
        await expect(signupEmail).toBe(expectedSignupEmail); 
    });

    it("Should submit a new user", async () => {
        await page.clickSignupLoginButton();
        await LoginPage.fillOutSignupFields(userName, userEmail);
        await LoginPage.clickSignupButton();
        const banner = await page.getBElementByText("Enter Account Information");
        await banner.waitForDisplayed()
        await expect(banner).toBeExisting();
    });

    it("Should Fill out the account Info fields", async () => {
        await page.clickSignupLoginButton();
        await LoginPage.fillOutSignupFields(userName, userEmail);
        await LoginPage.clickSignupButton();
        await SignupPage.fillAccountDetails(password);
        const signupPasswordField = await SignupPage.signupPasswordField;
        const actualPassword = await signupPasswordField.getValue();
        const expectedPassword = password;
        await SignupPage.selectNewsletterCheckBox();
        await SignupPage.selectOptinCheckBox();
        await SignupPage.fillOutPersonalDetails(userName, lName, company);
        const firstNameField = await SignupPage.firstNameField;
        const actualFirstName = await firstNameField.getValue();
        const expectedFirstname = userName;
        const lastNameField = await SignupPage.lastNameField;
        const actualLastName = await lastNameField.getValue();
        const expectedLastname = lName;
        const companyField = await SignupPage.companyField;
        const actualCompany = await companyField.getValue();
        const expectedCompany = company;
        await expect(actualPassword).toBe(expectedPassword);
        await expect(actualFirstName).toBe(expectedFirstname);
        await expect(actualLastName).toBe(expectedLastname);
        await expect(actualCompany).toBe(expectedCompany);
    });

    it("Should Fill in the location Info", async () => {
        await page.clickSignupLoginButton();
        await LoginPage.fillOutSignupFields(userName, userEmail);
        await LoginPage.clickSignupButton();
        await SignupPage.fillAccountDetails(password);
        await SignupPage.selectNewsletterCheckBox();
        await SignupPage.selectOptinCheckBox();
        await SignupPage.fillOutPersonalDetails(userName, lName, company);
        await SignupPage.fillOutAddressDetails(address, addressTwo);
        await SignupPage.fillOutStateDetails(state, city, zip);
        await SignupPage.fillOutMobileNumber(phone);
        //Verifing Address 1
        const addressField = await SignupPage.addressField;
        const actualAddress = await addressField.getValue();
        const expectedAddress = address;
        await expect(actualAddress).toBe(expectedAddress);
        //Verifing Address 2
        const addressTwoField = await SignupPage.addressTwoField;
        const actualAddressTwo = await addressTwoField.getValue();
        const expectedAddressTwo = addressTwo;
        await expect(actualAddressTwo).toBe(expectedAddressTwo);
        //Verifiing Country
        const countryDropDown = await SignupPage.countryDropDown;
        const actualCountry = await countryDropDown.getValue();
        const expectedCountry = country;
        await expect(actualCountry).toBe(expectedCountry);
        //Verifing State
        const stateField = await SignupPage.stateField;
        const actualState = await stateField.getValue();
        const expectedState = state;
        await expect(actualState).toBe(expectedState);
        //Verifing City
        const cityField = await SignupPage.cityField;
        const actualCity = await cityField.getValue();
        const expectedCity = city;
        await expect(actualCity).toBe(expectedCity);
        //Verifing Zip
        const zipCodeField = await SignupPage.zipCodeField;
        const actualZip = await zipCodeField.getValue();
        const expectedZip = zip;
        await expect(actualZip).toBe(expectedZip);
        //Verifing Mobile Number
        const mobileNumberField = await SignupPage.mobileNumberField;
        const actualMobileNumber = await mobileNumberField.getValue();
        const expectedMobileNumber = phone;
        await expect(actualMobileNumber).toBe(expectedMobileNumber);
    });

    it("Should Create an Account", async () => {
        await page.clickSignupLoginButton();
        await LoginPage.fillOutSignupFields(userName, userEmail);
        await LoginPage.clickSignupButton();
        await SignupPage.fillAccountDetails(password);
        await SignupPage.selectNewsletterCheckBox();
        await SignupPage.selectOptinCheckBox();
        await SignupPage.fillOutPersonalDetails(userName, lName, company);
        await SignupPage.fillOutAddressDetails(address, addressTwo);
        await SignupPage.fillOutStateDetails(state, city, zip);
        await SignupPage.fillOutMobileNumber(phone);
        await SignupPage.clickCreateAccountButton();
        await expect(await page.getBElementByText("Account Created!")).toBeExisting();
        //Clean Up
        await SignupPage.clickContinueButton();
        const deleteAccountButton = await page.deleteAccountButton;
        await deleteAccountButton.waitForDisplayed();
        await deleteAccountButton.click();
        await SignupPage.clickContinueButton();
    });

    it("Should Verify Account is Logged in", async () => {
        await page.clickSignupLoginButton();
        await LoginPage.fillOutSignupFields(userName, userEmail);
        await LoginPage.clickSignupButton();
        await SignupPage.fillAccountDetails(password);
        await SignupPage.selectNewsletterCheckBox();
        await SignupPage.selectOptinCheckBox();
        await SignupPage.fillOutPersonalDetails(userName, lName, company);
        await SignupPage.fillOutAddressDetails(address, addressTwo);
        await SignupPage.fillOutStateDetails(state, city, zip);
        await SignupPage.fillOutMobileNumber(phone);
        await SignupPage.clickCreateAccountButton();
        await SignupPage.clickContinueButton();
        const accountLoggedIn = await page.accountLoggedIn;
        const actualAccount = await accountLoggedIn.getText();
        const expectedAccount = userName;
        await expect(actualAccount).toBe(expectedAccount);
        //Clean Up
        const deleteAccountButton = await page.deleteAccountButton;
        await deleteAccountButton.waitForDisplayed();
        await deleteAccountButton.click();
        await SignupPage.clickContinueButton();
    });

    it("Should Delete the Account", async () => {
        await page.clickSignupLoginButton();
        await LoginPage.fillOutSignupFields(userName, userEmail);
        await LoginPage.clickSignupButton();
        await SignupPage.fillAccountDetails(password);
        await SignupPage.selectNewsletterCheckBox();
        await SignupPage.selectOptinCheckBox();
        await SignupPage.fillOutPersonalDetails(userName, lName, company);
        await SignupPage.fillOutAddressDetails(address, addressTwo);
        await SignupPage.fillOutStateDetails(state, city, zip);
        await SignupPage.fillOutMobileNumber(phone);
        await SignupPage.clickCreateAccountButton();
        await AdsPage.checkAndCloseAdWhileInteracting();
        await SignupPage.clickContinueButton();
        await AdsPage.checkAndCloseAdWhileInteracting();
        const deleteAccountButton = await page.deleteAccountButton;
        await deleteAccountButton.waitForDisplayed();
        await deleteAccountButton.click();
        await expect(await page.getBElementByText("Account Deleted!")).toBeExisting();
        await SignupPage.clickContinueButton();
    }); 
});