const Page = require("./page");

class SignupPage extends Page {
  //Fields
  get signupPasswordField() {
    return $('input[data-qa="password"]');
  }
  get firstNameField() {
    return $('input[data-qa="first_name"]');
  }
  get lastNameField() {
    return $('input[data-qa="last_name"]');
  }
  get companyField() {
    return $('input[data-qa="company"]');
  }
  get addressField() {
    return $('input[data-qa="address"]');
  }
  get addressTwoField() {
    return $('input[data-qa="address2"]');
  }
  get stateField() {
    return $('input[data-qa="state"]');
  }
  get cityField() {
    return $('input[data-qa="city"]');
  }
  get zipCodeField() {
    return $('input[data-qa="zipcode"]');
  }
  get mobileNumberField() {
    return $('input[data-qa="mobile_number"]');
  }
  //Radio Options
  get mrRadioButton() {
    return $('input[value="Mr"]');
  }
  get mrsRadioButton() {
    return $('input[value="Mrs"]');
  }
  //DropDown Menus
  get dobDayDropDown() {
    return $('select[data-qa="days"]');
  }
  //Day Options
  get dayOptionTen() {
    return $("#days > option:nth-child(11)");
  }
  get dayOptionTwo() {
    return $("#days > option:nth-child(3)");
  }

  get dobMonthDropDown() {
    return $('select[data-qa="months"]');
  }
  //Month Options
  get monthOptionJan() {
    return $("#months > option:nth-child(2)");
  }
  get monthOptionFeb() {
    return $("#months > option:nth-child(3)");
  }

  get dobYearDropDown() {
    return $('select[data-qa="years"]');
  }
  //Year Options
  get yearOption1986() {
    return $('option[value="1986"]');
  }
  get yearOption2011() {
    return $('option[value="2011"]');
  }

  get countryDropDown() {
    return $('select[data-qa="country"]');
  }
  //Country Options
  get unitedStatesOption() {
    return $('option[value="United States"]');
  }
  //Checkboxes
  get newsletterCheckBox() {
    return $('input[id="newsletter"]');
  }
  get optinCheckBox() {
    return $('input[id="optin"]');
  }
  //Buttons
  get createAccountButton() {
    return $('button[data-qa="create-account"]');
  }
  //Account Created Page
  //Buttons
  get continueButton() {
    return $('a[data-qa="continue-button"]');
  }
}

module.exports = new SignupPage();
