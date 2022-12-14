import { config as sharedConfig } from './wdio.conf';

export const config:WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        services: ['chromedriver'],
        capabilities: [{
            maxInstances: 3,
            browserName: 'chrome',
            acceptInsecureCerts: true
        }],
    }
}