(function(angular, undefined) {
  angular.module("adminHatoApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);