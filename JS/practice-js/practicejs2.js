let number1 = parseInt(prompt("Enter first number"));
let number2 = parseInt(prompt("Enter second number"));
let number3 = parseInt(prompt("Enter third number"));

function threeIntegerProduct(){
	return number1*number2*number3;
};

let product = threeIntegerProduct(); 

if(product < 0){
	console.log("The product is a negative number");
} else {
	console.log("The product is a positive number");
}