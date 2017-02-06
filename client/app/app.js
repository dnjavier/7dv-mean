'use strict';

angular.module('adminHatoApp', [
  'adminHatoApp.auth',
  'adminHatoApp.admin',
  'adminHatoApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'datePicker',
  'toaster'
])
  .filter('startFrom', function() {
    return function (input, start) {
      start = +start;
      return input.slice(start);
    }
  })

  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/dashboard');

    $locationProvider.html5Mode(true);
  });
