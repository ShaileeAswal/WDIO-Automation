import { ChainablePromiseElement } from 'webdriverio';

import logs from '../utils/logs';

class HomePage {
  
    public get Selector () {
        return $('span=Solutions');
    }

    public get QualityAssurance () {
        return $('span=Quality Assurance');
    }

    public get heading () {
        return $('h1=Quality Assurance');
    }
     
    get child() { return $$("(//ul[contains(@class,'sub-menu')]/li[contains(@class,'fusion-dropdown-submenu')]/a/span)"); }
    get menu() {return $$('nav.fusion-main-menu span.menu-text'); }
    subMenu(index) {return $(`nav.fusion-main-menu ul.sub-menu span:nth-child(${index}`)}
  

    public async textofelements () {
        browser.pause(2000);
      //  const menu= $$('nav.fusion-main-menu span.menu-text');
         await this.menu.forEach(async element => {
          console.log(element.getText());
          //element.moveTo();
          //console.log(this.subMenu(1).getText());
       })
    }

     
  
    public async open () {
        browser.url("https://www.360logica.com/");
        
          
    }
}



export default new HomePage();
