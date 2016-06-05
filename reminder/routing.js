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

routingApp.directive('testCustomDirective', function(){

    return {
        restrict: 'AECM', //ELEMENT lub ATTRIBUTE CLASSNAME M=(KOMENTARZ) - tylko dla podanych bedzie wykrywana jako dyrektywa
        // template: '<a href="#/dupa/1" class="list-group-item"><h4 class="list-group-item-heading">Rafał</h4>' +
        // '<p class="list-group-item-text">test test</p></a>',
        templateUrl: 'templates/testCustomDirective.html',
        replace: true, //REPLACE SPRAWIA  Z DOM ZNIKA TAG (KONTENER) Z NAZWA DYREKTYWY
        scope: { //IZOLACJA ZAKRESU -- NADPISUJE ZAKRES KONTROLERA
            personName: '@', //@ oznacza BINDING JEDNOSTRONNY - do dyrektywy
            personDescription: '@',
            personId: '@'
        }
    }
});

//NIE NADPISUJE SCOPE WIEC KORZYSTA ZE SCOPE CONTROLERA
routingApp.directive('forShowDirective', function(){
   return {
       restrict: 'E',
       templateUrl: 'templates/forShowDirective.html',
       replace: true
   }
});

routingApp.directive('cleanForShowDirective', function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/cleanForShowDirective.html',
        replace: true,
        scope: {
            cityObject: '=', // = -- oznacza obiekt -- TO 2 STRONNY BINDING
            cityFunction: '&' // & -- oznacza funkcje
        }
    }
});

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

        $scope.people = [
            {id: 11, name: 'Rafał', description: 'Przystojny błyskotliwy wygadany'},
            {id: 22, name: 'Kamil', description: 'Może być ale maruda'},
            {id: 33, name: 'Szymon', description: 'Troche gbór'},
            {id: 44, name: 'Asia', description: 'Słodka ale w sumie też maruda'},
            //z kim ja sie zadaje
        ]

    }]);

routingApp.controller('asdStubController', ['$scope', '$log', '$location' ,'testService',
    function ($scope, $log, $location, testService) {
        $scope.test = 'testowy string sobie';
        console.log('asd!');
        $scope.testText = testService.testText;

        $scope.cities = [
            {name: 'Czikago', population: 12000000},
            {name: 'Ditroit', population: 2410000},
            {name: 'Miszigan', population: 592800},
            {name: 'Palo alto', population: 3344002},
            {name: 'Gliwice', population: 160000},
        ];

        $scope.getCity = function(city) {
            return (function(result){
                console.log(result);
                return result;
            })(city.name + ' == > ' + city.population);
        }

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

