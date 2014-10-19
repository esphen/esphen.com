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
    $timeout(() => $scope.delayDone = true, 500);

    $scope.$watch('fromTop', fromTop => {
    	console.log("fromTop:", fromTop)
    	if (fromTop >= 500) {
    		$scope.animate1 = true;
    	}
    });
}]);
