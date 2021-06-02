var app = angular.module('adminLogin', []);

    app.controller('adminLoginController', ['$window','$location','$scope', function($window, $location,$scope) {

    $scope.attemptLogin = function()
    {
        console.log("Success!");
        console.log($scope.username);
        console.log($scope.password);

        if ($scope.username == 'admin' && $scope.password == 'admin')
        {
            $window.location = 'adminSystem.html';
        }
        else
        {
            $(".alert").show()
        }
    }
    }]);
