angular.module('app')
.controller('userEditController', function($scope, $http, $location, $routeParams, localStorageService, appConfig){
  $scope.user = {};

  $http({
    method: 'GET',
    url: appConfig().endpoint+'/api/users/'+$routeParams.user_id,
    headers: {
      Authorization: 'Token token="'+localStorageService.get('token')+'", email="'+localStorageService.get('email')+'"'
    }
  }).then(function(response){
    $scope.user = response.data.user;
  }, function(response) {
    if (response.status == 401) {
      $location.url('/login')
    }
  });

  $scope.updateUser = function(){
    $http({
      method: 'PATCH',
      url: appConfig().endpoint+'/api/users/'+$scope.user.id,
      headers: {
        Authorization: 'Token token="'+localStorageService.get('token')+'", email="'+localStorageService.get('email')+'"'
      },
      data: {
        user: $scope.user
      }
    }).then(function(response){
      alert('User updated!');
      if($scope.user.id == localStorageService.get('id')){
        localStorageService.set('email', $scope.user.email);
      }
      $location.url('/users');
    }, function(response){
      alert('There is a problem with user update')
    })
  }
});