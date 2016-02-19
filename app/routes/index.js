module.exports = function(app) {
	

	app.route("/")
	  .get(function(req, res) {
	  	res.json({status: 'Request Header PArser API'});
	  });

	app.route("/api/whoami")
	  .get(function(req, res) {	  	
	  	console.log(req.headers);	  	
	  	res.json({
	  		ipaddress: req.connection.remoteAddress.split(':')[3],
	  		language: req.headers['accept-language'].split(',')[0],
	  		software: req.headers['user-agent']
	  	});
	  });	
}