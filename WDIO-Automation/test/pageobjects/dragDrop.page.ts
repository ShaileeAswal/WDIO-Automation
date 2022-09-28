//import Page from './page';

class DragDropPage {

    private get columnA() { return $('#draggable') }
    private get columnB() { return $('#droppable') }
    private get headerA() { return $('#column-a header') }
    private get headerB() { return $('#column-b header') }

public open () {
    browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html');
}

public async dragColumnA() {
    await this.columnA.waitForDisplayed({timeout:5000});
    await this.columnA.dragAndDrop(await this.columnB);
    browser.pause(10000);
    
}


}

export default new DragDropPage();