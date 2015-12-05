myApp.controller('menuController', function ($scope, $routeParams, menuFactory) {

	//3 create scope for array
	$scope.menu = [];
    $scope.staff = JSON.parse(sessionStorage.getItem('user'));
	//3 get data from factory
	console.log($scope.staff);
	menuFactory.getMenus(function (data) {
		$scope.menu = data;
		//console.log('questionFactory.getQuestions', data);
	})

	//2a listen for ng-click add
	$scope.addMenu = function (newMenu) {
		console.log('con newMenu', $scope.newMenu);
		menuFactory.addMenu($scope.newMenu);
			$scope.newMenu = {};
	}

	$scope.itemSelect = function(item){
		$scope.itemThis = item;
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
