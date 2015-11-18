myApp.controller('menuController', function ($scope, $routeParams, menuFactory) {

	//3 create scope for array
	$scope.menus = [];
	//3 get data from factory
	menuFactory.getMenus(function (data) {
		$scope.menus = data;
		//console.log('questionFactory.getQuestions', data);
	})

	//2a listen for ng-click add
	$scope.addMenu = function (newMenu) {
		console.log('con newMenu', $scope.newMenu);
		menuFactory.addMenu($scope.newMenu);
			$scope.newMenu = {};
	}
	//2b listen for ng-click delete
	$scope.deleteMenu = function(menu) {
		console.log('con deleteMenu', menu);
		menuFactory.deleteMenu(menu);
	}

	//2b listen for ng-click delete
	$scope.likeMenu = function(menu) {
		console.log('con likeMenu', menu);
		menuFactory.likeMenu(menu);
	}

//ends controller
});
