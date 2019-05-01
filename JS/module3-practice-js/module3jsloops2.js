function pattern(){
	let symbol = "";
	let star = prompt ("What symbol do you want?");
	let repeat = parseInt(prompt("How many times do you want to run it?"));
	for (var i = 0; i < repeat; i++){
		 symbol = symbol + star;
		console.log(symbol + "\n");

	}
}
