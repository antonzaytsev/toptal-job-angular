angular.module('app')
.controller('usersController', function($scope, $http, $location, localStorageService, appConfig){

  $scope.users = [];

  $http({
    method: 'GET',
    url: appConfig().endpoint+'/api/users',
    headers: {
      Authorization: 'Token token="'+localStorageService.get('token')+'", email="'+localStorageService.get('email')+'"'
    }
  }).then(function(response){
    $scope.users = response.data;
  }, function(response){
    if (response.status == 401) {
      $location.url('/login')
    }
  });

  $scope.deleteUser = function(user_id) {
    $http({
      method: 'DELETE',
      url: appConfig().endpoint+'/api/users/'+user_id,
      headers: {
        Authorization: 'Token token="'+localStorageService.get('token')+'", email="'+localStorageService.get('email')+'"'
      }
    }).then(function(response){
      el = _.find($scope.users, function(el){return el.id == user_id;});
      index = _.indexOf($scope.users, el);
      $scope.users.splice(index, 1);

      alert('User deleted!')
    }, function(response){
      if (response.status == 401) {
        $location.url('/login')
      }

      console.log(arguments);
    });
  }

});