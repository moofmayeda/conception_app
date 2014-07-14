describe ("conceptionDate", function() {
	it("takes a date and returns 268 days prior, the average length of human gestation from fertilization to birth, when both dates are within the same year", function() {
		conceptionDate("9/26/2014").should.equal("1/1/2014");
	});
	it("takes a date and returns 268 days prior, when the two dates are in different years", function() {
		conceptionDate("5/2/2014").should.equal("8/7/2013");
	});
});