import { isAssertClause } from 'typescript';
import dragDropPage from '../pageobjects/dragDrop.page';



describe('My Drag and Drop Page', () => {

    it('Drag And drop to other element', async () => {
        await dragDropPage.open();
        await dragDropPage.dragColumnA();
        
    })
})