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
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/dashboard');

    $locationProvider.html5Mode(true);
  });
