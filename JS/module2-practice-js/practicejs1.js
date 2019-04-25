
function practice1(){
	var numberOne = prompt("Enter your number")
	var numberTwo = prompt("Enter a different number")
	
	console.log(numberOne); 
	console.log(numberTwo); 
	
	if(numberOne > numberTwo){
		alert(`${numberOne} is the bigger Number`);
	} else if (numberTwo > numberOne){
		alert(`${numberTwo} is the bigger Number`);
	} else if(numberTwo==numberTwo){
		alert("The numbers are the same");
	} else {
		alert("You didn't enter two numbers");
	}
}

function biggerNumber() {
    document.getElementById("practice1").innerHTML = function practice1(); 
  }
