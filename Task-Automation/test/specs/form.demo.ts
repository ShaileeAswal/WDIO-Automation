import formPage from "../pageobjects/form.page";

describe('My Form Page', () => {
    it('Should fill in the form', async () => {
        await formPage.open();
        await formPage.fillform();
    });
});
