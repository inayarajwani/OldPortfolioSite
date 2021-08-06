function loginInfo()
{
	let userName = "INAYA";
	let userInput = prompt("Enter your username");
	let capital = userInput.toUpperCase;
	let password = "123abc";
	let passwordInput = prompt("Enter a password");


	if(userInput===userName && passwordInput===password){
		document.getElementById("module4practice3").innerHTML= "Correct";
	}
	else{
		document.getElementById("module4practice3").innerHTML= "Incorrect. Try again.";
	}
}