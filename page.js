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
    dobMonthDropDown: 'select[data-qa="months"]',
    dobYearDropDown: 'select[data-qa="years"]',
    countryDropDown: 'select[data-qa="country"]',
    //Checkboxes
    newsletterCheckBox: 'input[id="newsletter"]',
    optinCheckBox: 'input[id="optin"]',
    //Buttons
    createAccountButton: 'button[data-qa="create-account"]',
//Account Created Page
    //Buttons
    continueButton: 'a[data-qa="continue-button"]',
}