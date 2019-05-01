var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.

function homePage() {
  location.replace(href='../index.html')
}

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Jason" && password == "Cis376"){
	alert ("Login successfully");
// Redirecting to other page.
return false;
}
else{
	attempt --; // Decrease by one.
	alert("You have "+attempt+" attempts left");
// showing a message of 24 hour restriction. Disabling fields after 3 attempts.
if( attempt == 0){
	alert("You have have been disabled for 24 hours");
	document.getElementById("username").disabled = true;
	document.getElementById("password").disabled = true;
	document.getElementById("submit").disabled = true;
return false;
		}
	}
}