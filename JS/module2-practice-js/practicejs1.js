
function biggerNumber(){
	var numberOne = prompt("Enter your number")
	var numberTwo = prompt("Enter a different number")
	
	console.log(numberOne); 
	console.log(numberTwo); 
	
	if(numberOne > numberTwo){
		document.getElementById("module2practice").innerHTML = (numberOne + " is the bigger Number"); 
	} else if (numberTwo > numberOne){
		document.getElementById("module2practice").innerHTML = (numberTwo + " is the bigger Number"); 
	} else if(numberTwo==numberTwo){
		document.getElementById("module2practice").innerHTML = ("The numbers are the same"); 
	} else {	
		document.getElementById("module2practice").innerHTML = ("You didn't enter two numbers"); 
	}
}

