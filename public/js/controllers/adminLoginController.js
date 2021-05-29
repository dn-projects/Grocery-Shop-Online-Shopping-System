var app = angular.module('adminLogin', []);

    app.controller('adminLoginController', ['$window','$location','$scope', function($window, $location,$scope) {

    $scope.attemptLogin = function()
    {
        console.log("Success!");
        console.log($scope.username);
        console.log($scope.password);

        $window.location = 'adminSystem.html';
    }

    }]);
