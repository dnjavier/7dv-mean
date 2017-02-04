'use strict';

angular.module('adminHatoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard.animal', {
        url: '/animal/:idAnimal',
        templateUrl: 'app/account/dashboard/animal/animal.html',
        controller: 'AnimalController',
        controllerAs: 'animal',
        authenticate: true
      });
  });
