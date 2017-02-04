'use strict';

angular.module('adminHatoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard.seeAnimal', {
        url: '/seeAnimal/:idAnimal',
        templateUrl: 'app/account/dashboard/seeAnimal/seeAnimal.html',
        controller: 'SeeAnimalController',
        controllerAs: 'seeAnimal',
        authenticate: true
      });
  });
