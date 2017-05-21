import { Chriscarmel.Github.IoPage } from './app.po';

describe('chriscarmel.github.io App', () => {
  let page: Chriscarmel.Github.IoPage;

  beforeEach(() => {
    page = new Chriscarmel.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
