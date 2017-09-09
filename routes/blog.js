var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var uri = 'mongodb://gordon:ramsay@ds127564.mlab.com:27564/masterchef';

router.post('/addBlogPosts', function(req, res) {
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

		var blogPost1 = {
			title: 'Bibimbap',
			date: Date.now(),
			dishes: [mockRecipe3],
			attendees: ['Ken', 'Brandon', 'Tina', 'Henry', 'Amy', 'Huy', 'Sonya'],
			review: 'Lorem ipsum...',
			photos: 'mockImg'
		};

		var blogPost2 = {
			title: 'Ken\'s Kitchen',
			date: Date.now(),
			dishes: [mockRecipe1, mockRecipe2],
			attendees: ['Ken', 'Brandon', 'Tina', 'Henry', 'Amy'],
			review: 'Lorem ipsum...',
			photos: 'mockImg'
		};

		var chef = db.collection('blog');
		chef.insert(blogPost1);
		chef.insert(blogPost2);
		res.send('Inserted blog post');
	})
});

// /recipes?param0=foo&param1=bar
router.get('/blogPosts', function (req, res) {
	mongodb.MongoClient.connect(uri, function(err, db) {
		if(err) {
			throw err;
		}
		var chef = db.collection('blog');
		chef.find({title: 'Bibimbap'}).toArray(function(err, docs) {
			if(err) {
				throw err;
			}
			res.json(docs);
			console.log(docs);
		})
	});
});

module.exports = router;