//angular.module('homepage',['homepageController', 'itemService']);
var app = angular.module('homepage', ['ngRoute','itemService', 'ui.bootstrap'])

	app.config(function($routeProvider)
	{
		$routeProvider

			// .when('/', {
			// 	templateUrl : '',
			// 	//controller : 'FirstController'
			// })
			// .when('/basket', {
			// 	templateUrl : 'basket.html',
			// 	//controller : 'FirstController'
			// })
			// .when('/orders', {
			// 	templateUrl : 'adminOrders.html',
			// 	//controller : 'FirstController'
			// })
			// .when('/customers', {
			// 	templateUrl : '/adminCustomers.html',
			// 	//controller : 'FirstController'
			// })


			//.otherwise({redirectTo: '/'});
	});

	app.controller('homepageController', ['$modal','$window','$location','$scope','$http','Items', function($modal,$window, $location, $scope, $http, Items) {
		$scope.formData = {};
		$scope.loading = true;

		Items.get()
			.success(function(data) {
				$scope.items = data;
				$scope.loading = false;
			});

		$scope.openBasket = function()
		{
			$window.location = 'basket.html';
		}


	// 	$scope.createItem = function() {
	//
	// 		if ($scope.formData.text != undefined) {
	// 			$scope.loading = true;
	//
	// 			Items.create($scope.formData)
	//
	// 				.success(function(data) {
	// 					$scope.loading = false;
	// 					$scope.formData = {};
	// 					$scope.items = data;
	// 				});
	// 		}
	// 	};
	//
	// 	$scope.deleteItem = function(id) {
	// 		$scope.loading = true;
	//
	// 		Items.delete(id)
	// 			.success(function(data) {
	// 				$scope.loading = false;
	// 				$scope.items = data;
	// 			});
	// 	};
	// }]);
