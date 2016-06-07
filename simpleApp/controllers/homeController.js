simpleApp.controller('homeController', ['$scope', '$citySelection',
    function ($scope, $citySelection) {
        $scope.selectedCity = $citySelection.getCityName();
        $scope.$watch('selectedCity', function(newValue){
            $citySelection.updateCityName(newValue);
        })
    }]);