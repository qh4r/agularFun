simpleApp.controller('homeController', ['$scope', '$citySelection', '$location',
    function ($scope, $citySelection, $location) {
        $scope.selectedCity = $citySelection.getCityName();
        $scope.$watch('selectedCity', function(newValue){
            $citySelection.updateCityName(newValue);
        })
        $scope.submit = function(){
            $location.path('/forecast/3')
        }
    }]);