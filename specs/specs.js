describe ("conceptionDate", function() {
	it("takes a date and returns 268 days prior, the average length of human gestation from fertilization to birth, when both dates are within the same year", function() {
		conceptionDate("9/26/2014",0,0).should.equal("1/1/2014");
	});
	it("takes a date and returns 268 days prior, when the two dates are in different years", function() {
		conceptionDate("5/2/2014",0,0).should.equal("8/7/2013");
	});
	it("factors in early deliveries by weeks", function() {
		conceptionDate("9/26/2014",1,0).should.equal("1/8/2014");
	});
	it("factors in late deliveries by weeks", function() {
		conceptionDate("9/26/2014",0,3).should.equal("12/11/2013");
	});
});