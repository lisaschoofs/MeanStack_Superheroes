var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/entry', {
      templateUrl: '/views/templates/entry.html',
      controller: 'EntryController',
    })
    .when('/registry', {
      templateUrl: '/views/templates/listings.html',
      controller: 'ListingsController',
    })
    .otherwise({
      redirectTo: 'entry'
    });
}]);
