angular.module('app')
.controller('userNewController', function($scope, $http, $location, localStorageService, appConfig) {

  $scope.email = '';
  $scope.password = '';

  $scope.registerProcess = function(){
    $http.post(appConfig().endpoint+'/api/users', {
      'user': {
        email: $scope.email,
        password: $scope.password
      }
    }).then(function(response) {
      user = response.data.user;
      localStorageService.set('email', user.email);
      localStorageService.set('token', user.token);
      localStorageService.set('role', user.role);
      $location.path('/trips')
    }, function(response){
      alert('Email or password are incorrect')
    })
  }

});