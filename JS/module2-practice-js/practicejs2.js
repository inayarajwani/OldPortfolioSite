function threeIntegerProduct() {
	
	let number1 = parseInt(prompt("Enter first number"));
	let number2 = parseInt(prompt("Enter second number"));
	let number3 = parseInt(prompt("Enter third number"));
	
	const product = number1*number2*number3;

	if (product < 0){
		document.getElementById("module2practice2").innerHTML = ("The product is a negative number");
	} else {
		document.getElementById("module2practice2").innerHTML = ("The product is a positive number");
	}
}

