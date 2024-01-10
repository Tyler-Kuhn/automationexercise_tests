const Page = require("./page");

class LoginPage extends Page {
  get signupNameField() {
    return $('input[data-qa="signup-name"]');
  } //Works for Signup Page aswell
  get signupEmailField() {
    return $('input[data-qa="signup-email"]');
  } //Works for Signup Page aswell
  get loginEmailField() {
    return $('input[data-qa="login-email"]');
  }
  get loginPasswordField() {
    return $('input[data-qa="login-password"]');
  }
  //Buttons
  get signupButton() {
    return $('button[data-qa="signup-button"]');
  }
  get loginButton() {
    return $('button[data-qa="login-button"]');
  }
}

module.exports = new LoginPage();
