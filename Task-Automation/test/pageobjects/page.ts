/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
import AllureReporter from "@wdio/allure-reporter"
import logs from "../utils/logs"

export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open () {
        browser.url("https://www.360logica.com/");
        logs.addLog("Navigated to the URL");
    }
}
