
    app.controller('adminStockController', ['$route','$modal','$window','$location','$scope','StockService',
        function($route,$modal, $window, $location, $scope, StockService)
    {
        $scope.stockName = {};
        $scope.stockPrice = {};
        $scope.stockPicture = {};
        $scope.stockDescription = {};

        StockService.get()
            .success(function(stocks){
                $scope.stockList = stocks;
            })

        $scope.deleteStock = function(stockId){
            StockService.delete(stockId);
            $route.reload();
        }

        $scope.addNewStock = function()
        {
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                windowClass: 'show',
                backdrop: false
            });
        }
    }]);

    app.controller('ModalInstanceCtrl', function ($route,$http,$scope, $modalInstance, StockService)
    {
        $scope.ok = function ()
        {
            var object = {name:$scope.stockName, price:$scope.stockPrice, picture:$scope.stockPicture, description:$scope.stockDescription};
            StockService.create(object);
            $route.reload();
            $modalInstance.close();

        };

        $scope.cancel = function ()
        {
            $modalInstance.dismiss('cancel');
        };
    });
