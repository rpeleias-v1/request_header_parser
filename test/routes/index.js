describe("Routes: index", function() {

	describe("GET /", function() {
		it("returns the API status", function(done) {
			request.get("/")
			.expect(200)
			.end(function(err, res) {
				var expected = {status: "Request Header Parser API"};
				expect(res.body).to.eql(expected);
				done(err);
			});
		});
	});
})