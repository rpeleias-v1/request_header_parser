module.exports = function(app) {

	var RequestParser = app.models.requestParser;

	/**
	 * @api {get} / API index
	 * @apiGroup Request Header Parser
	 * @apiSuccess {String} status: API status message
	 * @apiSuccessExample {json} Success
	 *  HTTP/1.1 200 OK
	 * {"status": "Request Header Parser API"}
	 */
	app.route("/")
	  .get(function(req, res) {
	  	res.json({status: 'Request Header Parser API'});
	  });

	/**
	 * @api {get} /api/whoami Request Header Parser Information
	 * @apiGroup Request Header Parser	 
	 * @apiSuccess {String} ipaddress Browser client Ip Address
	 * @apiSuccess {String} language Browser client primary language
	 * @apiSuccess {String} software Browser client operating system
	 * @apiSuccessExample {json} Success
	 *  HTTP/1.1 200 OK
	 *  {
	 *	  "ipaddress": "127.0.0.1",
	 *	  "language": "pt",
	 *	  "software": "X11; Linux x86_64"
	 *  } 
	 */
	app.route("/api/whoami")
	  .get(function(req, res) {	
	  	var requestWrapper = new RequestParser(req);	  	
	  	res.json({
	  		ipaddress: requestWrapper.getIpAddress(),
	  		language: requestWrapper.getLanguage(),
	  		software: requestWrapper.getOperatingSystem()
	  	});
	  });	
}