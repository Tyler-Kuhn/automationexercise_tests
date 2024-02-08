const Page = require("./page");

class AdsPage extends Page {
  get closeIframeButton() {
    return $("#dismiss-button");
  }
  get iframe() {
    return $("#aswift_4");
  }

  async checkAndCloseAd() {
    const maxWaitTime = 15000; // Maximum time to wait for the ad (e.g., 10 seconds)
    const checkInterval = 5000; // Time interval for each check (e.g., 500 milliseconds)

    let elapsedTime = 0;
    while (elapsedTime < maxWaitTime) {
        const isIframeDisplayed = await this.iframe.isDisplayed();

        if (isIframeDisplayed) {
            await browser.switchToFrame(this.iframe);
            const isCloseButtonDisplayed = await this.closeIframeButton.isDisplayed();

            if (isCloseButtonDisplayed) {
                await this.closeIframeButton.click();
            }
            await browser.switchToParentFrame();
            break; // Ad found and handled, exit the loop
        }

        await browser.pause(checkInterval); // Wait for the next check
        elapsedTime += checkInterval;
    }
    // If the ad doesn't appear within the maximum wait time, the loop ends, and the test continues
}

async checkAndCloseAdWhileInteracting() {
  // Assume this function is called while other test actions are being performed
  if (await this.iframe.isDisplayed()) {
      await browser.switchToFrame(this.iframe);
      if (await this.closeIframeButton.isDisplayed()) {
          await this.closeIframeButton.click();
      }
      await browser.switchToParentFrame();
  }
}
}

module.exports = new AdsPage();
