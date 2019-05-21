function guessTheNumber(){
	var randomNumber = prompt("Guess a number between 0 and 20.");
	var x = 6;
	
	
	for(let i = 0; i < 1; i++){
		if(randomNumber > x){
			document.getElementById("module3practice3").innerHTML = ("This number is too high. Guess lower.")
		} else if(randomNumber == x){
			document.getElementById("module3practice3").innerHTML = ("Good job. The numbers are the same.")
		} else if(randomNumber < x){
			document.getElementById("module3practice3").innerHTML = ("This number is too low. Guess higher.")
		}
	}
}



