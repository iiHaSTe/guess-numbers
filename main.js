

let tentative_res = document.querySelector('.title span');
let input = document.querySelector('#in-number');
let send_button = document.querySelector('#btn');
let output = document.querySelector(".output");
let score = document.querySelector(".score");




let max = 10;
let last_attempt = max;
let wins = 0;
let number = Math.floor(Math.random()*10)+1;
tentative_res.innerText = last_attempt;
score.innerText = wins;



function restart(){
  last_attempt = max;
  number = Math.floor(Math.random()*10)+1;
  tentative_res.innerText = last_attempt;
}
send_button.addEventListener('click', ()=>{
  if (input.value==""){
    output.classList.remove("lose");
    output.classList.remove("win");
    output.classList.add("warning");
    output.style.height = "50px";
    output.innerText = "Veuillez entrer un nombre";
    setTimeout(() => {
      output.classList.remove("warning");
      output.style.height = "0px";
      output.innerText = "";
    }, 2000);
  }
  else if (input.value==number&&last_attempt>0){
    restart();
    output.classList.remove("warning");
    output.classList.remove("lose");
    output.classList.add("win");
    output.style.height = "50px";
    score.innerText = ++wins;
    setTimeout(()=>{
      output.classList.remove("win");
      output.style.height = "0px";
      output.innerText = "";
    }, 2000);
    output.innerText = "win";
    input.value = "";
  }
  else if (last_attempt==0){
    restart();
    output.classList.remove("win");
    output.classList.remove("warning");
    output.classList.add("lose");
    output.style.height = "50px";
    output.innerText = "lose";
    input.value = "";
    setTimeout(()=> {
      output.classList.remove("lose");
      output.style.height = "0px";
      output.innerText = "";
    }, 2000);
  }else {
    tentative_res.innerText = --last_attempt;
    input.value = "";
  }
})
