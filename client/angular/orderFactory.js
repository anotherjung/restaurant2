myApp.factory('orderFactory', function ($http, $route, $location) {
	var orders = [];
	var factory = {};

	factory.getOrders = function (callback) {
		$http.get('/getOrders').success(function(output) {
			callback(output);
			console.log('fac getOrders', output);
		})
	}

	factory.addOrder = function (info) {
		$http.post('/addOrder', info).success(function(output) {
			console.log('baby fac addorder', output)
		})
		$route.reload();
	}

	factory.deleteOrder = function (info, callback) {
		$http.post('/deleteOrder', info).success(function(output) {
			callback(output);
		}) 
		$route.reload();
	}

	factory.getThisOrder = function (thisOrder, callback) {
		console.log('',thisOrder)
		$http({url:'/getThisOrder', method:'GET', params:{_id:thisOrder}}).success(function (output) {
			callback(output);
		})
	}

	factory.editThisOrder = function(oneOrder, callback) {
		$http.post('/editThisOrder', oneOrder).success(function(output) {
			console.log('baby fac editThisOrder', oneOrder)
		})
		$location.path('displayOrders');
	}

	factory.menuThisOrder = function(oneOrder, callback) {
		$http.post('/menuThisOrder', oneOrder).success(function(output) {
			console.log('baby fac editThisOrder', oneOrder)
		})
		$location.path('displayOrders');
	}



	return factory
//ends	
})