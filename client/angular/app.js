//5 inject the ngRoute dependency in the module
var myApp = angular.module('myApp', ['ngRoute']);
//5 use the config method to set up routing
myApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'partials/login.html'
	})
	.when('/login',{
		templateUrl: 'partials/login.html'
	})
	.when('/register',{
		templateUrl: 'partials/register.html'
	})
	.when('/menu',{
		templateUrl: 'partials/menu.html'
	})
	.when('/kitchen',{
		templateUrl: 'partials/kitchen.html'
	})

	.when('/item/:id',{
		templateUrl: 'partials/item.html'
	})

	.when('/order',{
		templateUrl: 'partials/order.html'
	})

	.when('/order/:id',{
		templateUrl: 'partials/ticket.html'
	})

	.when('/receipt/:id',{
		templateUrl: 'partials/receipt.html'
	})

	.when('/orders',{
		templateUrl: 'partials/orders.html'
	})

	.when('/orders/:role',{
		templateUrl: 'partials/chef.html'
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

