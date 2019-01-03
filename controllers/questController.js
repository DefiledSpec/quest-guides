const db = require("../models");
let { Quest } = db
// Defining methods for the booksController

// could use a callback here
module.exports = {
	findAll: function (req, res) {
		db.Quest
			.find()
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	findById: function (req, res) {
		Quest
			.findById({ _id: req.params.id })
			.then(dbModel => console.log(dbModel))
			.catch(err => console.log(err));
	},
	create: function (req, res) {
		console.log(req.body)
		let newQuest = new Quest(req.body)
		newQuest.createSlug()
		
		Quest
			.create(newQuest)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	update: function (req, res) {
		Quest
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	remove: function (req, res) {
		Quest
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
