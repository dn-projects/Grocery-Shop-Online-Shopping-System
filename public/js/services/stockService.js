var app = angular.module('stockServiceModule', []);

	app.factory('StockService', ['$http',function($http)
	{
		return{
			get : function()
			{
				return $http.get('/api/stock');
			},
			create : function(stockName)
			//create : function(stockName, stockPrice, stockPicture, stockDescription)
			{
				return $http.post('/api/stock', stockName);
				//return $http.post('/api/stock', stockName, stockPrice, stockPicture, stockDescription);
			},
			delete : function(id)
			{
				return $http.delete('/api/stock' + id);
			}
		}
	}]);
