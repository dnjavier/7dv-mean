'use strict';

class AnimalController {
  constructor($http, toaster, $state, $stateParams, Operations) {
    this.$http = $http;
    this.toaster = toaster;
    this.$state = $state;

    this.isEditing = false;
    this.idAnimal = $stateParams.idAnimal;
    if(this.idAnimal){
      this.isEditing = true;

      $http.get('/api/animals/' + this.idAnimal ).then(response => {
        this.animal = response.data;

        var d = new Date(this.animal.age);
        var age = Operations.getAge(d);
        this.animal.months = age.ageString;
      });
    } else {
      this.animal = {
        gender: 'macho',
        breed: 'brahman',
        farm: 'T.D.',
        age: this.dt,
        favorite: false,
        defective: false
      };
    }

    this.errorMessage = '';
    this.dt = new Date();    
    
    this.dateOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };
    this.popup1 = {
      opened: false
    };

  }

  open1() {
    this.popup1.opened = true;
  };

  addAnimal(form) {
    this.submitted = true;
    this.errorMessage = '';
    var that = this;
    
    if (this.animal.numberId && !this.isEditing) {
      this.$http.get('/api/animals/numberId/' + this.animal.numberId).then(response => {
        this.errorMessage = 'Error, el número de cada animal debe ser único.';
      }, error => {
        if(!this.animal.father
          && !this.animal.mother){
          createAnimal();
        }
      })

      .then(response => {
        if(this.errorMessage == ''){

          this.$http.get('/api/animals/numberId/' + this.animal.father).then(response => {
            if(response.data.gender == 'macho'){
              if(!this.animal.mother) {
                createAnimal();
              }

              this.$http.get('/api/animals/numberId/' + this.animal.mother).then(response => {
                if(response.data.gender == 'hembra'){
                  createAnimal();

                } else {
                  this.errorMessage = 'Error, el número de la Madre pertenece a un macho.';
                }
              }, error => {
                this.errorMessage = 'Error, el número de la Madre no existe.';
              });
            } else {
              this.errorMessage = 'Error, el número del Padre pertenece a una hembra.';
            }
          }, error => {
            this.errorMessage = 'Error, el número del Padre no existe.';
          });
        }
      });

    }
    else if(this.animal.numberId && this.isEditing) {
      updateAnimal(this.animal);
    }
    else {
      this.errorMessage = 'Por favor complete los datos correctamente.'     
    }

    function createAnimal() {
      that.$http.post('/api/animals', that.animal);
      that.toaster.pop('info', "Nuevo animal", "La información ha sido agregada correctamente");
      that.animal = {};
      that.$state.go('dashboard.animals');
    }

    function updateAnimal(animal) {
      that.$http.put('/api/animals/'+ animal._id, animal);
      that.toaster.pop('info', "Animal Actualizado", "La información ha sido actualizada correctamente");
      that.animal = {};
      that.$state.go('dashboard.animals');
    }
  }

}

angular.module('adminHatoApp')
  .controller('AnimalController', AnimalController);
