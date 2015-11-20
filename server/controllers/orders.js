//MVC2 controller
var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = {
	getorders_pending: function(req, res) {
		//test hard-code data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])	

		//before assocation
		// Order.find({}, function(err, output) {
		// 	if(err) {
		// 		console.log('err con getorders', err);
		// 	} else {
		// 		res.json(output);
		// 	}
		// })

		//after assocation
		 Order.find({paid: false, status: 'pending'})
		 .populate('menu')
		 .populate('_customer')
		 .exec(function(err, results) {
		 	if(err) {
		 		console.log('con getorders',err)
		 	} else {
		 		res.json(results);
		 	}
		 })
	},

	getorders_unpaid: function(req, res) {
		//test hard-code data
		//res.json([{name: "batman", number:11}, {name: "superman", number:22}])	

		//before assocation
		// Order.find({}, function(err, output) {
		// 	if(err) {
		// 		console.log('err con getorders', err);
		// 	} else {
		// 		res.json(output);
		// 	}
		// })

		//after assocation
		 Order.find({paid:false})
		 .populate('menu')
		 .populate('_customer')
		 .exec(function(err, results) {
		 	if(err) {
		 		console.log('con getorders',err)
		 	} else {
		 		res.json(results);
		 	}
		 })
	},

	getthisorder: function(req, res) {
		Order.findOne({_id:req.query._id})
		 .populate('menu')
		 .populate('_customer')
		 .exec(function(err, output) {
			if(err) {
				console.log('err con getthisorder', err);
			} else {
				res.json(output);
				console.log('baby con getthisorder', output);
			}
		})
	},


	addorder: function(req, res) {
		console.log(req.body);
		var cc = new Order(
			{name:req.body.name, 
				type:req.body.type, 
				total:req.body.total,
				menu: req.body.menu,
				_customer: req.body._customer,
				comment: req.body.comment,
				number: req.body.number,
				status: 'pending',
				// ready: false, 
				paid: false,
				// created:Date.now()}
			});
		// cc.menu.push(req.body.item); 
		console.log(cc);
		cc.save(function(err) {
			if(err) {
				console.log('err con addorder', err);
			} else {
				res.redirect('/');
			}
		})
	},

	deleteorder: function(req, res) {
			Order.remove({_id:req.body._id}, function(err, output) {
			if(err){
				console.log('err con deleteorder', err )
			} else {
				console.log('baby con deleteorder', output)
			}
		})
	},


	editthisorder: function(req, res) {
		console.log('con editthisorder22', req.body)
		Order.update({_id:req.body._id}, {name:req.body.name, type:req.body.type, total:req.body.total}, function(err, output) {
			if(err) {
				console.log('err con editthisorder',err);
			} else {
				//res.json(output);
				console.log('con editthisorder', output);
			}
		})

	},

	menuthisorder: function(req, res) {
		console.log('con editthisorder22', req.body)
		Order.findOne({_id:req.body._id}, function(err, order) {
			if(err) {
				console.log('err con editthisorder',err);
			} else {
				//res.json(output);
				order.menu.push(req.body.item);
				order.total += req.body.item.price;
				console.log(order.total);
				order.save();
				res.json(order);
				console.log('con editthisorder', order);
			}
		})

	},

	deleteitem_thisorder: function(req, res) {
		console.log('delete items', req.body)
		Order.findOne({_id:req.body.order._id})
		.populate('menu')
		.populate('_customer')
		.exec(function(err, order) {
			if(err) {
				console.log('err con getthisorder', err);
			} else {
				console.log('baby con getthisorder', order);
				order.total -= order.menu[req.body.index].price;				
				order.menu.splice(req.body.index,1);
				order.save();
				res.json(order);
			}
		})
	},

	readyOrder: function(req, res) {
		Order.update({_id:req.body._id}, {status:'ready'}, function(err, order) {
			if (err) {
				//console.log('err menulike',err)
			} else {
			
			}
		})
	},

	servedOrder: function(req, res) {
		Order.update({_id:req.body._id}, {status:'served'}, function(err, order) {
			if (err) {
				//console.log('err menulike',err)
			} else {
			
			}
		})
	},

	paidOrder: function(req, res) {
		Order.update({_id:req.body._id}, {status:'paid', paid: true}, function(err, order) {
			if (err) {
				//console.log('err menulike',err)
			} else {
			
			}
		})
	}


//ends module export
}