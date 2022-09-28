import alertPage from '../pageobjects/alert.page';



describe('My Alert Page', () => {
    it('JS Alert', async () => {
        await alertPage.open();
        await alertPage.verifyHeading();
        await alertPage.clickJsAlert();
        await browser.acceptAlert();
        await alertPage.verifyResult('You successfully clicked an alert');

    })

    it('Confirm Button-OK', async () => {
        await alertPage.open();
        await alertPage.verifyHeading();
        await alertPage.clickConfirmButton();
        await browser.acceptAlert();
        await alertPage.verifyResult('You clicked: Ok');

    })

    it('Confirm Button-Cancel', async () => {
        await alertPage.open();
        await alertPage.verifyHeading();
        await alertPage.clickConfirmButton();
        await browser.dismissAlert();
        await alertPage.verifyResult('You clicked: Cancel');

    })

    it('Prompt Button', async () => {

        const alertText='Prompt Text';
        await alertPage.open();
        await alertPage.verifyHeading();
        await alertPage.clickPromptButton();
        await browser.sendAlertText(alertText);
        await browser.acceptAlert();
        await alertPage.verifyResult('You entered: '+alertText);

    })

    it('Three Button', async () => {

        await alertPage.open();
        await alertPage.verifyThreeButtonIsDisplaying();
        
    })
})