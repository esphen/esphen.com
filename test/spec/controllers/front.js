'use strict';

describe('Controller: FrontCtrl', function () {

  // load the controller's module
  beforeEach(module('homepageApp'));

  var FrontCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FrontCtrl = $controller('FrontCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
