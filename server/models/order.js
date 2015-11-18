//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');
//needed for associations
var Schema = mongoose.Schema;

//start model 
var OrderSchema = new mongoose.Schema({
	name: String,
	type: String,
	placed: Boolean,
	paid: Boolean,
	cooked: Boolean,
	total: String,
	created_date: {type: Date, default: new Date},
	menu: [{type: Schema.Types.ObjectId, ref:'Menu'}],
	_customer: {type: Schema.ObjectId, ref:'Customer'}
});

var Order = mongoose.model('Order', OrderSchema);
//ends model
