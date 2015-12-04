//5 inject the ngRoute dependency in the module
var myApp = angular.module('myApp', ['ngRoute']);
//5 use the config method to set up routing
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/home.html'
	})
	.when('/login',{
		templateUrl: 'partials/login.html'
	})
	.when('/register',{
		templateUrl: 'partials/register.html'
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

	.when('/orderReceipt/:id',{
		templateUrl: 'partials/receiptOrder.html'
	})

	.when('/displayOrders',{
		templateUrl: 'partials/displayOrders.html'
	})

	.when('/displayOrders/:person',{
		templateUrl: 'partials/ordersChef.html'
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

