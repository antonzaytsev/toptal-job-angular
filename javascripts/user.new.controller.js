angular.module('app')
.controller('userNewController', function($scope, $http, $location, localStorageService, appConfig) {

  $scope.user = {};

  $scope.registerProcess = function(){
    $http.post(appConfig().endpoint+'/api/users', {
      user: $scope.user
    }).then(function(response) {
      user = response.data.user;
      localStorageService.set('id', user.id);
      localStorageService.set('email', user.email);
      localStorageService.set('token', user.token);
      localStorageService.set('role', user.role);
      $location.path('/trips')
    }, function(response){
      alert('Email or password are incorrect')
    })
  }

});