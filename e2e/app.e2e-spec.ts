import { DirListPage } from './app.po';

describe('dir-list App', () => {
  let page: DirListPage;

  beforeEach(() => {
    page = new DirListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
