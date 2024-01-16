module.exports = class Page {
  //Open Browser
  open () {
    return browser.url("/");
  }

  //Navigation Buttons
  get homeButton() {
    return $('a[href="/"]');
  }
  get signupLoginButton() {
    return $('a[href="/login"]');
  }
  get deleteAccountButton() {
    return $('a[href="/delete_account"]');
  }
  get logoutButton() {
    return $('a[href="/logout"]');
  }
  get accountLoggedIn() {
    return $(
      "#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a > b"
    );
  }
  //Helper Functions
  async getH2ElementByText(obj) {
    return await $(`h2=${obj.toString()}`);
  }

  async getBElementByText(obj) {
    return await $(`b=${obj.toString()}`);
  }

  async clickHomeButton() {
    await this.homeButton.waitForDisplayed();
    await this.homeButton.click();
  }
  async clickLogout() {
    await this.logoutButton.waitForDisplayed();
    await this.logoutButton.click();
  }
  async clickSignupLoginButton() {
    await this.signupLoginButton.waitForDisplayed();
    await this.signupLoginButton.click();
  }

  async deleteAccount() {
    await this.deleteAccountButton.waitForDisplayed();
    await this.deleteAccountButton.click();
}
};
