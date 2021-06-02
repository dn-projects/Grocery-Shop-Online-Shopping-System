var app = angular.module('homepage', ['ngRoute','ui.bootstrap', 'stockServiceModule']);



	app.controller('homepageController', ['$window','$location','$scope','StockService', function($window, $location, $scope, StockService) {


		StockService.get()
			.success(function(stocks){
				$scope.stockList = stocks;
			})


		$scope.openBasket = function()
		{
			$window.location = 'basket.html';
		}

	}]);
