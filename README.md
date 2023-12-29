# Web Automation Testing Suite

## Introduction
This project is a web automation testing suite developed in JavaScript, utilizing the Page Object Model (POM) approach for better maintainability and readability. The suite includes POM files for login, sign-up, and navigation functionalities, along with helper functions and comprehensive test cases. Using WebdriverIO and Mocha, this suite ensures effective and systematic testing of web application functionalities.

## Installation

To install and set up the testing environment, follow these steps:

1. Install Node.js on your system.
2. Clone the repository to your local machine.
3. Run `npm install` in the project directory to install all necessary dependencies.

## Usage

Execute the test suite using the following command:

`npm run wdio`

This command runs the tests defined in the suite using WebdriverIO.

### Page Object Models (POM)

- **Login Page (loginPage.js)**: Handles the representation of the login page elements and functionalities.
- **Sign-Up Page (signUpPage.js)**: Manages the elements and actions of the sign-up page.
- **Navigation Bar (navigationBar.js)**: Controls the elements and interactions within the navigation bar.

### Helper Functions

The `helper.js` file contains utility functions that support test case execution and simplify complex tasks.

### Test Cases

- **Login Tests (loginWithCorrectInfoTests.js)**: These tests validate the login process with correct user credentials.
- **Registration Tests (registerUserTests.js)**: These tests ensure the accuracy and robustness of the user registration process.

## Configuration

Customize the test execution parameters, browser settings, and other configurations in the `wdio.conf.js` file.

## Contributing

Contributions to enhance the testing suite are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Implement your changes and add tests if applicable.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under ISC. For more details, see the LICENSE file in the repository.
