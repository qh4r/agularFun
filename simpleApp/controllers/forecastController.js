simpleApp.controller('forecastController', ['$scope', '$resource', '$citySelection', '$routeParams', function ($scope, $resource, $citySelection, $routeParams) {
    $scope.selectedCity = $citySelection.getCityName();

    $scope.numberOfDays = $routeParams.numberOfDays || 7
    $scope.weatherApi = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
        callback: "JSON_CALLBACK"
    }, {get: {method: "JSONP"}});

    $scope.weatherResult = $scope.weatherApi.get({
        q: $scope.selectedCity,
        cnt: $routeParams.numberOfDays,
        APPID: '98fad3940af1b54cf7defa8a88431867'
    });

    console.log($scope.weatherResult);

    $scope.normalizeDate = function (timestamp) {
        return new Date(+(('' + timestamp).length < 11 ? timestamp * 1000 : timestamp));
    };

    $scope.convertKelvinsToCelcius = function (input) {
        return (+input - 273.15).toFixed(2);
    };

}]);

//http://api.openweathermap.org/data/2.5/forecast/daily?q=Gliwice&cnt=7&APPID=98fad3940af1b54cf7defa8a88431867
