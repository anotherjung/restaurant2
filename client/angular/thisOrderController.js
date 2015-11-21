myApp.controller('thisOrderController', function ($scope, $routeParams, $location, orderFactory, menuFactory) {
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
		orderFactory.orderEdit(oneOrder);
	}

	$scope.menuThisOrder  = function(order, itemAdd) {
		console.log(itemAdd);
		$scope.oneOrder.menu.push(itemAdd);
		$scope.oneOrder.qty.push(1);
		console.log($scope.oneOrder);
		// orderFactory.menuThisOrder(order, itemAdd, function(result){
		// 	console.log(result);
		// 	$scope.oneOrder = result;
		// })
	}

	$scope.itemOrderIncr = function(index){
		$scope.oneOrder.qty[index] += 1;
		$scope.oneOrder.total += $scope.oneOrder.menu[index].price;
		// orderFactory.thisOrderitemIncr(order, index, function(data){
		// 	console.log(data);
		// 	$scope.oneOrder = data;
		// });
	}

	$scope.itemOrderDecr = function(index){
		$scope.oneOrder.total -= $scope.oneOrder.menu[index].price;
		if($scope.oneOrder.qty[index] > 1){
			$scope.oneOrder.qty[index] -= 1;
		} else{
			$scope.oneOrder.menu.splice(index,1);
			$scope.oneOrder.qty.splice(index,1);
		}
		
		// orderFactory.thisOrderitemDecr(order, index, function(data){
		// 	console.log(data);
		// 	$scope.oneOrder = data;
		// });
	}

	$scope.itemDelete = function(index){
		var itemTotal = $scope.oneOrder.menu[index].price * $scope.oneOrder.qty[index];
		// console.log(itemTotal);
		$scope.oneOrder.total -= itemTotal;
		$scope.oneOrder.menu.splice(index,1);
		$scope.oneOrder.qty.splice(index,1);
		// orderFactory.deleteItemThisOrder(order, index, function(data){
		// 	console.log(data);
		// 	$scope.oneOrder = data;
		// });
	}


	$scope.orderPaid  = function(oneOrder) {
		console.log('con editOrder', oneOrder);
		orderFactory.orderPaid(oneOrder);
		$location.path('/displayOrders');
	}

//end controller
}); 