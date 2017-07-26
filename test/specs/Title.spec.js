//Yahoo Page title Test
var expect = require('chai').expect;
describe('Verify the Yahoo page title', function () {
    it('should display page title', function () {
        browser.url('https://in.yahoo.com/');
        var title = browser.getTitle()
        console.log(title);
        expect(title).to.contain('Yahoo');
    });
});
