let random = Math.floor(Math.random() * 100+1);
let alertMessage = document.getElementById("alert");
let resultMessage = document.getElementById("result");
let button = document.getElementById("guessButton");
let count = 0;
let turn=1;
let round=10;
function clickGuess() {
  numberInput=parseInt(document.getElementById("number").value);

  if(numberInput<1 || numberInput>100||!Number.isInteger(numberInput)) {
      alertMessage.innerHTML="Vui long nhap lai so";
      alertMessage.style.color="red";
      return;
  }
else{
  if ( numberInput==random) {
    alertMessage.innerHTML="Ban da doan dung";
    alertMessage.style.color="pink"
  }
  else if ( numberInput>random) {
    alertMessage.innerHTML="So ban doan qua lon";
    alertMessage.style.color="Blue"
  }
  else{
    alertMessage.innerHTML="So ban doan qua nho";
    alertMessage.style.color="Green"
  }
  resultMessage.innerHTML+=`So ban doan lan ${turn} la ${numberInput} ` + "<br>"
  turn++;
  round--;
}
  numberRound.innerHTML=`Ban con ${round} lan doan`;
  if (round==0){
    button.disabled=true;
  }

}
function clickReset(){
  location.reload();
}
