'use strict';

class DashboardController {
  constructor(Auth, $state) {
    this.getCurrentUser = Auth.getCurrentUser;
    
    this.user = {};
    this.errors = {};
    this.submitted = false;

    this.Auth = Auth;
    this.$state = $state;
  }

}

angular.module('adminHatoApp')
  .controller('DashboardController', DashboardController);
