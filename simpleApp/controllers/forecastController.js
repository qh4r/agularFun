simpleApp.controller('forecastController', ['$scope', '$citySelection', function($scope, $citySelection){
    $scope.selectedCity = $citySelection.getCityName();
}]);