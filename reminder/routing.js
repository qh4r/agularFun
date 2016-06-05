var routingApp = angular.module('routingApp', ['ngRoute']);

routingApp.service('testService', function () {
    this.testText = 'testowa wartość';
    this.getLength = function () {
        return this.testText.length;
    }.bind(this);
});

routingApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'routingMainController'
        })
        .when('/asd', {
            templateUrl: 'views/asd.html',
            controller: 'asdStubController'
        })
        .when('/dupa/:val', {
            templateUrl: 'views/dupa.html',
            controller: 'dupaStubController'
        });
}]);
routingApp.controller('routingMainController', ['$scope', '$log', '$location', 'testService',
    function ($scope, $log, $location, testService) {
        console.log('HOME');
        window.addEventListener('hashchange', function () {
            $log.log($location.path());
            // $scope.$apply(function(){
            // })
        });
        //SERWIS TO SINGELTON WIEC REFERUJE TEN SAM OBIEKT WE WSZYSTKICH KONTROLERACH
        $scope.changeValue = function() {
            testService.testText = 'inna wartość';
            $scope.testText = testService.getLength();
        };
        $scope.testText = testService.getLength();

    }]);

routingApp.controller('asdStubController', ['$scope', '$log', '$location' ,'testService',
    function ($scope, $log, $location, testService) {
        $scope.test = 'testowy string sobie';
        console.log('asd!');
        $scope.testText = testService.testText;
    }]);

routingApp.controller('dupaStubController', ['$scope', '$log', '$location', '$routeParams', 'testService',
    function ($scope, $log, $location, $routeParams, testService) {
        console.log('dupa!');
        $scope.param = $routeParams.val;
        $scope.testBinding = testService.testText;

        $scope.$watch('testBinding', function(newValue){
           testService.testText = newValue;
        });
    }]);