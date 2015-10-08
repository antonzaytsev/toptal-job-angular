angular.module('app')
.controller('tripNewController', function($scope, $http, $location, localStorageService, appConfig) {
  $scope.trip = {};

  $scope.createTrip = function(){
    $http({
      method: 'POST',
      url: appConfig().endpoint+'/api/trips',
      headers: {
        Authorization: 'Token token="'+localStorageService.get('token')+'", email="'+localStorageService.get('email')+'"'
      },
      data: {
        trip: $scope.trip
      }
    }).then(function(response){
      $location.url('/trips');
    }, function(response){
      if (response.status == 401) {
        $location.url('/login')
      }
    });
  }
});