function encryptionAssignmentP2(){
  let message = prompt("What is your encrypted message?");
  let words = message.split(" ").reverse();
  let listLength = words.length;
  let cypher = "";
  

  for (j=0; j<listLength; j++){
    for (i=words[j].length-1; i>-1; i--){
      cypher = cypher + words[j][i];   
    }
    
    cypher += " ";
  }
  document.getElementById("module5assignP2").innerHTML = cypher;
}
