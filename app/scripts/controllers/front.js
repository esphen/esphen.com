'use strict';

/**
 * @ngdoc function
 * @name homepageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the homepageApp
 */
angular.module('homepageApp')
.controller('FrontCtrl', ['$scope', '$timeout', ($scope, $timeout) => {
    $timeout(() => { $scope.delayDone = true; }, 500);
}]);
