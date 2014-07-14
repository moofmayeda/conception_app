var conceptionDate = function(date) {
	var birthday = new Date(date);
	var birthdayDate = birthday.getDate();
	birthday.setDate(birthdayDate-268);
	return (birthday.getMonth()+1) + "/" + birthday.getDate() + "/" + birthday.getFullYear();
};