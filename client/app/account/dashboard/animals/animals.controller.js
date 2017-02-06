'use strict';

class AnimalsController {
  constructor($http, socket, Operations) {
    this.$http = $http;
    this.showSlider = false;
    this.favAnimals = [];
    this.defAnimals = [];
    this.allAnimals = [];

    //Pagination
    this.currentPage = 0;
    this.pageSize = 10;

    this.inactiveSubject = false;
    
    $http.get('/api/animals').then(response => {
      this.allAnimals = response.data;
      socket.syncUpdates('animal', this.allAnimals);

      var favs = this.favAnimals;
      var defs = this.defAnimals;
      this.allAnimals.forEach(function(element) {
        var d = new Date(element.age);
        var age = Operations.getAge(d);
        element.months = age.ageString;
        element.type = animalType(age.totalMonths);

        if(element.favorite == true) {
          favs.push(element);
        }
        if(element.defective == true) {
          defs.push(element);
        }

      });

      function animalType(totalMonths, gender) {
        var type = 'ternero';

        if(totalMonths > 8 && gender == 'macho') {
          type = 'novillo'
        }
        if(totalMonths > 8 && gender == 'hembra') {
          type = 'vaca'
        }
        if(totalMonths > 24 && gender == 'macho') {
          type = 'toro'
        }

        return type;
      }
    })
    .finally(res => {
      if(this.defAnimals.length || this.favAnimals){
        this.showSlider = true;
      }
      
    });

  }

  toggleSubject(subParam){
    this.inactiveSubject = subParam;
  }

  numberOfPages() {
    return Math.ceil(this.allAnimals.length/this.pageSize); 
  }

}

angular.module('adminHatoApp')
  .controller('AnimalsController', AnimalsController);
