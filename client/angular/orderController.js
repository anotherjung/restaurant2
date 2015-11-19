myApp.controller('orderController', function ($scope, orderFactory, menuFactory, customerFactory) {
	$scope.orders = [];
	$scope.itemsOrder = [];
	$scope.newOrder = {total: 0};

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

	$scope.itemOrder = function(item){
		$scope.itemsOrder.push(item);
		$scope.newOrder.total += item.price;
	}

	$scope.removeOrder = function(index){
		$scope.newOrder.total -= $scope.itemsOrder[index].price;
		$scope.itemsOrder.splice(index,1);
	}

	$scope.addOrder = function (newOrder, items) {
		newOrder.menu = items;
		console.log('here new order');
		console.log(newOrder);
		orderFactory.addOrder($scope.newOrder);

		orderFactory.getOrders(function (data) {
		$scope.orders = data;
	})

	}

	$scope.deleteOrder = function (order) {
		console.log('con deleteorder',order)
		orderFactory.deleteOrder(order);
	}

//ends controller
});