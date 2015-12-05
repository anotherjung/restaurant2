//MVC1a for routes
var mongoose = require('mongoose');


//MVC2h moved to model
// create connection to models
var Menu = mongoose.model('Menu');
var Order = mongoose.model('Order');
var Customer = mongoose.model('Customer');
var Staff = mongoose.model('Staff');

//MVC2c for controller
var menus  = require('../controllers/menus.js');
var orders = require('../controllers/orders.js');
var customers = require('../controllers/customers.js');
var staff = require('../controllers/staffs.js')
//start MVC1d export

module.exports = function(app) {
	var bodyParser = require('body-parser');
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	//start routes1
	//root route to render the index.ejs view
	app.get('/', function(req, res) {
		res.render("index");
		//console.log('home page loaded');
	})

	app.post('/staff_login', function(req,res,next){
		staff.login(req,res,next)
	})

	app.post('/staff_register', function(req,res,next){
		staff.register(req,res,next)
	})

	// app.post('/staffRegister', function(req,res,next){
	// 	passport.authenticate('localStaff-register', function(err, user, info) {
 //    	if (err) { return next(err) }
 //    	if (!user) {
 //      // *** Display message using Express 3 locals
 //      	console.log(info.message);
 //       	return res.json({message: info.message});
 //    	}
 //    	req.logIn(user, function(err) {
 //    	console.log(user);
 //    	console.log(req.user);
 //      	if (err) { return next(err); }
 //      	return res.json(req.user);
 //    	});
 //  		})(req, res, next);

	// });

	//route to render menu
	app.get('/getMenus', function (req, res) {
		//test http://localhost:8080/getmenu
		//hard-coded json data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		//MVC ask controller for data
		menus.getmenus(req,res)
		//console.log('rou getmenu', req.body)
		//products.getMenu(req,res)
	})

	//route to add menu
	app.post('/addMenu', function (req,res) {
		//console.log('rou addmenu', req.body) 
		menus.addmenu(req,res)
	})

	//route to add menu
	app.post('/deleteMenu', function (req,res) {
		//console.log('rou deletemenu', req.body) 
		menus.deletemenu(req,res)
	})

	//route to like menu
	app.post('/likeMenu', function (req, res) {
		menus.likemenu(req,res)
	})

	//route to display one menu
	app.get('/getThisMenu', function (req, res) {
		menus.getthismenu(req,res)
	})

	app.post('/editThisMenu', function (req, res) {
		menus.editthismenu(req,res)
	})

	app.get('/getOrders/pending', function (req, res) {
		orders.getorders_pending(req, res)
	})

	app.get('/getOrders/unpaid', function (req, res) {
		orders.getorders_unpaid(req, res)
	})

	app.get('/getThisOrder', function (req, res) {
		orders.getthisorder(req, res)
	})

	app.post('/orderAdd', function (req, res) {
		orders.orderAdd(req, res)
	})

	app.post('/orderDelete', function (req, res) {
		orders.orderDelete(req, res)
	})

	app.post('/orderEdit', function (req, res) {
		orders.orderEdit(req, res)
	})

	app.post('/menuThisOrder', function (req, res) {
		orders.menuthisorder(req, res)
	})

	app.post('/deleteItemThisOrder', function (req, res) {
		orders.itemDelete_thisorder(req, res)
	})

	app.post('/itemOrderIncr', function (req, res) {
		orders.itemIncr_thisorder(req, res)
	})

	app.post('/itemOrderDecr', function (req, res) {
		orders.itemDecr_thisorder(req, res)
	})

	app.post('/readyOrder', function(req,res){
		orders.readyOrder(req,res)
	})

	app.post('/servedOrder', function(req,res){
		orders.servedOrder(req,res)
	})

	app.post('/paidOrder', function(req,res){
		orders.paidOrder(req,res)
	})

	app.get('/getCustomers', function (req, res) {
		customers.getcustomers(req,res)
	})

	app.post('/addCustomer', function (req, res) {
		customers.addcustomer(req,res)
	})	

	app.post('/deleteCustomer', function (req, res) {
		customers.deletecustomer(req, res)
	})

	app.get('/getThisCustomer', function (req, res) {
		customers.getthiscustomer(req, res)
	})

	app.post('/editThisCustomer', function (req, res) {
		customers.editthiscustomer(req, res)
	})

	//ends routes
}//ends MVC export
