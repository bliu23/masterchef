const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');
const blog = require('./blog')
const recipe = require('./recipe');

const uri = 'mongodb://gordon:ramsay@ds127564.mlab.com:27564/masterchef';

router.use(blog);
router.use(recipe);

router.get('/', function (req, res) {
	res.send('hello world');
});

module.exports = router