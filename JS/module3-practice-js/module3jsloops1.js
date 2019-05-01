function threeFive(num){
	//var num = 15;
	/*number divided by 3 has a reminder equal to 0
	*/
	if(num%3==0 && num%5==0){
		document.write = ("threefive ");
	}
	else if(num%3==0){
		document.write = ("three ");
	}
	else if(num%5==0){
		document.write = ("five ");
	}
	else{
		document.write = (num + "");
	}
}
/*(start;stop;steps)
*/
function loop(){
	for (var i=0; i<100; i++){
		threeFive(i);
	}
}
