'use strict';

/**
 * @ngdoc function
 * @name homepageApp.controller:RootCtrl
 * @description
 * # RootCtrl
 * Holds global values and handles events like
 * route change.
 */
angular.module('homepageApp')
.controller('RootCtrl', ['$rootScope', '$location', 'Page', ($rootScope, $location, Page) => {
	$rootScope.page = Page;

	$rootScope.$on('$routeChangeSuccess', () => {
		$rootScope.activeTab = Page.header.tabs.find(element => {
			// This line is the bane of static code checks
			if (~element.href.indexOf('#' + $location.path())) return element;
		}).id;
	});
}]);
