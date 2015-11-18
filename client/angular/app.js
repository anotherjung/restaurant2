//5 inject the ngRoute dependency in the module
var myApp = angular.module('myApp', ['ngRoute']);
//5 use the config method to set up routing
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/home.html'
	})

	.when('/addMenu',{
		templateUrl: 'partials/addMenu.html'
	})

	.when('/displayMenus',{
		templateUrl: 'partials/displayMenus.html'
	})

	.when('/thisMenu/:id',{
		templateUrl: 'partials/thisMenu.html'
	})

	.when('/addOrder',{
		templateUrl: 'partials/addOrder.html'
	})

	.when('/thisOrder/:id',{
		templateUrl: 'partials/thisOrder.html'
	})

	.when('/displayOrders',{
		templateUrl: 'partials/displayOrders.html'
	})

	.when('/addCustomer',{
		templateUrl: 'partials/addCustomer.html'
	})

	.when('/thisCustomer/:id',{
		templateUrl: 'partials/thisCustomer.html'
	})

	.when('/displayCustomers',{
		templateUrl: 'partials/displayCustomers.html'
	})


	// })
	// .otherwise({
	// 	redirectTo: '/'
	
})//ends config

