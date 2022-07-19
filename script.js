var age=document.getElementById('VoteAge1');

function Age(){

 if (parseInt(age.value) >=18){
  document.getElementById("out").innerHTML="you can vote";
}else{
   document.getElementById("out").innerHTML="you cannot vote ";
}

}; 
     

    



