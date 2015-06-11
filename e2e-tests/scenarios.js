'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /user when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/user");
  });


  describe('user', function() {

    beforeEach(function() {
      browser.get('index.html#/user');
    });


    it('should render user when user navigates to /user', function() {
      expect(element.all(by.css('[ng-requested] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('amazon', function() {

    beforeEach(function() {
      browser.get('index.html#/amazon');
    });


    it('should render amazon when user navigates to /amazon', function() {
      expect(element.all(by.css('[ng-requested] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
