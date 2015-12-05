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

	factory.addOrder = function (info, callback) {
		$http.post('/orderAdd', info).success(function(output) {
			// console.log('baby fac addorder', output)
			callback(output);
		})
	}

	factory.deleteOrder = function (info, callback) {
		$http.post('/orderDelete', info).success(function(output) {
			callback(output);
		}) 
	}

	factory.orderEdit = function(order, callback) {
		$http.post('/orderEdit', order).success(function(output) {
			console.log('baby fac editThisOrder', output)
		})
		$location.path('displayOrders');
	}

	factory.menuThisOrder = function(order, item, callback) {
		data = {order: order, item: item}
		$http.post('/menuThisOrder', data).success(function(output) {
			console.log('baby fac editThisOrder', output)
			callback(output);
		})
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
	}

	factory.thisOrderitemIncr = function(order, index, callback) {
		console.log(order);
		console.log(index);
		data = {order: order, index: index};
		$http.post('/itemOrderIncr', data).success(function(output) {
			console.log('delete item ThisOrder', output)
			order = output;
			callback(order);
		})
	}

	factory.thisOrderitemDecr = function(order, index, callback) {
		console.log(order);
		console.log(index);
		data = {order: order, index: index};
		$http.post('/itemOrderDecr', data).success(function(output) {
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