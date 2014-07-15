var conceptionDate = function(date, early, late) {
	var birthday = new Date(date);
	var birthdayDate = birthday.getDate();
	var pregnancyLength = 268 + late*7 - early*7;
	birthday.setDate(birthdayDate-pregnancyLength);
	return (birthday.getMonth()+1) + "/" + birthday.getDate() + "/" + birthday.getFullYear();
};

$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();
	var date = $("input#birthday-month").val()+"/"+$("input#birthday-date").val()+"/"+$("input#birthday-year").val();
	var early = $("input#early-birth").val();
	var late = $("input#late-birth").val();
	var result = conceptionDate(date, early, late);
	$("#conception-date").text(result);
	$("#results").show();
	$("input#birthday-month").val("");
	$("input#birthday-date").val("");
	$("input#birthday-year").val("");
	$("input#early-birth").val("");
	$("input#late-birth").val("");
	});
});