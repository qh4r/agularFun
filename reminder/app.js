var reminderApp = angular.module('reminderApp', ['ngMessages', 'ngResource']);

//EVENT NA ZMIANE HASHA
window.addEventListener('hashchange', function(e){
    console.log('hash changed', e);
    //Ladne przyciecie do hasha
    console.log(e.newURL.replace(/^[^#]*/,''));
});

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
    $scope.toUpper = function (input) {
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
    $scope.$watch('ksywka', function (oldVal, newVal) {
        console.log(newVal, ' --> ', oldVal);
    });

    //JESLNI NIE ZAINICJALIZUJESZ TO NIE BEDZIE POCZATKOWO SPRAWDZENIA DLUGOSCI
    //WYKRZACZY SIE BO ksywka undefined
    $scope.ksywka = '';
    $scope.requiredLength = 4;

    $scope.tablica = [
        {name: 'Rafał', age: 25},
        {name: 'Asia', age: 22},
        {name: 'Szymon', age: 30}
    ]

    $scope.logClick = (function () {
        var counter = 0;
        return function () {
            console.log('clicked! -> ' + ++counter)
        }
    })();
}]);
//var reminderApp=angular.module("reminderApp",["ngMessages","ngResource"]);reminderApp.controller("mainController",["$scope","$log","$resource",function(e,n,r){return n.info("dupa"),e.dupa="ads",e.dupaFunction=function(){return"funkcja dupa"},{scope:e}}]);


reminderApp.controller('thirdController', ['$scope', '$http', function ($scope, $http) {
    $scope.username = '';
    $scope.getRepos = function () {
        $http.get('https://api.github.com/users/' + $scope.username + '/repos')
            .then(function (data) {
                $scope.repos = data.data;
            }).catch(function (err) {
            $scope.error = err
        });
    };
    $scope.turnOffError = function () {
        delete $scope.error
    }
}]);

reminderApp.controller('outerController', ['$scope', function($scope){
    $scope.tylkoOut = 'Zewnetrzna';
    $scope.wspolna = 'Wspolna zewnatrz'
    $scope.zmienionaOut = $scope.tylkoIn + ' zmodyfikowana'
}]);

reminderApp.controller('innerController', ['$scope', function($scope){
    $scope.tylkoIn = 'Wewnętrzna';
    $scope.wspolna = 'wspolna wewnatrz';
    $scope.zmienionaIn = $scope.tylkoOut + ' zmodyfikowana'
}]);