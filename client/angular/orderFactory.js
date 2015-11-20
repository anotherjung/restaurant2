myApp.factory('orderFactory', function ($http, $route, $location) {
	var orders = [];
	var factory = {};

	factory.getOrders_unpaid = function (callback) {
		$http.get('/getOrders/unpaid').success(function(output) {
			callback(output);
			console.log('fac getOrders', output);
		})
	}

	factory.getOrders_pending = function (callback) {
		$http.get('/getOrders/pending').success(function(output) {
			callback(output);
			console.log('fac getOrders', output);
		})
	}

	factory.getThisOrder = function (thisOrder, callback) {
		console.log('',thisOrder)
		$http({url:'/getThisOrder', method:'GET', params:{_id:thisOrder}}).success(function (output) {
			callback(output);
		})
	}

	factory.addOrder = function (info) {
		$http.post('/addOrder', info).success(function(output) {
			// console.log('baby fac addorder', output)
		})
		$route.reload();
	}

	factory.deleteOrder = function (info, callback) {
		$http.post('/deleteOrder', info).success(function(output) {
			callback(output);
		}) 
		$route.reload();
	}

	factory.editThisOrder = function(oneOrder, callback) {
		$http.post('/editThisOrder', oneOrder).success(function(output) {
			console.log('baby fac editThisOrder', output)
		})
		$location.path('displayOrders');
	}

	factory.menuThisOrder = function(oneOrder, callback) {
		$http.post('/menuThisOrder', oneOrder).success(function(output) {
			console.log('baby fac editThisOrder', output)
		})
		$location.path('displayOrders');
	}

	factory.deleteItemThisOrder = function(order, index, callback) {
		console.log(order);
		console.log(index);
		data = {order: order, index: index};
		$http.post('/deleteItemThisOrder', data).success(function(output) {
			console.log('delete item ThisOrder', output)
			order = output;
			callback(order);
		})
		// $location.path('displayOrders');
	}

	factory.orderReady = function(order){
		$http.post('/readyOrder', order).success(function(output){

		})
	}

	factory.orderServed = function(order){
		$http.post('/servedOrder', order).success(function(output){

		})
	}

	factory.orderPaid = function(order){
		$http.post('/paidOrder', order).success(function(output){

		})
	}


	return factory
//ends	
})