myApp.controller('thisCustomerController', function ($scope, $routeParams, customerFactory) {
	var oneCustomer = $routeParams.id;

	customerFactory.getThisCustomer(oneCustomer, function (data) {
		$scope.oneCustomer = data;
	})

	$scope.editThisCustomer = function(oneCustomer) {
		customerFactory.editThisCustomer(oneCustomer);
	}

//ends controller
});