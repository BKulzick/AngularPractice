import { BKAzureWebAppPage } from './app.po';

describe('bkazure-web-app App', function() {
  let page: BKAzureWebAppPage;

  beforeEach(() => {
    page = new BKAzureWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
