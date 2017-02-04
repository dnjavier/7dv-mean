'use strict';

angular.module('adminHatoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/account/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dash',
        authenticate: true,
        abstract: true
      });
  });
