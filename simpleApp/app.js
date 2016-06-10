var simpleApp =  angular.module('simpleApp', ['ngRoute', 'ngResource']);

simpleApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
        .when('/forecast', {
            templateUrl: 'views/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:numberOfDays', {
            templateUrl: 'views/forecast.html',
            controller: 'forecastController'
        })
}]);