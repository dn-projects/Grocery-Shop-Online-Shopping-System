var app = angular.module('stockServiceModule', []);

	app.factory('StockService', ['$http',function($http)
	{
		return{
			get : function()
			{
				return $http.get('/api/stock');
			},
			create : function(stockObject)
			{
				return $http.post('/api/stock', stockObject);
			},
			demlete : function(id)
			{
				return $http.delete('/api/stock' + id);
			}
		}
	}]);
