
    app.controller('adminStockController', ['$modal','$window','$location','$scope','StockService',
        function($modal, $window, $location, $scope, StockService)
    {
        $scope.stockName = {};
        $scope.stockPrice = {};
        $scope.stockPicture = {};
        $scope.stockDescription = {};

        StockService.get()
            .success(function(stocks){
                $scope.stockList = stocks;
            })

        $scope.addNewStock = function()
        {
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                windowClass: 'show',
                backdrop: false
            });

            modalInstance.result.then(function(selectedItem)
            {
                $scope.selected = selectedItem;
            });
        }
    }]);

    app.controller('ModalInstanceCtrl', function ($route,$http,$scope, $modalInstance, StockService)
    {
        $scope.ok = function ()
        {
            if ($scope.stockName.text == undefined)
            {
                //$scope.message = "Please fill all fields!";
                //$scope.isCollapsed = 0;
            }
            else
            {
                StockService.create($scope.stockName);
                //StockService.create($scope.stockName, $scope.stockPrice, $scope.stockPicture, $scope.stockDescription);
                $modalInstance.close();
                $route.reload();
            }
        };

        $scope.cancel = function ()
        {
            $modalInstance.dismiss('cancel');
        };
    });
