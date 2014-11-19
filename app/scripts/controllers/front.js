'use strict';

/**
 * @ngdoc function
 * @name homepageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * The main controller of the front page
 */
angular.module('homepageApp')
.controller('FrontCtrl', ['$scope', '$timeout', ($scope, $timeout) => {
    $timeout(() => $scope.delayDone = true, 500);
}]);
