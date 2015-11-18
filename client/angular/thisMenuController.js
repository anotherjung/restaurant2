myApp.controller('thisMenuController', function ($scope, $routeParams, menuFactory) {
	var thisMenu = $routeParams.id;
	//var thisMenu = '5642c239b2684297502a778e';
	console.log($routeParams.id);

	menuFactory.getThisMenu(thisMenu, function (data) {
		console.log('fac getThisMenu', thisMenu);
		$scope.oneMenu = data;
		console.log('fac getThisMenu', data);
	})

	$scope.editMenu = function(oneMenu) {
		console.log('con editMenu', oneMenu);
		menuFactory.editMenu(oneMenu);
	}

//ends controller
});
