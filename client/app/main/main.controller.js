'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.awesomeAnimals = [];

    $http.get('/api/animals').then(response => {
      this.awesomeAnimals = response.data;
      socket.syncUpdates('animal', this.awesomeAnimals);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('animal');
    });
  }

  addAnimal() {
    if (this.newAnimal) {
      this.$http.post('/api/animals', { name: this.newAnimal });
      this.newAnimal = '';
    }
  }

  deleteAnimal(animal) {
    this.$http.delete('/api/animals/' + animal._id);
  }
}

angular.module('adminHatoApp')
  .controller('MainController', MainController);

})();
