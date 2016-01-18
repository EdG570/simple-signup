var app = angular.module('myApp', []);

app.directive('optIn', function() {
  return {
    templateUrl: 'signup.html',
    restrict: 'AE',
    transclude: true,
    replace: true
  };
});