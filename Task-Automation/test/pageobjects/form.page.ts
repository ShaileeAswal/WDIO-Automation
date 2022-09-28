
import logs from '../utils/logs';
import Page from './page';

class FormPage extends Page{

    public get toggle () {
        return $("//a[@title='Toggle Sliding Bar']");
    }

    public get heading() {
        return $('h4=Get Social');
    }

    public get name () {
        return $('#name');
    }

    public get emailAddress () {
        return $('#email_address');
    }

    public get phone () {
        return $('#phone');
    }

    public get website () {
        return $('#website');
    }

    public get message () {
        return $('#message');
    }

    public open () {
        return super.open();
    }

    public async fillform () {
       
        await this.toggle.click();
        expect(  await this.heading.isDisplayed()).toBe(true);
        logs.addLog("Header is Displaying");
        await this.name.setValue('DemoTest');
        await this.emailAddress.setValue('DemoTest@gmail.com');
        await this.phone.setValue('8898767654');
        await this.website.setValue('www.DemoTest.com');
        await this.message.setValue('DemoTest Testing');
    }
}

export default new FormPage();