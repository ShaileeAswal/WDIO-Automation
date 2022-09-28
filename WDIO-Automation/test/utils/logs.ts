import AllureReporter from "@wdio/allure-reporter";

class Logs{
    addLog(message: string) {
    AllureReporter.addStep(`TESTS: ${message}`);
    }
}

export default new Logs();