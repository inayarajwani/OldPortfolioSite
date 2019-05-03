function everyOtherLetter{
	let msg = "This is a string";
	let direction = " ";
	let length = msg.length;
	for(i=0; i<length){
		if (i%2==0){
			document.getElementById('module4practice2').innerHTML = (direction = direction + msg.toUpperCase());
		}
		else{
			document.getElementById('module4practice2').innerHTML = (direction = direction + msg.toLowerCase());
		}
	}

}