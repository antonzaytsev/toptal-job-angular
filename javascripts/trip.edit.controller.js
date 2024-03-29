angular.module('app')
.controller('tripEditController', function($scope, $http, $location, $routeParams, localStorageService, appConfig) {
  $scope.trip = {};

  $http({
    method: 'GET',
    url: appConfig().endpoint+'/api/trips/'+$routeParams.trip_id,
    headers: {
      Authorization: 'Token token="'+localStorageService.get('token')+'", email="'+localStorageService.get('email')+'"'
    }
  }).then(function(response){
    $scope.trip = response.data.trip
  });

  $scope.updateTrip = function(){
    $http({
      method: 'PATCH',
      url: appConfig().endpoint+'/api/trips/'+$scope.trip.id,
      headers: {
        Authorization: 'Token token="'+localStorageService.get('token')+'", email="'+localStorageService.get('email')+'"'
      },
      data: {
        trip: $scope.trip
      }
    }).then(function(response){
      $location.url('/trips');
      //$scope.todos = res.data;
    }, function(response){
      if (response.status == 401) {
        $location.url('/login')
      }
    });
  }
});