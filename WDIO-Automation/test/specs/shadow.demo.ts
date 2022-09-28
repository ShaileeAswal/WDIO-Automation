import shadowPage from '../pageobjects/shadow.page';

describe('My Shadow Page', () => {
    
    it('Shadow Text', async () => {
        await shadowPage.open();
        await shadowPage.shadowText();
        
    })

})