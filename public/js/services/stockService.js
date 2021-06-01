var app = angular.module('stockServiceModule', []);

	app.factory('StockService', ['$http',function($http)
	{
		return{
			get : function()
			{
				return $http.get('/api/stock');
			},
			create : function(stockName)
			{
				console.log("checkpoint 3");
				return $http.post('/api/stock', {stockName});
			},
			delete : function(id)
			{
				return $http.delete('/api/stock' + id);
			}
		}
	}]);
