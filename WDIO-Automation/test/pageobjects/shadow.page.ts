import Page from './page';

class ShadowPage extends Page {

    
    public open () {
        return super.open('shadowdom');
    }

    public async shadowText() {
      //console.log(await this.shadowEl.getText());
      const text2= await $('>>>span[slot="my-text"]:not([hidden])');
      console.log(await text2.getText()); 
        
    }
}

export default new ShadowPage();