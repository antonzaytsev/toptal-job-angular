angular.module('app')
.controller('tripsController', function($scope, $http, $location, localStorageService, appConfig) {

  $scope.trips = [];

  $scope.filter = 'upcoming';
  $scope.searchTripDestination = '';

  $http({
    method: 'GET',
    url: appConfig().endpoint+'/api/trips',
    headers: {
      Authorization: 'Token token="'+localStorageService.get('token')+'", email="'+localStorageService.get('email')+'"'
    }
  }).then(function(response){
    $scope.trips = response.data;
  }, function(response){
    if (response.status == 401) {
      $location.url('/login')
    }
  });

  $scope.deleteTrip = function(trip_id){
    $http({
      method: 'DELETE',
      url: appConfig().endpoint+'/api/trips/'+trip_id,
      headers: {
        Authorization: 'Token token="'+localStorageService.get('token')+'", email="'+localStorageService.get('email')+'"'
      }
    }).then(function(response){
      el = _.find($scope.trips, function(el){return el.id == trip_id;});
      index = _.indexOf($scope.trips, el);
      $scope.trips.splice(index, 1);

      alert('trip deleted!')
    }, function(response){
      if (response.status == 401) {
        $location.url('/login')
      }
    });
  }

  $scope.tripsFilter = function(value, index, array){
    if ($scope.filter == 'upcoming') {
      return new Date <= new Date(value.start_date);
    }
    else if ($scope.filter == 'past') {
      return new Date > new Date(value.start_date)
    }
    else if ($scope.filter == 'next_month') {
      var future = new Date();
      future.setDate(future.getDate() + 30);
      var date = new Date(value.start_date);
      return new Date() <= date && future >= date
    }
    else {
      return true
    }
  };

  $scope.setFilter = function(f) {
    $scope.filter = f;
  }

});