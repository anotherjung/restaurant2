// //MVC2a controllers
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

//MVC2b export
module.exports = {
	getcustomers: function(req, res) {
		//test hard-code data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		Customer.find({}, function(err, output) {
			if(err) {
				console.log('err con getcustomer', err);
			} else {
				res.json(output);
			}
		})
	},

	addcustomer: function(req, res) {
		console.log('con addcustomer', req.body);
		var cc = new Customer(
			{name:req.body.name, location:req.body.location, created_date:Date.now()}
			);
		cc.save(function(err) {
			if(err) {
				console.log('err con addcustomer', err);
			} else {
				res.redirect('/');
			}
		})
	},

	deletecustomer: function(req, res) {
		Customer.remove({_id:req.body._id} , function(err, output) {
			if (err) {
				console.log('err deletecustomer', err);
			} else {
				console.log('baby deletemenu', req.body._id)
			}
		})
	},

	getthiscustomer: function(req, res) {
		Customer.findOne({_id:req.query._id}, function(err, output) {
			if (err) {
				console.log('err getthiscustomer', err);
			} else {
				res.json(output);
				console.log('con getthiscustomer', output);
			}
		})
	},

	editthiscustomer: function(req, res) {
		console.log('con editthiscustomer', req.body);
		Customer.update({_id:req.body._id}, {name:req.body.name, location:req.body.location}, function(err, output) {
			if (err) {
				console.log('err editthiscustomer', err);
			} else {
				res.json(output);
				console.log('con editthismenu', output);
			}
		})
	}

//end modules export
}