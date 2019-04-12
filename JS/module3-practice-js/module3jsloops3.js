function guessTheNumber(){
for(i = 0; i < 20; i++){
	var randomNumber = prompt("Guess a number between 0 and 20.");
	var x = 6;
	var totalGuesses = [];

	console.log(randomNumber);

	if(randomNumber > x){
		alert("This number is too high. Guess lower.")
	}else if(randomNumber == x)
		alert("Good job. The numbers are the same. It took you " + (totalGuesses.length) + "attempts.")
	}else if(randomNumber < x)
		alert("This number is too low. Guess higher.")
	}

guessTheNumber();


