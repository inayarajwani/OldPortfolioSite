function practice3(){

	let numberOne = parseInt(prompt("Enter a number"));
	let numberTwo = parseInt(prompt("Enter a different number"));
	let numberThree = parseInt(prompt("Last one, I promise"));

	let order = [numberOne,numberTwo,numberThree];
	order.sort (function(a,b){
		return b-a});

	alert (order);
}
function threeIntegerOrder() {
    document.getElementById("practice3").innerHTML = function practice3(); 
  }
