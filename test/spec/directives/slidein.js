'use strict';

describe('Directive: slideIn', function () {

  // load the directive's module
  beforeEach(module('homepageApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<slide-in></slide-in>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the slideIn directive');
  }));
});
