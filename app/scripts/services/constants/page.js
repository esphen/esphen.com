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
      front: {
        introduction: {
          text: 'My name is Espen, and I\'m a web developer. I\'ve been doing tons of exciting projects during the last few years, most of which revolving around AngularJS, Java and jQuery. The privilige of great responsibility has given me a highly varied skillset, something which is a great asset to all my work. I love both the back- and front-end of development, but I\'ve chosen to specialize in javascript. Feel free to have a look around my site if you wish to get to know me better!',
          imgsrc: 'images/sublime.png'
        }
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
