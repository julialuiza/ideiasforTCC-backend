const mongoose = require('mongoose');
//const PointSchema = require('./utils/PointSchema');


const IdeiaSchema = new mongoose.Schema({
	title: String,
	description: String,
	areas:[String]
});

module.exports = mongoose.model('Ideia', IdeiaSchema);
