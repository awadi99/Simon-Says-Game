<<<<<<< HEAD
  window.addEventListener("DOMContentLoaded", () => {
    const game = document.querySelector(".GAME");
    game.classList.add("GAME-entry");
  });
  
  let h2= document.querySelector("h2");
  let h3 =document.querySelector("h3");
  let score =document.querySelector(".heading");
  h3.innerHTML="";
  let Gameseq=[];
  let Userseq=[];
  let color =["colorone","colortwo","colorthree","colorfour"];

  let level=0;
  let GameStr = false;

window.addEventListener("keypress",function(){
  if(GameStr==false)
  {
    console.log("game started");
    GameStr=true;
    levelup();
  }
});

function flashbtn(btn){
  btn.classList.add("active");
  setTimeout(function(){
    btn.classList.remove("active");
  },90);
}

function levelup(){
  Userseq =[];
  level++;
  h2.innerHTML="Level "+level;

  let random =Math.floor(Math.random()*3);
  let randomcolor=color[random];
  let randombtn = document.querySelector("."+randomcolor);
  Gameseq.push(randomcolor);
  flashbtn(randombtn);

}

function checkAnswer(idx)
{
  if(Gameseq[idx]===Userseq[idx])
  {
    if(Gameseq.length==Userseq.length)
    {
      setTimeout(()=>{
      h2.innerHTML="Level "+level;
      levelup();
       let highscore =0;
      highscore =Math.max(highscore,level);
      score.innerHTML=" highest score "+highscore;
      },200);
    }
  }
  else{
    h2.innerHTML="Game Over ! Your Score is "+level;
    h3.innerHTML="Press any key to start Game";
    setTimeout(()=>{
    restartGame();
    },2000);

    
  }

}
function btnpress(){
  let btn =this;
  flashbtn(btn);

  let usercolor =btn.getAttribute("id");
  Userseq.push(usercolor);
  checkAnswer(Userseq.length-1);
}

let allbtn =document.querySelectorAll(".btn");
for(ele of allbtn)
{
  ele.addEventListener("click",btnpress);
}

function restartGame()
{
  window.addEventListener("keypress" , function(){
    h3.innerHTML="";
  });
  
  GameStr=false;
  Userseq=[];
  Gameseq =[];
  level=0;
=======
  window.addEventListener("DOMContentLoaded", () => {
    const game = document.querySelector(".GAME");
    game.classList.add("GAME-entry");
  });
  
  let h2= document.querySelector("h2");
  let h3 =document.querySelector("h3");
  let score =document.querySelector(".heading");
  h3.innerHTML="";
  let Gameseq=[];
  let Userseq=[];
  let color =["colorone","colortwo","colorthree","colorfour"];

  let level=0;
  let GameStr = false;

window.addEventListener("keypress",function(){
  if(GameStr==false)
  {
    console.log("game started");
    GameStr=true;
    levelup();
  }
});

function flashbtn(btn){
  btn.classList.add("active");
  setTimeout(function(){
    btn.classList.remove("active");
  },90);
}

function levelup(){
  Userseq =[];
  level++;
  h2.innerHTML="Level "+level;

  let random =Math.floor(Math.random()*3);
  let randomcolor=color[random];
  let randombtn = document.querySelector("."+randomcolor);
  Gameseq.push(randomcolor);
  flashbtn(randombtn);

}

function checkAnswer(idx)
{
  if(Gameseq[idx]===Userseq[idx])
  {
    if(Gameseq.length==Userseq.length)
    {
      setTimeout(()=>{
      h2.innerHTML="Level "+level;
      levelup();
       let highscore =0;
      highscore =Math.max(highscore,level);
      score.innerHTML=" highest score "+highscore;
      },200);
    }
  }
  else{
    h2.innerHTML="Game Over ! Your Score is "+level;
    h3.innerHTML="Press any key to start Game";
    setTimeout(()=>{
    restartGame();
    },2000);

    
  }

}
function btnpress(){
  let btn =this;
  flashbtn(btn);

  let usercolor =btn.getAttribute("id");
  Userseq.push(usercolor);
  checkAnswer(Userseq.length-1);
}

let allbtn =document.querySelectorAll(".btn");
for(ele of allbtn)
{
  ele.addEventListener("click",btnpress);
}

function restartGame()
{
  window.addEventListener("keypress" , function(){
    h3.innerHTML="";
  });
  
  GameStr=false;
  Userseq=[];
  Gameseq =[];
  level=0;
>>>>>>> f0b4a5ab865cd06b4410fdfb73f9532b47fdc549
}