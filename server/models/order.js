//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');
//needed for associations
var Schema = mongoose.Schema;

//start model 
var OrderSchema = new mongoose.Schema({
	name: String,
	type: String,
	number: String,
	status: String, 
	// ready: Boolean,
	// served: Boolean,
	paid: Boolean,
	total: Number,
	comment: String,
	created_date: {type: Date, default: new Date},
	menu: [{type: Schema.Types.ObjectId, ref:'Menu'}],
	qty: [],
	// items: [{{type: Schema.Types.ObjectId, ref:'Menu'}, qty: Number}],
	_customer: {type: Schema.ObjectId, ref:'Customer'}
});

var Order = mongoose.model('Order', OrderSchema);
//ends model
