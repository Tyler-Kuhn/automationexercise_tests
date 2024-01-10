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

  //Helper Functions
  async fillAccountDetails(password) {
    await this.mrRadioButton.waitForDisplayed();
    await this.mrRadioButton.click();
    await this.signupPasswordField.setValue(password);
    await this.dobDayDropDown.click();
    await this.dayOptionTen.waitForDisplayed();
    await this.dayOptionTen.click();
    await this.dobMonthDropDown.click();
    await this.monthOptionFeb.waitForDisplayed();
    await this.monthOptionFeb.click();
    await this.dobYearDropDown.click();
    await this.yearOption1986.waitForDisplayed();
    await this.yearOption1986.click();
  }

  async selectNewsletterCheckBox() {
    await this.newsletterCheckBox.waitForDisplayed();
    await this.newsletterCheckBox.click();
  }

  async selectOptinCheckBox() {
    await this.optinCheckBox.waitForDisplayed();
    await this.optinCheckBox.click();
  }

  async fillOutPersonalDetails(firstName, lastName, company) {
    await this.firstNameField.waitForDisplayed();
    await this.firstNameField.setValue(firstName);
    await this.lastNameField.setValue(lastName);
    await this.companyField.setValue(company);
  }

  async clickCreateAccountButton() {
    await this.createAccountButton.waitForDisplayed();
    await this.createAccountButton.click();
}

    async clickContinueButton() {    
    await this.continueButton.waitForDisplayed();
    await this.continueButton.click();
}

async fillOutAddressDetails(address1, address2) {
    await this.addressField.waitForDisplayed();
    await this.addressField.setValue(address1);
    await this.addressTwoField.waitForDisplayed();
    await this.addressTwoField.setValue(address2);
    await this.countryDropDown.waitForDisplayed();
    await this.countryDropDown.click();
    await this.unitedStatesOption.waitForDisplayed();
    await this.unitedStatesOption.click();
}

async fillOutStateDetails(state, city, zipcode) {
    await this.stateField.setValue(state);
    await this.cityField.setValue(city);
    await this.zipCodeField.setValue(zipcode);
}
async fillOutMobileNumber(number) {
    await this.mobileNumberField.waitForDisplayed();
    await this.mobileNumberField.setValue(number);
}
}

module.exports = new SignupPage();
