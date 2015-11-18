myApp.controller('orderController', function ($scope, orderFactory, menuFactory, customerFactory) {
	$scope.orders = [];
	orderFactory.getOrders(function (data) {
		$scope.orders = data;
	})

	$scope.menus = [];
	menuFactory.getMenus(function (data) {
		$scope.menus = data;
	})

	$scope.customers = [];
	customerFactory.getCustomers(function (data) {
		$scope.customers = data;
	})

	$scope.addOrder = function (newOrder) {
		orderFactory.addOrder($scope.newOrder);
	}

	$scope.deleteOrder = function (order) {
		console.log('con deleteorder',order)
		orderFactory.deleteOrder(order);
	}

//ends controller
});