//1 add factory to provide data to controller
myApp.factory('customerFactory', function ($http, $route, $location) {
	var customers = [];
	var factory = {};

	factory.getCustomers = function (callback) {
		$http.get('/getCustomers').success(function(output) {
			callback(output);
		});
	}

	factory.addCustomer = function (info) {
		$http.post('/addCustomer', info).success(function(output) {
			console.log('baby fac addCustomer', info);
		});
		$route.reload();
	}

	factory.deleteCustomer = function (info) {
		$http.post('/deleteCustomer', info).success(function(output) {
			callback(output);
		})
		$route.reload();
	}

	factory.getThisCustomer = function (thisCustomer, callback) {
		$http({url:'/getThisCustomer', method:'GET', params:{_id:thisCustomer}}).success(function (output) {
			callback(output);
		})
	}

	factory.editThisCustomer = function (oneCustomer, callback) {
		$http.post('/editThisCustomer', oneCustomer).success(function(output) {
		})
		$location.path('displayCustomers');
	}

	//2 factory must return value
	return factory
})