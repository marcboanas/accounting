var app = angular.module('myapp', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  $scope.items = [{name: "One"}];
  setTimeout(function() {
    $scope.$apply(function() {
     $scope.items[0].lateLoader = 'i just loaded';
    });


  }, 10000);
});
