simpleApp.directive('dayLinkDirective', function(){
    return {
        restrict: 'AE',
        replace: true,
        //TEMPLATE MUSI MIEC 1 ELEMENT ROOT
        templateUrl: 'directives/dayLinkDirective.html',
        controller: ['$scope', '$routeParams', function ($scope, $routeParams) {
            $scope.checkIfActive = function(){
                return $scope.numberSelected === $routeParams.numberOfDays ? 'number-selected' : ''
            }
        }],
        scope: {
            numberSelected: '@'
        }
    }
});