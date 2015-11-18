//1 add factory to provide data to controller
myApp.factory('menuFactory', function ($http, $route) {
	var menus = [];
	var factory = {};

	factory.addMenu = function (info) {
		//console.log('fac addMenu', info);
				//test local
			// menu.push({
			// 	name: info.name,
			// 	created: Date.now()
			// });
		$http.post('/addMenu', info).success(function(output) {
			//console.log('fac addMenu', info);
		});
		$route.reload();
	}

	factory.getMenus = function (callback) {
		//connect to node routes
		$http.get('/getMenus').success(function(output) {
			console.log('fac getMenus',output);
			callback(output);
		})
	}

	//check menu in the partials page
	factory.deleteMenu = function(menu, callback) {
		console.log('fac deleteMenu', menu)
		$http.post('/deleteMenu', menu).success(function(output) {
			console.log('fac deleteMenu', output)
			callback(output);
		});
		$route.reload();
	}

	factory.likeMenu = function(menu, callback) {
		console.log('fac likeMenu', menu) 
		$http.post('/likeMenu', menu).success(function (output) {
			callback(output);
		})
		$route.reload();
	}

	factory.getThisMenu = function(thisMenu, callback) {
		console.log('fac getThisMenu', thisMenu);
		//check menu controller for req.query using params
		$http({url:'/getThisMenu', method:'GET', params:{_id:thisMenu}})
		.success(function (output) {
			callback(output);
		})
	}

	factory.editMenu = function(thisMenu, callback) {
		console.log('fac editMenu', thisMenu);
		$http.post('/editThisMenu', thisMenu).success(function(output) {
			console.log('baby fac editMenu', thisMenu)
		})
		$route.reload();
	}

	//2 factory must return value
	return factory
})