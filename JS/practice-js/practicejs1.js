function biggerNumber(){
	var numberOne = prompt("Enter your number")
	var numberTwo = prompt("Enter a different number")
	if(numberOne>numberTwo){
		console.log(numberOne+" is the biggerNumber");
	}else if(numberTwo>numberOne){
		console.log(numberTwo+" is the biggerNumber");
	}else if(numberTwo==numberTwo){
		console.log("The numbers are the same");
	}else{
		console.log("You didn't enter two numbers")
	}

}