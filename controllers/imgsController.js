const db = require("../models");
const fs = require('fs')

// Defining methods for the booksController
module.exports = {
	getImg: function (req, res) {
		console.log('finding', req.params.id)
		var img = fs.readFileSync(__dirname + '/../assets/img/' + req.params.id);
		res.writeHead(200, { 'Content-Type': 'image' });
		res.end(img, 'binary');
	},
};
