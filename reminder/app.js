var reminderApp  = angular.module('reminderApp', ['ngMessages', 'ngResource']);


// tablia zamiast samej funkcji podawana jest w celu minifikacji
//Stringi nie sa minifikowane przez co angular wie ktora zmienna jest czym
reminderApp.controller('mainController', ['$scope', '$log', '$resource', '$timeout',
    function($scope, $log, $resource, $timeout){

    $log.info('dupa');
    $scope.dupa = 'ads';
    $scope.dupaFunction = function(){
        return 'funkcja dupa'
    }

        $timeout(function(){
            $scope.dupa = ' zmiany i heheszki';
        }, 2000)

    //return {scope: $scope};

}]);

//var reminderApp=angular.module("reminderApp",["ngMessages","ngResource"]);reminderApp.controller("mainController",["$scope","$log","$resource",function(e,n,r){return n.info("dupa"),e.dupa="ads",e.dupaFunction=function(){return"funkcja dupa"},{scope:e}}]);