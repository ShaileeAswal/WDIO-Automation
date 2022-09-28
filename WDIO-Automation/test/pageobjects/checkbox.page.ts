import Page from './page';

class CheckboxPage extends Page {

public open () {
    return super.open('checkboxes');
}

}

export default new CheckboxPage();