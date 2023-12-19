module.exports = {
//Homepage
    //Titles
    homepageTitle: 'head > title',
    //Nav Buttons
    signupLoginButton: 'a[href="/login"]',
    deleteAccountButton: 'a[href="/delete_account"]',
    accountLoggedIn: '#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a > b',
//SignUp / Login Page
    //Fields
    signupNameField: 'input[placeholder="Name"]', //Works for Signup Page aswell
    signupEmailField: 'input[data-qa="signup-email"]', //Works for Signup Page aswell
    //Buttons
    signupButton: 'button[data-qa="signup-button"]',
//Signup Page
    //Fields
    signupPasswordField: 'input[data-qa="password"]',
    firstNameField: 'input[data-qa="first_name"]',
    lastNameField: 'input[data-qa="last_name"]',
    companyField: 'input[data-qa="company"]',
    addressField: 'input[data-qa="address"]',
    addressTwoField: 'input[data-qa="address2"]',
    stateField: 'input[data-qa="state"]',
    cityField: 'input[data-qa="city"]',
    zipCodeField: 'input[data-qa="zipcode"]',
    mobileNumberField: 'input[data-qa="mobile_number"]',
    //Radio Options
    mrRadioButton: 'input[value="Mr"]',
    mrsRadioButton: 'input[value="Mrs"]',
    //DropDown Menus
    dobDayDropDown: 'select[data-qa="days"]',
        //Day Options
        dayOptionTen: '#days > option:nth-child(11)',
        dayOptionTwo: '#days > option:nth-child(3)',

    dobMonthDropDown: 'select[data-qa="months"]',
        //Month Options
        monthOptionJan: '#months > option:nth-child(2)',
        monthOptionFeb: '#months > option:nth-child(3)',

    dobYearDropDown: 'select[data-qa="years"]',
        //Year Options
        yearOption1986: 'option[value="1986"]',
        yearOption2011: 'option[value="2011"]',

    countryDropDown: 'select[data-qa="country"]',
        //Country Options
        unitedStatesOption: 'option[value="United States"]',
    //Checkboxes
    newsletterCheckBox: 'input[id="newsletter"]',
    optinCheckBox: 'input[id="optin"]',
    //Buttons
    createAccountButton: 'button[data-qa="create-account"]',
//Account Created Page
    //Buttons
    continueButton: 'a[data-qa="continue-button"]',
//Functions
    clickSignupLoginButton: async function () {
        const signupLoginButton = await $(this.signupLoginButton);
        await signupLoginButton.waitForDisplayed();
        await signupLoginButton.click();
    },
    fillOutSignupFields: async function (name, email) {
        const signupNameField = await $(this.signupNameField);
        await signupNameField.setValue(name);
        const signupEmailField = await $(this.signupEmailField);
        await signupEmailField.setValue(email);
    },
    clickSignupButton: async function () {
        const signupButton = await $(this.signupButton);
        await signupButton.waitForDisplayed();
        await signupButton.click();
    },
    fillAccountDetails: async function (password) {
        const mrRadioButton = await $(this.mrRadioButton);
        await mrRadioButton.waitForDisplayed();
        await mrRadioButton.click();
        const signupPasswordField = await $(this.signupPasswordField);
        await signupPasswordField.setValue(password);
        const dobDayDropDown = await $(this.dobDayDropDown);
        await dobDayDropDown.click();
        const dayOptionTen = await $(this.dayOptionTen);
        await dayOptionTen.waitForDisplayed();
        await dayOptionTen.click();
        const dobMonthDropDown = await $(this.dobMonthDropDown);
        await dobMonthDropDown.click();
        const monthOptionFeb = await $(this.monthOptionFeb);
        await monthOptionFeb.waitForDisplayed();
        await monthOptionFeb.click();
        const dobYearDropDown = await $(this.dobYearDropDown);
        await dobYearDropDown.click();
        const yearOption1986 = await $(this.yearOption1986);
        await yearOption1986.waitForDisplayed();
        await yearOption1986.click();
    },
    selectNewsletterCheckBox: async function () {
        const newsletterCheckBox = await $(this.newsletterCheckBox);
        await newsletterCheckBox.waitForDisplayed();
        await newsletterCheckBox.click();
    },
    selectOptinCheckBox: async function () {
        const optinCheckBox = await $(this.optinCheckBox);
        await optinCheckBox.waitForDisplayed();
        await optinCheckBox.click();
    },
    fillOutPersonalDetails: async function (firstName, lastName, company) {
        const firstNameField = await $(this.firstNameField);
        await firstNameField.waitForDisplayed();
        await firstNameField.setValue(firstName);
        const lastNameField = await $(this.lastNameField);
        await lastNameField.setValue(lastName);
        const companyField = await $(this.companyField);
        await companyField.setValue(company);
    },
    clickCreateAccountButton: async function () {
        const createAccountButton = await $(this.createAccountButton);
        await createAccountButton.waitForDisplayed();
        await createAccountButton.click();
    },
    clickContinueButton: async function () {
        const continueButton = await $(this.continueButton);
        await continueButton.waitForDisplayed();
        await continueButton.click();
    },
    fillOutAddressDetails: async function (address1, address2) {
        const addressField = await $(this.addressField);
        await addressField.setValue(address1);
        const addressTwoField = await $(this.addressTwoField);
        await addressTwoField.setValue(address2);
        const countryDropDown = await $(this.countryDropDown);
        await countryDropDown.click();
        const unitedStatesOption = await $(this.unitedStatesOption);
        await unitedStatesOption.waitForDisplayed();
        await unitedStatesOption.click();
    },
    fillOutStateDetails: async function (state, city, zipcode) {
        const stateField = await $(this.stateField);
        await stateField.setValue(state);
        const cityField = await $(this.cityField);
        await cityField.setValue(city);
        const zipCodeField = await $(this.zipCodeField);
        await zipCodeField.setValue(zipcode);
    },
    fillOutMobileNumber: async function (number) {
        const mobileNumberField = await $(this.mobileNumberField);
        await mobileNumberField.setValue(number);
    }
}