const Page = require("./page");

class AdsPage extends Page {
  get closeAdButton() {
    return $("#dismiss-button");
  }
  get adModel() {
    return $("#aswift_1");
  }

  async checkAndCloseAd() {
    // Check if ad is displayed
    if (await this.adModel.isDisplayed()) {
      // If there's a close button, click it
      if (await this.closeAdButton.isDisplayed()) {
        await this.closeAdButton.click();
      } else {
        // If there's no close button, wait for the ad to disappear
        await browser.pause(10000); // Adjust the time as necessary
      }
    }
  }
}

modules.export = new AdsPage();
