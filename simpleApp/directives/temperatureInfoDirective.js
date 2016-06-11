simpleApp.directive('temperatureInfoDirective', function () {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'directives/temperatureInfoDirective.html',
        scope: {
            day: '=',
            convertToCelcius: '&',
            normalizeDate: '&'
        }
    }
});