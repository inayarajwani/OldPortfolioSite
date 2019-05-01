function threeFive(num){
	//var num = 15;
	/*number divided by 3 has a reminder equal to 0
	*/
	if(num%3==0 && num%5==0){
		document.getElementById("module3practice1").innerHTML = ("threefive ");
	}
	else if(num%3==0){
		document.getElementById("module3practice1").innerHTML = ("three ");
	}
	else if(num%5==0){
		document.getElementById("module3practice1").innerHTML = ("five ");
	}
	else{
		document.getElementById("module3practice1").innerHTML = (num + "");
	}
}
/*(start;stop;steps)
*/
function loop(){
	for (var i=0; i<100; i++){
		threeFive(i);
	}
}
