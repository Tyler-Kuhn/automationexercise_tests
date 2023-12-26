module.exports = {
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
}