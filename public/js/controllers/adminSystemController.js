var app = angular.module('adminSystem', ['ngRoute', 'ui.bootstrap', 'stockServiceModule']);

    app.controller('adminSystemController', ['$http','$window','$location','$scope','StockService', function($http,$window, $location,$scope, StockService)
    {
        $scope.signOut = function()
        {
            $window.location = 'admin.html'
        }
    }]);


    app.config(function($routeProvider)
    {
        $routeProvider

            .when('/', {
                templateUrl : 'adminDashboard.html',
            })
            .when('/stock', {
                templateUrl : 'adminStock.html',
                controller : 'adminStockController',
            })
            .when('/orders', {
                templateUrl : 'adminOrders.html',
            })
            .when('/customers', {
                templateUrl : '/adminCustomers.html',
            })

            .otherwise({redirectTo: '/'});
    });
