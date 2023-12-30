const nav = require("./navigationBar.js");
const login = require("./loginPage.js");
const signup = require("./signUpPage.js");
const ads = require("./adsPage.js");

module.exports = {
    getH2ElementByText: async function (obj) {
        return await $(`h2=${obj.toString()}`);
      },

    getBElementByText: async function (obj) {
        return await $(`b=${obj.toString()}`);
      },
    clickHomeButton: async function () {
        const homeButton = await $(nav.homeButton);
        await homeButton.waitForDisplayed();
        await homeButton.click();
    },
    clickLogout: async function () {
        const logoutButton = await $(nav.logoutButton);
        await logoutButton.waitForDisplayed();
        await logoutButton.click();
    },
    loginToAccount: async function (email, password) {
        const loginEmailField = await $(login.loginEmailField);
        await loginEmailField.waitForDisplayed();
        await loginEmailField.setValue(email);
        const loginPasswordField = await $(login.loginPasswordField);
        await loginPasswordField.waitForDisplayed();
        await loginPasswordField.setValue(password);
        const loginButton = await $(login.loginButton);
        await loginButton.waitForDisplayed();
        await loginButton.click();
    },
    clickSignupLoginButton: async function () {
        const signupLoginButton = await $(nav.signupLoginButton);
        await signupLoginButton.waitForDisplayed();
        await signupLoginButton.click();
    },
    fillOutSignupFields: async function (name, email) {
        const signupNameField = await $(login.signupNameField);
        await signupNameField.setValue(name);
        const signupEmailField = await $(login.signupEmailField);
        await signupEmailField.setValue(email);
    },
    clickSignupButton: async function () {
        const signupButton = await $(login.signupButton);
        await signupButton.waitForDisplayed();
        await signupButton.click();
    },
    fillAccountDetails: async function (password) {
        const mrRadioButton = await $(signup.mrRadioButton);
        await mrRadioButton.waitForDisplayed();
        await mrRadioButton.click();
        const signupPasswordField = await $(signup.signupPasswordField);
        await signupPasswordField.setValue(password);
        const dobDayDropDown = await $(signup.dobDayDropDown);
        await dobDayDropDown.click();
        const dayOptionTen = await $(signup.dayOptionTen);
        await dayOptionTen.waitForDisplayed();
        await dayOptionTen.click();
        const dobMonthDropDown = await $(signup.dobMonthDropDown);
        await dobMonthDropDown.click();
        const monthOptionFeb = await $(signup.monthOptionFeb);
        await monthOptionFeb.waitForDisplayed();
        await monthOptionFeb.click();
        const dobYearDropDown = await $(signup.dobYearDropDown);
        await dobYearDropDown.click();
        const yearOption1986 = await $(signup.yearOption1986);
        await yearOption1986.waitForDisplayed();
        await yearOption1986.click();
    },
    selectNewsletterCheckBox: async function () {
        const newsletterCheckBox = await $(signup.newsletterCheckBox);
        await newsletterCheckBox.waitForDisplayed();
        await newsletterCheckBox.click();
    },
    selectOptinCheckBox: async function () {
        const optinCheckBox = await $(signup.optinCheckBox);
        await optinCheckBox.waitForDisplayed();
        await optinCheckBox.click();
    },
    fillOutPersonalDetails: async function (firstName, lastName, company) {
        const firstNameField = await $(signup.firstNameField);
        await firstNameField.waitForDisplayed();
        await firstNameField.setValue(firstName);
        const lastNameField = await $(signup.lastNameField);
        await lastNameField.setValue(lastName);
        const companyField = await $(signup.companyField);
        await companyField.setValue(company);
    },
    clickCreateAccountButton: async function () {
        const createAccountButton = await $(signup.createAccountButton);
        await createAccountButton.waitForDisplayed();
        await createAccountButton.click();
    },
    clickContinueButton: async function () {
        const continueButton = await $(signup.continueButton);    
        await continueButton.waitForDisplayed();
        await continueButton.click();
    },
    fillOutAddressDetails: async function (address1, address2) {
        const addressField = await $(signup.addressField);
        await addressField.waitForDisplayed();
        await addressField.setValue(address1);
        const addressTwoField = await $(signup.addressTwoField);
        await addressTwoField.waitForDisplayed();
        await addressTwoField.setValue(address2);
        const countryDropDown = await $(signup.countryDropDown);
        await countryDropDown.waitForDisplayed();
        await countryDropDown.click();
        const unitedStatesOption = await $(signup.unitedStatesOption);
        await unitedStatesOption.waitForDisplayed();
        await unitedStatesOption.click();
    },
    fillOutStateDetails: async function (state, city, zipcode) {
        const stateField = await $(signup.stateField);
        await stateField.setValue(state);
        const cityField = await $(signup.cityField);
        await cityField.setValue(city);
        const zipCodeField = await $(signup.zipCodeField);
        await zipCodeField.setValue(zipcode);
    },
    fillOutMobileNumber: async function (number) {
        const mobileNumberField = await $(signup.mobileNumberField);
        await mobileNumberField.waitForDisplayed();
        await mobileNumberField.setValue(number);
    },
    deleteAccount: async function () {
        const deleteAccountButton = await $(nav.deleteAccountButton);
        await deleteAccountButton.waitForDisplayed();
        await deleteAccountButton.click();
    },
    checkAndCloseAd: async function () {
        const adSelector = await $(ads.adModel); 
        const closeButtonSelector = await $(ads.closeAdButton);
        // Check if ad is displayed
        if (await $(adSelector).isDisplayed()) {
            // If there's a close button, click it
            if (await $(closeButtonSelector).isDisplayed()) {
                await $(closeButtonSelector).click();
            } else {
                // If there's no close button, wait for the ad to disappear
                await browser.pause(10000); // Adjust the time as necessary
            }
        }
    }
}