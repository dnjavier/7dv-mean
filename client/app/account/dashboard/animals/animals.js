'use strict';

angular.module('adminHatoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard.animals', {
        url: '',
        templateUrl: 'app/account/dashboard/animals/animals.html',
        controller: 'AnimalsController',
        controllerAs: 'animals',
        authenticate: true
      });
  });
