module.exports = {
//Homepage
    //Titles
    homepageTitle: 'head > title',
    //Nav Buttons
    signupLoginButton: 'a[href="/login"]',
    deleteAccountButton: 'a[href="/delete_account"]',
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
    }
}