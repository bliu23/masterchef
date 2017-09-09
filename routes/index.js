var express = require('express');
var router = express.Router();

var mongodb = require('mongodb');
var uri = 'mongodb://gordon:ramsay@ds127564.mlab.com:27564/masterchef';

// router.use('/comments', require('./comments'))
// router.use('/users', require('./users'))

router.get('/', function (req, res) {
	res.send('hello world');
});

router.get('/recipes', function (req, res) {
	// var recipe1 = {
	// 	url: 'mockUrl1',
	// }
	// var recipe2 = {
	// 	url: 'mockUrl2'
	// };

	// var resObj = {
	// 	recipes: []
	// };
	// resObj.recipes.push(recipe1);
	// resObj.recipes.push(recipe2);

	mongodb.MongoClient.connect(uri, function(err, db) {
		if(err) {
			throw err;
		}
		var recipe = {
			url: 'mockUrl',
			img: 'mockImg'
		};
		console.log(recipe)
		var chef = db.collection('test');
		chef.insert(recipe);
	})

	// res.json(resObj)
});

module.exports = router