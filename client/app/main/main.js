'use strict';

angular.module('adminHatoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/login',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  });
