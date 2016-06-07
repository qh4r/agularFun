simpleApp.service('$citySelection', function () {
    var selectedCity = '';
    this.getCityName = function () {
        return selectedCity;
    };
    this.updateCityName = function(newValue){
        selectedCity = newValue;
    };
});