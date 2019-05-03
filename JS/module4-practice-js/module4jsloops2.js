function everyOtherLetter()
{
	let msg = "This is a string";
	let direction = " ";
	let msgLength = msg.length;
	for(i=0; i<msgLength; i++){
		if (i%2==0){
			direction = direction + msg[i].toUpperCase();
		}
		else{
			direction = direction + msg[i].toLowerCase();
		}
	}
	document.getElementById('module4practice2').innerHTML = direction;

}