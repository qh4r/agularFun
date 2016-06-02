var reminderApp = angular.module('reminderApp', ['ngMessages', 'ngResource']);


// tablia zamiast samej funkcji podawana jest w celu minifikacji
//Stringi nie sa minifikowane przez co angular wie ktora zmienna jest czym
reminderApp.controller('mainController', ['$scope', '$log', '$resource', '$timeout',
    function ($scope, $log, $resource, $timeout) {

        $log.info('dupa');
        $scope.dupa = 'ads';
        $scope.dupaFunction = function () {
            return 'funkcja dupa'
        }

        $timeout(function () {
            $scope.dupa = ' zmiany i heheszki';
        }, 2000)

        //return {scope: $scope};
        $scope.hehe = 'testyyyy';
    }]);

reminderApp.controller('secondController', ['$scope', '$filter', function ($scope, $filter) {
    //Scope osobny dla kazdego kontrolera
    $scope.hehe = 'hehehe'
    //inicjalizacja zmiennej uzywanej do bindingu jest niekonieczna
    //$scope.ksywka = '';
    $scope.toUpper= function(input) {
        return $filter('uppercase')(input);
        //Poniższe zadziałało by tak samo i nie wymagało by przekazywania argumentu
        //angular śledzi odświeżanie danych
        //return $filter('uppercase')($scope.ksywka);
    };

    //POWODUJE WYWOLANIE ODSWIEZENIA WIDOKU
    //$scope.$apply(function(){
    //
    //})

    //Tak mozna obserwowac se zmiane czegos co jest bindowane
    $scope.$watch('ksywka', function(oldVal, newVal){
        console.log(newVal, ' --> ', oldVal);
    });

}]);
//var reminderApp=angular.module("reminderApp",["ngMessages","ngResource"]);reminderApp.controller("mainController",["$scope","$log","$resource",function(e,n,r){return n.info("dupa"),e.dupa="ads",e.dupaFunction=function(){return"funkcja dupa"},{scope:e}}]);