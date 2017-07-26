
var expect = require('chai').expect;
describe('Verify the Git hub page title', function () {
    it('should display page title', function () {
        browser.url('https://in.yahoo.com/');
        var title = browser.getTitle()
        console.log(title);
        expect(title).to.contain('Yahoo');
    });
});
