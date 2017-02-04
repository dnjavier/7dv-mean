'use strict';

class SeeAnimalController {
  constructor($http, $stateParams, Operations, Auth, toaster, $state) {
    this.$http = $http;
    this.toaster = toaster;
    this.$state = $state;
    this.commentDescription = '';

    this.getCurrentUser = Auth.getCurrentUser;

    this.idAnimal = $stateParams.idAnimal;
    this.animal = {};

    $http.get('/api/animals/' + this.idAnimal ).then(response => {
      this.animal = response.data;

      var d = new Date(this.animal.age);
      var age = Operations.getAge(d);
      this.animal.months = age.ageString;
      
      for (var i = this.animal.comments.length - 1; i >= 0; i--) {
        var timestamp = this.animal.comments[i]._id.toString().substring(0,8);
        var date = new Date( parseInt( timestamp, 16 ) * 1000 );
        date = Operations.formatDate(date);
        this.animal.comments[i].date = date;
      }
    });

  }

  addComment(description){
    if(description){
      var comment = {
        _author: this.getCurrentUser(),
        description: description
      }

      this.$http.post('/api/comments', comment).then(response => {
        if(response.status = 201){
          this.commentDescription = '';

          //Update animal
          this.animal.comments.push(response.data);
          this.$http.put('/api/animals/'+ this.idAnimal, this.animal);
        }
      });
    }    
  }

}

angular.module('adminHatoApp')
  .controller('SeeAnimalController', SeeAnimalController);
