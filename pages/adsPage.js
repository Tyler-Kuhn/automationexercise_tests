const Page = require('./page');

class AdsPage extends Page {

    get closeAdButton () {return $('#dismiss-button')}
    get adModel () {return $('#aswift_1')}

    open () {
        return super.open('login');
    }
}

modules.export = new AdsPage();