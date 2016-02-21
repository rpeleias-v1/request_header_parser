describe("Models: Request Parser", function() {

	var RequestParser = app.models.requestParser;
	var requestMock;
	var requestParserMock;

	beforeEach(function(done) {
		requestMock = {
			connection: {
				remoteAddress: '::ffff:127.0.0.1'
			},
			headers: {				
			}
		}
		requestMock.headers['accept-language'] = 'pt,en-US;q=0.8,en;q=0.6';
		requestMock.headers['user-agent'] = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36'
		requestParserMock = new RequestParser(requestMock);
		done();
	})

	describe("Valid object creation, by request info", function(done) {		
		it("getIpAddress() must return a valid  client ip Address", function(done) {
			expect(requestParserMock.getIpAddress()).to.eql('127.0.0.1');
			done();
		});
		it("getLanguage() must return a valid client browser language", function(done) {
			expect(requestParserMock.getLanguage()).to.eql('pt');
			done();
		});
		it("getOperatingSystem() must return a valid client browser operating system", function(done) {
			expect(requestParserMock.getOperatingSystem()).to.eql('X11; Linux x86_64');
			done();
		});
	});	
})