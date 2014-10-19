'use strict';

/**
 * @ngdoc directive
 * @name homepageApp.directive:scrollPosition
 * @description
 * # scrollPosition
 * Binds the scrollPosition variable of how far the window has scrolled
 */
angular.module('homepageApp')
.directive('scrollPosition', ['$window', $window => {
 	return {
 		restrict: 'A',
 		scope: {
 			scroll: '=scrollPosition'
 		},
 		link: (scope, element) => {
 			var windowEl = angular.element($window);
			var handler = () => {
			  scope.scroll = windowEl.scrollTop();
			}
			windowEl.on('scroll', scope.$apply.bind(scope, handler));
			handler();
 		}
 	};
}]);
