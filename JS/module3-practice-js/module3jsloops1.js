function threeFive(num){
	//var num = 15;
	/*number divided by 3 has a reminder equal to 0
	*/
	if(num%3==0 && num%5==0){
		console.log ("threefive");
	}
	else if(num%==0){
		console.log ("three");
	}
	else if(num %5==0){
		console.log("five");
	}
	else{
		console.log(num);
	}
}
/*(start;stop;steps)
*/
for (var i=0; i<100; i++){
	threeFive(i);
}