
function biggerNumber(){
	var numberOne = prompt("Enter your number")
	var numberTwo = prompt("Enter a different number")
	
	console.log(numberOne); 
	console.log(numberTwo); 
	
	if(numberOne > numberTwo){
		document.getElementById("practice1").innerHTML = ("`${numberOne} is the bigger Number`"); 
		/*alert(`${numberOne} is the bigger Number`);*/
	} else if (numberTwo > numberOne){
		document.getElementById("practice1").innerHTML = (`${numberTwo} is the bigger Number`); 
		/*alert(`${numberTwo} is the bigger Number`);*/
	} else if(numberTwo==numberTwo){
		document.getElementById("practice1").innerHTML = ("The numbers are the same"); 
		/*alert("The numbers are the same");*/
	} else {	
		document.getElementById("practice1").innerHTML = ("You didn't enter two numbers"); 
		/*alert("You didn't enter two numbers");*/
	}
}

/*function biggerNumber() {
    document.getElementById("practice1").innerHTML = function practice1(); 
  }
*/
