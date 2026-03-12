import { browser, element, by } from 'protractor';

export class AngularPortalAzureV2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('apa-root h1')).getText();
  }
}
