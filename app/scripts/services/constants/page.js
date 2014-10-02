'use strict';

/**
 * @ngdoc service
 * @name homepageApp.page
 * @description
 * # page
 * Constant that holds all static values of the app.
 */
angular.module('homepageApp')
.constant('Page',
  	{
  		header: {
  			tabs: [
  				{
  					id: 'front',
  					name: 'Hjem',
  					href: '#/'
  				},
  				{
  					id: 'about',
  					name: 'Om meg',
  					href: '#/about'
  				},
  				{
  					id: 'portfolio',
  					name: 'Portefølje',
  					href: '#/portfolio'
  				}
  			]
  		},
  		thingsIKnow: [
  			{
  				altText: 'AngularJS',
  				src: 'angular-js.png',
  				text: '+ denne siden er skrevet i ES6 med polyfills for eldre browsers'
  			},
  			{
  				altText: 'Fleksibel',
  				src: '',
  				text: 'Front- og Backend'
  			},
  			{
  				altText: 'Bootstrap',
  				src: 'bootstrap-logo.png',
  				text: ''
  			},
  		]
  	}
);
