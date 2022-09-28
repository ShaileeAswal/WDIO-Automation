import logs from '../utils/logs';
import Page from './page';
const EC = require('wdio-wait-for');

class AlertPage extends Page {

    private get heading() { return $('h3=JavaScript Alerts') }
    private get jsAlertButton() { return $('button=Click for JS Alert') }
    private get jsConfirmButton() { return $('button=Click for JS Confirm') }
    private get jsPromptButton() { return $('button=Click for JS Prompt') }
    private get result() { return $('#result') }
    private get button() { return $$('//button')}

    public open () {
        return super.open('javascript_alerts');
    }

    public async verifyHeading() {
        await this.heading.waitForDisplayed({timeout:5000});
        expect(  await this.heading.isDisplayed()).toBe(true);
        logs.addLog("Header is Displaying");
    }

    public async clickJsAlert() {
        await this.jsAlertButton.waitForEnabled({timeout:5000});
        expect(  await this.jsAlertButton.click());
    }

    public async clickConfirmButton() {
        await this.jsConfirmButton.waitForEnabled({timeout:5000});
        expect(  await this.jsConfirmButton.click());
    }

    public async clickPromptButton() {
        await this.jsPromptButton.waitForEnabled({timeout:5000});
        expect(  await this.jsPromptButton.click());
    }

    public async verifyResult(message:String) {
     await browser.waitUntil(async()=> await this.result.getText()===message, {timeout : 3000} );
       expect(  await this.result.getText()).toEqual(message);
    }

    public async verifyThreeButtonIsDisplaying() {
        await browser.waitUntil(EC.numberOfElementsToBe(this.button, 3), {timeout : 3000});
        expect(await this.button.length).toEqual(3);
       }
    
    }
    
    export default new AlertPage();