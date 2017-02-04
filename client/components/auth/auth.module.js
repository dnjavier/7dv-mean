'use strict';

angular.module('adminHatoApp.auth', [
  'adminHatoApp.constants',
  'adminHatoApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
