//angular.module('homepage',['homepageController', 'itemService']);
//var app = angular.module('adminStock', ['ui.bootstrap','itemService'])

    // app.config(function($routeProvider)
    // {
    //     $routeProvider
    //
    //     .when('/', {
    //     	templateUrl : '',
    //     	//controller : 'FirstController'
    //     })
    //     .when('/basket', {
    //     	templateUrl : 'basket.html',
    //     	//controller : 'FirstController'
    //     })
    //     .when('/orders', {
    //     	templateUrl : 'adminOrders.html',
    //     	//controller : 'FirstController'
    //     })
    //     .when('/customers', {
    //     	templateUrl : '/adminCustomers.html',
    //     	//controller : 'FirstController'
    //     })
    //
    //
    //     .otherwise({redirectTo: '/'});
    // });

    app.controller('adminStockController', ['$modal','$window','$location','$scope',
        function($modal, $window, $location, $scope)
    {
        // $scope.formData = {};
        // $scope.loading = true;

        $scope.items = ['item1', 'item2', 'item3'];

        $scope.addNewStock = function()
        {
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                windowClass: 'show',
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }

            });

            console.log(modalInstance);
            modalInstance.result.then(function(selectedItem)
            {
                $scope.selected = selectedItem;
            });
        }
    }]);

    app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });

        // Items.get()
        //     .success(function(data) {
        //         $scope.items = data;
        //         $scope.loading = false;
        //     });
        //
        //
        // $scope.addNewStock = function() {
        //
        //     if ($scope.formData.text != undefined) {
        //         $scope.loading = true;
        //
        //         Items.create($scope.formData)
        //
        //             .success(function(data) {
        //                 $scope.loading = false;
        //                 $scope.formData = {};
        //                 $scope.items = data;
        //             });
        //     }
        // };
        //
        // $scope.deleteItem = function(id) {
        //     $scope.loading = true;
        //
        //     Items.delete(id)
        //         .success(function(data) {
        //             $scope.loading = false;
        //             $scope.items = data;
        //         });
        // };
