/* *Message and words in message are flipped around. If you read the sentence backwards it makes sense.* */
function encryptionAssignmentP1(){
  let message = prompt("What is your message?");
  let words = message.split(" ").reverse();
  let listLength = words.length;
  let cypher = "";
  
  for (j=0; j<listLength; j++){
    for (i=words[j].length-1; i>-1; i--){
      cypher = cypher + words[j][i];   
    }
    cypher += " ";
  }
  document.getElementById("module5assignP1").innerHTML = cypher;
}


