var routingApp = angular.module('routingApp', ['ngRoute']);


routingApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'routingMainController'
        })
        .when('/asd',{
            templateUrl: 'views/asd.html',
            controller: 'asdStubController'
        })
        .when('/dupa/:val',{
            templateUrl: 'views/dupa.html',
            controller: 'dupaStubController'
        });
}]);
routingApp.controller('routingMainController', ['$scope', '$log', '$location',
    function ($scope, $log, $location) {
        console.log('HOME');
        window.addEventListener('hashchange', function () {
            $log.log($location.path());
            // $scope.$apply(function(){
            // })
        });

    }]);

routingApp.controller('asdStubController', ['$scope', '$log', '$location',
    function($scope, $log, $location){
        $scope.test = 'testowy string sobie';
        console.log('asd!')
    }]);

routingApp.controller('dupaStubController', ['$scope', '$log', '$location', '$routeParams',
    function($scope, $log, $location, $routeParams){
        console.log('dupa!')
        $scope.param = $routeParams.val;
    }]);