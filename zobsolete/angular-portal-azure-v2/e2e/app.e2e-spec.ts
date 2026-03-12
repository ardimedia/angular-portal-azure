import { AngularPortalAzureV2Page } from './app.po';

describe('angular-portal-azure-v2 App', () => {
  let page: AngularPortalAzureV2Page;

  beforeEach(() => {
    page = new AngularPortalAzureV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('apa works!');
  });
});
