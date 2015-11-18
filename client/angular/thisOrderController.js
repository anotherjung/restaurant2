myApp.controller('thisOrderController', function ($scope, $routeParams, orderFactory, menuFactory) {
	var thisOrder = $routeParams.id;
	console.log($routeParams.id);

	orderFactory.getThisOrder(thisOrder, function (data) {
		$scope.oneOrder = data;
	})

	menuFactory.getMenus(function (data) {
		$scope.menus = data;
	})

	$scope.editThisOrder  = function(oneOrder) {
		console.log('con editOrder', oneOrder);
		orderFactory.editThisOrder(oneOrder);
	}

	$scope.menuThisOrder  = function(oneOrder) {
		console.log('con editOrder', oneOrder);
		orderFactory.menuThisOrder(oneOrder);
	}

	$scope.itemDelete = function(order, index){
		console.log(order);
		console.log(index);
		orderFactory.deleteItemThisOrder(order, index, function(data){
			console.log(data);
			$scope.oneOrder = data;
		});
	}

//end controller
}); 