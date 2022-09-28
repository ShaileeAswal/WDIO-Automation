import HomePage from  '../pageobjects/home.page';



describe('My Home Page', () => {
    it('Should open the page', async () => {
        await HomePage.open();
       // await HomePage.textofelements();     
        
    });

    it('Should open the sub menu items', async () => {
         await HomePage.textofelements();     
      
  });
});


