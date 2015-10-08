angular.module('app')
.factory("Trip", function($resource) {
  return $resource("/api/trips/:id");
});