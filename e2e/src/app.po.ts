import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getStartButtonText() {
    return element(by.css('.btn-success')).getText() as Promise<string>;
  }
}
