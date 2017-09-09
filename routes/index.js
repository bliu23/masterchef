var express = require('express');
var router = express.Router();

const blog = require('./blog')
const recipe = require('./recipe');
router.use(blog);
router.use(recipe);


var mongodb = require('mongodb');
var uri = 'mongodb://gordon:ramsay@ds127564.mlab.com:27564/masterchef';

// router.use('/comments', require('./comments'))
// router.use('/users', require('./users'))

router.get('/', function (req, res) {
	res.send('hello world');
});

router.get('/addTestRecipes', function (req, res) {
	mongodb.MongoClient.connect(uri, function (err, db) {
		if (err) {
			throw err;
		}

		var testCollection = db.collection('test');
		for (let i = 0; i < 5; i++) {
			testCollection.insert({
				url: 'mockUrl' + i,
				info: 'mockInfo' + i
			});
		}
		res.status(200).send({ code: 'OK!' });
		console.log('done')
	})
});

module.exports = router