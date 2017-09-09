var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var uri = 'mongodb://gordon:ramsay@ds127564.mlab.com:27564/masterchef';

router.post('/addRecipe', function(req, res) {
	mongodb.MongoClient.connect(uri, function (err, db) {
		if (err) {
			throw err;
		}
		var mockRecipe1 = {
			name: 'Risotto',
			description: 'Fancy ricey cheese mushroomy goodness',
			url: 'mockurl1'
		}

		var mockRecipe2 = {
			name: 'Coquilles St. Jacques',
			description: 'Scallops and shallots and stuff',
			url: 'mockurl2'
		}

		var mockRecipe3 = {
			name: 'Bibimbap',
			description: 'Rice, meat, veggies',
			url: 'mockurl3'
		}

		var chef = db.collection('recipe');
		chef.insert(mockRecipe1);
		chef.insert(mockRecipe2);
		chef.insert(mockRecipe3);
		res.send('Inserted recipes');
	})
});

// /recipes?param0=foo&param1=bar
router.get('/recipes', function (req, res) {
	mongodb.MongoClient.connect(uri, function(err, db) {
		if(err) {
			throw err;
		}
		var chef = db.collection('recipe');
		chef.find({name: 'Risotto'}).toArray(function(err, docs) {
			if(err) {
				throw err;
			}
			res.json(docs);
			console.log(docs);
		})
	});
});

module.exports = router;