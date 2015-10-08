angular.module('app')
.factory("User", function($resource) {
  return $resource("/api/users/:id");
});