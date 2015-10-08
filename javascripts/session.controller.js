angular.module('app')
.controller('sessionController', function($scope, $http, $location, localStorageService, appConfig) {

  $scope.user = {};

  $scope.loginProcess = function(){
    $http({
      method: 'POST',
      url: appConfig().endpoint+'/api/sessions',
      data: {
        user: $scope.user
      }
    }).then(function(response){
      localStorageService.set('email', response.data.email);
      localStorageService.set('token', response.data.token);
      localStorageService.set('role', response.data.role);
      $location.path('/')
    },function(response){
      //ngNotify.set('Email or password are wrong')
    });
  }

});