//1 create app
myApp.controller('customerController', function ($scope, $routeParams, customerFactory){
	//2 create an array for customers use scope to conntect with partials
	$scope.customers = [];

	//3 call factory for customer data
	customerFactory.getCustomers(function (data) {
		$scope.customers = data;
	})

	//listen for add customer event
	$scope.addCustomer = function (newCustomer) {
		customerFactory.addCustomer($scope.newCustomer);
			$scope.newCustomer = {};
	}

	$scope.deleteCustomer = function (customer) {
		customerFactory.deleteCustomer(customer);
	}

//ends controller
});