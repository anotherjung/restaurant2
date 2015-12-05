myApp.controller('menuController', function ($scope, $routeParams, menuFactory) {

	//3 create scope for array
	$scope.menu = [];
    $scope.staff = JSON.parse(sessionStorage.getItem('user'));
	//3 get data from factory
	console.log($scope.staff);


	if($routeParams.id){
		var thisMenu = $routeParams.id;
	//var thisMenu = '5642c239b2684297502a778e';
		console.log($routeParams.id);
		menuFactory.getThisMenu(thisMenu, function (data) {
			console.log('fac getThisMenu', thisMenu);
			$scope.oneMenu = data;
			console.log('fac getThisMenu', data);
		})

	} else{
		menuFactory.getMenus(function (data) {
		$scope.menu = data;
		//console.log('questionFactory.getQuestions', data);
		})
	}

	//2a listen for ng-click add	var thisMenu = $routeParams.id;
	//var thisMenu = '5642c239b2684297502a778e';

	$scope.editMenu = function(oneMenu) {
		console.log('con editMenu', oneMenu);
		menuFactory.editMenu(oneMenu);
	}
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

	$scope.editMenu = function(oneMenu) {
		console.log('con editMenu', oneMenu);
		menuFactory.editMenu(oneMenu);
	}

//ends controller
});
