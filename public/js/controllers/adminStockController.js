
    app.controller('adminStockController', ['$modal','$window','$location','$scope','StockService',
        function($modal, $window, $location, $scope, StockService)
    {
        $scope.stockName = {};

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
                backdrop: false,
                })
            });

            modalInstance.result.then(function(selectedItem)
            {
                $scope.selected = selectedItem;
            });
        }
    }]);

    app.controller('ModalInstanceCtrl', function ($http,$scope, $modalInstance, items, StockService)
    {
        };


        // // Example starter JavaScript for disabling form submissions if there are invalid fields
        // (function () {
        //     'use strict'
        //
        //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
        //     var forms = document.querySelectorAll('.needs-validation')
        //
        //     // Loop over them and prevent submission
        //     Array.prototype.slice.call(forms)
        //         .forEach(function (form) {
        //             form.addEventListener('submit', function (event) {
        //                 if (!form.checkValidity()) {
        //                     event.preventDefault()
        //                     event.stopPropagation()
        //                 }
        //
        //                 form.classList.add('was-validated')
        //             }, false)
        //         })
        // })()



        $scope.ok = function ()
        {
            console.log("checkpoint 1");
            if ($scope.stockName == undefined)
            {

                // TODO VALIDATION HANDLING HERE

            }
            else
            {
                console.log("checkpoint 2");
                StockService.create($scope.stockName);

                $modalInstance.close();
            }
        };

        $scope.cancel = function ()
        {
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
