myApp.controller('orderController', function ($scope, orderFactory, menuFactory, customerFactory, $routeParams) {
	$scope.orders = [];
	$scope.itemsOrder = [];
	$scope.newOrder = {total: 0};
	$scope.numbers = []

	for(var i = 0; i<99; i++){
		$scope.numbers.push(i);
	}

	console.log("staff");
	console.log($routeParams);

	if ($routeParams.person){
		orderFactory.getOrders_pending(function (data) {
			$scope.orders = data;
		})
	} else{
		orderFactory.getOrders_unpaid(function (data) {
			$scope.orders = data;
		})
	}

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

		orderFactory.getOrders_unpaid(function (data) {
		$scope.orders = data;
		})
	}

	$scope.orderReady = function(order){
		console.log('order ready');
		orderFactory.orderReady(order);

		orderFactory.getOrders_pending(function (data) {
			$scope.orders = data;
		})
	}

	$scope.orderServed = function(order){
		console.log('order ready');
		orderFactory.orderServed(order);
		
		orderFactory.getOrders_unpaid(function (data) {
			$scope.orders = data;
		})
	}

	$scope.deleteOrder = function (order) {
		console.log('con deleteorder',order)
		orderFactory.deleteOrder(order);
	}

//ends controller
});