var app = angular.module('adminSystem', ['ngRoute']);

    app.config(function($routeProvider)
    {
        $routeProvider

            .when('/', {
                templateUrl : 'adminDashboard.html',
                //controller : 'FirstController'
            })
            .when('/stock', {
                templateUrl : 'adminStock.html',
                //controller : 'FirstController'
            })
            .when('/orders', {
                templateUrl : 'adminOrders.html',
                //controller : 'FirstController'
            })
            .when('/customers', {
                templateUrl : '/adminCustomers.html',
                //controller : 'FirstController'
            })


            .otherwise({redirectTo: '/'});
    });

    app.controller('adminSystemController', ['$window','$location','$scope', function($window, $location,$scope)
    {
        $scope.signOut = function()
        {
            $window.location = 'admin.html'
        }
    }]);
