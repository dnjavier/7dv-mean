'use strict';

angular.module('adminHatoApp')
  .factory('Operations', function() {

    // Public API here
    return {

      getAge(birthDate) {
        var now = new Date();
        var today = new Date(now.getYear(),now.getMonth(),now.getDate());

        var yearNow = now.getYear();
        var monthNow = now.getMonth();
        var dateNow = now.getDate();

        var yearDob = birthDate.getYear();
        var monthDob = birthDate.getMonth();
        var dateDob = birthDate.getDate();
        var age = {};
        var ageString = "";
        var yearString = "";
        var monthString = "";
        var dayString = "";


        var yearAge = yearNow - yearDob;

        if (monthNow >= monthDob)
          var monthAge = monthNow - monthDob;
        else {
          yearAge--;
          var monthAge = 12 + monthNow -monthDob;
        }

        if (dateNow >= dateDob)
          var dateAge = dateNow - dateDob;
        else {
          monthAge--;
          var dateAge = 31 + dateNow - dateDob;

          if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
          }
        }

        age = {
          years: yearAge,
          months: monthAge,
          days: dateAge
        };

        var totalMonths = age.years * 12 + age.months;

        if ( age.years > 1 ) yearString = " años";
        else yearString = " año";
        if ( age.months> 1 ) monthString = " meses";
        else monthString = " mes";
        if ( age.days > 1 ) dayString = " días";
        else dayString = " día";


        if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
          ageString = age.years + yearString + ", " + age.months + monthString + ", y " + age.days + dayString;
        else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
          ageString = age.days + dayString;
        else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
          ageString = age.years + yearString;
        else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
          ageString = age.years + yearString + " y " + age.months + monthString;
        else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
          ageString = age.months + monthString + " y " + age.days + dayString;
        else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
          ageString = age.years + yearString + " y " + age.days + dayString;
        else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
          ageString = age.months + monthString;
        else ageString = "Menos de 1 día";

        return {
          ageString,
          totalMonths
        };
      },

      formatDate(date){
        var monthNames = [
          "Enero", "Febrero", "Marzo",
          "Abril", "Mayo", "Junio", "Julio",
          "Agosto", "Setiembre", "Octubre",
          "Noviembre", "Diciembre"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      }

    };
  });
