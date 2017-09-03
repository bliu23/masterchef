const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.static(__dirname + '/public'));
app.use(routes);

app.listen(3001, function () {
	console.log('See the magic happen at localhost:8888');
});