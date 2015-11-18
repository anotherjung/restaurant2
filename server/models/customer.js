//1 MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');
//2 needed for associations
var Schema = mongoose.Schema;

//2 start model
var CustomerSchema = new mongoose.Schema({
	name: String,
	location: String,
	created_date: {type: Date, default: new Date},
	orders: [{type: Schema.Types.ObjectId, ref: 'Order'}]

});

//3 create connection to routes
var Customer = mongoose.model('Customer', CustomerSchema);
//ends model