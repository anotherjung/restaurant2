//MVC3b require, mongoose will in the models folder
var mongoose = require('mongoose');
//needed for associations
var Schema = mongoose.Schema;

//start model 
var MenuSchema = new mongoose.Schema({
	name: String,
	ingredients: String, 
	group: String,
	imageurl: {type: String, default: 'http://app.resrc.it/s=w1280,pd2/o=85/http://www.your-site.co/image.jpg'},
	price: Number,
	like: {type: Number, default: 0},
	created_date: {type: Date, default: new Date},
	_order: {type: Schema.ObjectId, ref:'Order'}
});

var Menu = mongoose.model('Menu', MenuSchema);
//ends model
