module.exports = function() {
	
	var RequestParser = function(request) {
		this.request = request;		
	};

	RequestParser.prototype.getIpAddress = function() {
		var remoteAddress = this.request.connection.remoteAddress.split(':')
		return remoteAddress[remoteAddress.length - 1];
	}

	RequestParser.prototype.getLanguage = function() {
		return this.request.headers['accept-language'].split(',')[0];
	};

	RequestParser.prototype.getOperatingSystem = function() {
		var userAgent = this.request.headers['user-agent'].split(/\s*[)(]\s*/);
		return userAgent[1];
	};

	return RequestParser;
}