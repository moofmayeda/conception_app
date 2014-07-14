var conceptionDate = function(date, early, late) {
	var birthday = new Date(date);
	var birthdayDate = birthday.getDate();
	var pregnancyLength = 268 + late*7 - early*7;
	birthday.setDate(birthdayDate-pregnancyLength);
	return (birthday.getMonth()+1) + "/" + birthday.getDate() + "/" + birthday.getFullYear();
};