// //MVC2a controllers
var mongoose = require('mongoose');
var Menu = mongoose.model('Menu');

//MVC2b export
module.exports = {
	getmenus: function(req, res) {
		//test hard-code data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])

		Menu.find({}, function(err, output) {
			if(err) {
				console.log('err con getmenus', err);
			} else {
				res.json(output);
				//console.log('con getmenus', results)
			}
		}
	)},

	addmenu: function(req, res) { 
		//console.log('con', req.body);
		var cc = new Menu( 
			{name:req.body.name, ingredient: req.body.ingredient, group:req.body.group, imageurl:req.body.imageurl, price:req.body.price, created:Date.now()}
			);
		cc.save(function(err) {
			if(err) {
				console.log('err con addmnu', err);
			} else {
				//console.log('con addmenu else redirect');
				res.redirect('/');
			}
		})
	},

	deletemenu: function(req, res) {
		//console.log('con deletemenu', req.body._id);
		Menu.remove({_id:req.body._id}, function(err, output) {
			if (err) {
				console.log('err deletemenu',err);
			} else {
				console.log('baby deletemenu', req.body._id)
			}
		})
	},

	likemenu: function(req, res) {
		Menu.update({_id:req.body._id}, {$inc:{like:1}}, function(err, output) {
			if (err) {
				//console.log('err menulike',err)
			} else {
				console.log('baby likemenu', req.body._id);
			}
		})
	},

	getthismenu: function(req, res) {
		//console.log('con getthismenu', req.query._id)
		Menu.findOne({_id:req.query._id}, function(err, output) {
			if (err) {
				console.log('err getthismenu', err);
			} else {
				res.json(output);
				//console.log('con gethismenu', output);
			}
		})
	},

	editthismenu: function(req, res) {
		console.log('con editthismenu', req.body);
		Menu.update({_id:req.body._id}, {name:req.body.name, ingredient: req.body.ingredient, group:req.body.group, imageurl:req.body.imageurl, price:req.body.price}, function(err, output) {
			if (err) {
				console.log('err editthismenu', err);
			} else {
				res.json(output);
				console.log('con editthismenu', output);
			}
		})
	}


//end modules export
}