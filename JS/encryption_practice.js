function encryption(message){
  let words = message.split(" ");
  let encrypted = "";
  let listLength = words.length;
    for (i=0; i<listLength; i++){
      let firstLetter = words[i][0].toLowerCase();
      if (firstLetter == "a"||firstLetter == "e"||firstLetter =="i"||firstLetter =="o"||firstLetter =="u"||words[i].length<3){
      encrypted += words[i] + " ";
      }else{      
      let otherLetters = words[i].slice(1);
      encrypted += otherLetters + words[i][0] + "ay ";
      }
    }
    let outputMessage = encrypted.toLowerCase()
  document.getElementById("module5practice1").innerHTML=outputMessage;

}
encryption("This is our secret message");