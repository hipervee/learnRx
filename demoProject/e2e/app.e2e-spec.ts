import { RxTryPage } from './app.po';

describe('rx-try App', () => {
  let page: RxTryPage;

  beforeEach(() => {
    page = new RxTryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
