describe('Homepage', () => {
  beforeEach(() => {
    browser.get('/');
  })

  it('fills out free text search box', () => {
    let terms = 'I am a bot and I am awesome';
    element(by.id('terms')).sendKeys(terms);

    expect(element(by.id('terms')).getText()).to.eventually.equal(terms);
    //expect(element(by.id('tag-terms')).getText()).to.eventually.equal(terms);
  })
});
