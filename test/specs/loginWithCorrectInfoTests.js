
const helper = require("../../pages/helper.js");
const login = require("../../pages/loginPage.js");
const nav = require("../../pages/navigationBar.js");

const password = "TestPass1!";
const userName = "Tim";
const lName = "Dot";
const company = "Tim's Place";
const address = "102 Big John Ln.";
const addressTwo = "Apt. B";
const day = "10";
const month = "August";
const year = "1987";
const country = "United States";
const state = "New York";
const city = "New York";
const zip = "10001";
const phone = "5555555555";
const title = "Mr"
let userEmail;

if (browser.capabilities.browserName === "chrome") {
  userEmail = "timtestchrome@gmail.com";
} else if (browser.capabilities.browserName === "firefox") {
  userEmail = "timtestfire@gmail.com";
} else {
  userEmail = "timtestapi@gmail.com";
}

describe("Test Case 2: Login With Correct Info", () => {
  //Account creation
  before(async () => {
    try {
      const response = await axios.post('https://automationexercise.com/api/createAccount', {
        name: userName,
        email: userEmail, 
        password: password, 
        title: title,
        birth_date: day,
        birth_month: month, 
        birth_year: year, 
        firstname: userName, 
        lastname: lName, 
        company: company, 
        address1: address, 
        address2: addressTwo, 
        country: country, 
        zipcode: zip, 
        state: state, 
        city: city, 
        mobile_number: phone
      });

      if (response.status === 200) {
        console.log('Account created successfully');
      } else {
        console.log('Failed to create account');
      }
    } catch (error) {
      console.error('Error creating account:', error);
    }
  });

  beforeEach(async () =>{
    browser.url("/");
  });
  //Clean Up
  after(async () => {
    try {
      const response = await axios.delete('https://automationexercise.com/api/deleteAccount', {
        email: userEmail,
        password: password
      });
  
      if (response.status === 200) {
        console.log('Account deleted successfully');
      } else {
        console.log('Failed to delete account');
      }
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  });

  //Tests
  it("Should Open the homepage", async () => {
    const homepageTitle = await browser.getTitle();
    const expectedTitle = "Automation Exercise";
    await expect(homepageTitle).toBe(expectedTitle);
  });
  it("Should move to the Login page", async () => {
    await helper.clickSignupLoginButton();
    const banner = await helper.getH2ElementByText("Login to your account");
    await banner.waitForDisplayed();
    await expect(banner).toBeExisting();
  });
  it("Should Fill out login fields", async () => {
    await helper.clickSignupLoginButton();
    const loginEmailField = await $(login.loginEmailField);
    await loginEmailField.waitForDisplayed();
    await loginEmailField.setValue(userEmail);
    const actualEmail = await loginEmailField.getValue();
    const loginPasswordField = await $(login.loginPasswordField);
    await loginPasswordField.waitForDisplayed();
    await loginPasswordField.setValue(password);
    const actualPassword = await loginPasswordField.getValue();
    const expectedEmail = userEmail;
    const expectedPassword = password;
    await expect(actualEmail).toBe(expectedEmail);
    await expect(actualPassword).toBe(expectedPassword);
  });
});
