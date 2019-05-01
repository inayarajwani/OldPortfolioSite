function guessTheNumber(){
for(i = 0; i < 3; i++){
	var randomNumber = prompt("Guess a number between 0 and 20.");
	var x = 6;
	var totalGuesses = [];
let i = 0;

	console.log(randomNumber);

	if(i > x){
		i++;
		document.getElementById("module3practice3").innerHTML = ("This number is too high. Guess lower. You have used" + i + "attempts out of 3")
		}else if(randomNumber == x){
		document.getElementById("module3practice3").innerHTML = ("Good job. The numbers are the same. It took you" +(randomNumber.length) + " attempts.")
		i++;
	}else if(randomNumber < x){
		document.getElementById("module3practice3").innerHTML = ("This number is too low. Guess higher.")
		i++;
	}
}
}



