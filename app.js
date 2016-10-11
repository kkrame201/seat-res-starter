console.log("Hello, World!");


function reserveSeat(reserved) {
	if (reserved) {
		alert('Sorry, this seat is already reserved.');
		document.getElementById("contact-form").innerHTML = " ";
}

	else {
		location.href = "#contact-form";
		document.getElementById("contact-form").innerHTML = '<form id="reserveSeatForm"><label>Name:  <input type="name" name="name" placeholder="Your Name"></input></label></ br><label>Email:  <input type="email" name="email-address" placeholder="johnsmith@abc.com"></input></label><button type="sumbit" onclick="submitForm()">Submit</button></form>';
	}
}


function submitForm() {
	alert('Your seat has been reserved!');
	document.getElementById("contact-form").innerHTML = " ";
}