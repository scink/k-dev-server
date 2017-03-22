const express		= require('express');
const path			= require('path');
const personal		= require('./personal.routes');
const portfolio	= require('./portfolio.routes');
// const assets		= require('./assets.routes');

module.exports = app => {
	if (process.env.NODE_ENV === 'development') {
		app.get('/*', function(req, res, next) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			next();
		});
		// app.put('/*', function(req, res, next) {
		// 	res.setHeader('Access-Control-Allow-Origin', '*');
		// 	next();
		// });
		// app.post('/*', function(req, res, next) {
		// 	res.setHeader('Access-Control-Allow-Origin', '*');
		// 	next();
		// });
	}

	personal(app);
	portfolio(app);
	app.use('/', express.static(path.join(__dirname, 'public/dist')));
	// assets(app);
};
