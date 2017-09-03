var express = require('express');
var router = express.Router();

// router.use('/comments', require('./comments'))
// router.use('/users', require('./users'))

router.get('/', function (req, res) {
	res.send('hello world');
});

router.get('/recipes', function (req, res) {
	var recipe1 = {
		url: 'mockUrl1',
	}
	var recipe2 = {
		url: 'mockUrl2'
	};

	var resObj = {
		recipes: []
	};
	resObj.recipes.push(recipe1);
	resObj.recipes.push(recipe2);

	res.json(resObj)
});

module.exports = router