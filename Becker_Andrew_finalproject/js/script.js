(function(){
	//Variables
	var ele = document.querySelectorAll('#tonightSpecial');
	var d = new Date();

	//Switch statement to change the text for the special based off of the day of the week
	switch(d.getDay())
	{
		case 0:
			ele[0].innerHTML = "1/2 off Sake Bombs";
			break;
		case 1:
			ele[0].innerHTML = "$5 Big Asian Beers";
			break;
		case 2:
			ele[0].innerHTML = "1/2 off Martinis";
			break;
		case 3:
			ele[0].innerHTML = "1/2 off Sushi (limit 2";
			break;
		case 4:
			ele[0].innerHTML = "1/2 off Sake";
			break;
		case 5:
			ele[0].innerHTML = "1/2 off Domestics";
			break;
		default:
			ele[0].innerHTML = "No special today";
			break;
	}
})();