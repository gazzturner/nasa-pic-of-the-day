var myApp = angular.module("app", []);

var testController = function ($scope, $http) {
    $http({
        method: "Get", url: 'https://api.nasa.gov/planetary/apod?api_key=LTGJVdNUgkCcAPUeZDjdE9yAlDlh5atQVRGL4UJA'
    }).then(function (response) {
        var data = response.data;
        $scope.date = data.date;
        $scope.title = data.title;
        $scope.picUrl = data.hdurl;
        $scope.copyright = data.copyright;
        $scope.description = data.explanation;
    }, function (reason) {
        $scope.error = reason.statusText;
        });

    $scope.redirect = function() {
        window.open($scope.picUrl);
    }
}

myApp.controller("testController", testController);