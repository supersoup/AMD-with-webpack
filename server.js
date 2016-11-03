/**
 * Created by Administrator on 2016/11/3.
 */
var express = require('express');
var app = express();

app.use('/test/proxy', function (req, res) {
	console.log('/test/proxy');
	res.json({
		a: 'aaa',
		b: 'bbb'
	});
});

app.use(express.static(__dirname));

var server = app.listen(9999, function () {
	console.log('hello, 9999');
});