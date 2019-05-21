function encryptionAssignmentP1(){
  let message = prompt("What is your message?")
  let words = message.split(" ");
  let outputMessage = "" ;
  let otherLetters = "";
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
  outputMessage = encrypted.toLowerCase()
  document.getElementById("module5assignP1").innerHTML=outputMessage;

}

