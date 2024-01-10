module.exports = class Page {
  open(path) {
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
};
