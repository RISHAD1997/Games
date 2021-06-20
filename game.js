var restart=document.querySelector('#b');
var square=document.querySelectorAll('td');
var msg=document.querySelector('h3');


function clearboard(){
  for (var i = 0; i < square.length; i++) {
    square[i].textContent='';
    msg.textContent='';
  }
}


restart.addEventListener('click',clearboard);


var flag=0;
function changemaker() {
  if (flag==0) {
    this.textContent='X';
    flag=1
  }
  else if (flag==1) {
    this.textContent='O';
    flag=0
  }
}

for (var i = 0; i < square.length; i++) {
  square[i].addEventListener('click',changemaker)
}

var tables=document.querySelector('#tables');

function check_rows(){
  if ((document.querySelector("#one").textContent==="X")&&(document.querySelector("#two").textContent==="X")&&(document.querySelector("#three").textContent==="X")) {
    console.log("player x won")
    msg.textContent="OOPS! PLAYER X WON";
  }
  else if ((document.querySelector("#one").textContent==="O")&&(document.querySelector("#two").textContent==="O")&&(document.querySelector("#three").textContent==="O")) {
    console.log("pLAYER O WON");
    msg.textContent="OOPS! PLAYER O WON";
  }

  if ((document.querySelector("#four").textContent==="X")&&(document.querySelector("#five").textContent==="X")&&(document.querySelector("#six").textContent==="X")) {
    console.log("player x won")
    msg.textContent="OOPS! PLAYER X WON";
  }
  else if ((document.querySelector("#four").textContent==="O")&&(document.querySelector("#five").textContent==="O")&&(document.querySelector("#six").textContent==="O")) {
    console.log("pLAYER O WON");
    msg.textContent="OOPS! PLAYER O WON";
  }

  if ((document.querySelector("#seven").textContent==="X")&&(document.querySelector("#eight").textContent==="X")&&(document.querySelector("#nine").textContent==="X")) {
    console.log("player x won")
    msg.textContent="OOPS! PLAYER X WON";
  }
  else if ((document.querySelector("#seven").textContent==="O")&&(document.querySelector("#eight").textContent==="O")&&(document.querySelector("#nine").textContent==="O")) {
    console.log("pLAYER O WON");
    msg.textContent="OOPS! PLAYER O WON";
  }
}

tables.addEventListener("click",check_rows);

function check_col(){
  if ((document.querySelector("#one").textContent==="X")&&(document.querySelector("#four").textContent==="X")&&(document.querySelector("#seven").textContent==="X")) {
    console.log("player x won")
    msg.textContent="OOPS! PLAYER X WON";
  }
  else if ((document.querySelector("#one").textContent==="O")&&(document.querySelector("#four").textContent==="O")&&(document.querySelector("#seven").textContent==="O")) {
    console.log("player O  won")
    msg.textContent="OOPS! PLAYER O WON";
  }
  if ((document.querySelector("#two").textContent==="X")&&(document.querySelector("#five").textContent==="X")&&(document.querySelector("#eight").textContent==="X")) {
    console.log("player x won")
    msg.textContent="OOPS! PLAYER X WON";
  }
  else if ((document.querySelector("#two").textContent==="O")&&(document.querySelector("#five").textContent==="O")&&(document.querySelector("#eight").textContent==="O")) {
    console.log("player O  won")
    msg.textContent="OOPS! PLAYER O WON";
  }
  if ((document.querySelector("#three").textContent==="X")&&(document.querySelector("#six").textContent==="X")&&(document.querySelector("#nine").textContent==="X")) {
    console.log("player x won")
    msg.textContent="OOPS! PLAYER X WON";
  }
  else if ((document.querySelector("#three").textContent==="O")&&(document.querySelector("#six").textContent==="O")&&(document.querySelector("#nine").textContent==="O")) {
    console.log("player O  won")
    msg.textContent="OOPS! PLAYER O WON";
  }
}

tables.addEventListener("click",check_col)


function diagonal(){
  if ((document.querySelector("#one").textContent==="X")&&(document.querySelector("#five").textContent==="X")&&(document.querySelector("#nine").textContent==="X")) {
    console.log("player x won")
    msg.textContent="OOPS! PLAYER X WON";
  }
  else if ((document.querySelector("#one").textContent==="O")&&(document.querySelector("#five").textContent==="O")&&(document.querySelector("#nine").textContent==="O")) {
    console.log("player O  won")
    msg.textContent="OOPS! PLAYER O WON";
  }
  if ((document.querySelector("#three").textContent==="X")&&(document.querySelector("#five").textContent==="X")&&(document.querySelector("#seven").textContent==="X")) {
    console.log("player x won")
    msg.textContent="OOPS! PLAYER X WON";
  }
  else if ((document.querySelector("#three").textContent==="O")&&(document.querySelector("#five").textContent==="O")&&(document.querySelector("#seven").textContent==="O")) {
    console.log("player O  won")
    msg.textContent="OOPS! PLAYER O WON";
  }
}

tables.addEventListener("click",diagonal)

