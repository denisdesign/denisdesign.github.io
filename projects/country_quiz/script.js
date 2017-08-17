//VARIABLES

var english = [{cnt:'france' , cap:'paris'},
               {cnt:'spain' , cap:'madrid'},
               {cnt:'germany' , cap:'berlin'},
               {cnt:'england' , cap:'london'},
               {cnt:'australia' , cap:'canberra'},
               {cnt:'usa' , cap:'washington dc'},
               {cnt:'china' , cap:'beijing'},
               {cnt:'sweden' , cap:'stockholm'},
               {cnt:'italy' , cap:'rome'},
               {cnt:'greece' , cap:'athens'},
               {cnt:'japan' , cap:'tokyo'},
               {cnt:'russia' , cap:'moscow'},
               {cnt:'brazil' , cap:'brasilia'},
               {cnt:'chile' , cap:'santiago'},
               {cnt:'belgium' , cap:'brussels'},
               {cnt:'egypt' , cap:'cairo'},
               {cnt:'estonia' , cap:'tallinn'},
               {cnt:'malta' , cap:'vallette'},
               {cnt:'mexico' , cap:'mexico city'},
               {cnt:'new zealand' , cap:'wellington'},
               {cnt:'nigeria' , cap:'abuja'},
               {cnt:'romania' , cap:'bucharest'},
               {cnt:'thailand' , cap:'bangkok'},
               {cnt:'netherlands' , cap:'amsterdam'},
               {cnt:'turkey' , cap:'ankara'},
               {cnt:'india' , cap:'new delhi'},
               {cnt:'portugal' , cap:'lisbon'},
               {cnt:'ireland' , cap:'dublin'},
               {cnt:'haiti' , cap:'port-au-prince'},
               {cnt:'madagascar' , cap:'antananarivo'},
               {cnt:'nepal' , cap:'kathmandu'},
               {cnt:'scotland' , cap:'edinburgh'}];
var french = [{cnt:'france' , cap:'paris'},
              {cnt:'espagne' , cap:'madrid'},
              {cnt:'allemagne' , cap:'berlin'},
              {cnt:'angleterre' , cap:'londres'},
              {cnt:'australie' , cap:'canberra'},
              {cnt:'etats-unis' , cap:'washington dc'},
              {cnt:'chine' , cap:'beijing'},
              {cnt:'suede' , cap:'stockholm'},
              {cnt:'italie' , cap:'rome'},
              {cnt:'grece' , cap:'athenes'},
              {cnt:'japon' , cap:'tokyo'},
              {cnt:'russie' , cap:'moscou'},
              {cnt:'bresil' , cap:'brasilia'},
              {cnt:'chili' , cap:'santiago'},
              {cnt:'belgique' , cap:'bruxelles'},
              {cnt:'egypte' , cap:'le caire'},
              {cnt:'estonie' , cap:'tallinn'},
              {cnt:'malte' , cap:'la vallette'},
              {cnt:'mexique' , cap:'mexico'},
              {cnt:'nouvelle-zelande' , cap:'wellington'},
              {cnt:'nigeria' , cap:'abuja'},
              {cnt:'roumanie' , cap:'bucarest'},
              {cnt:'thailande' , cap:'bangkok'},
              {cnt:'pays-bas' , cap:'amsterdam'},
              {cnt:'turquie' , cap:'ankara'},
              {cnt:'inde' , cap:'new delhi'},
              {cnt:'portugal' , cap:'lisbonne'},
              {cnt:'irelande' , cap:'dublin'},
              {cnt:'haiti' , cap:'port-au-prince'},
              {cnt:'madagascar' , cap:'antananarivo'},
              {cnt:'nepal' , cap:'katmandou'},
              {cnt:'ecosse' , cap:'edimbourg'}];

var answer1 ;
var answer2 ;
var tries = 5;
var score = 0;
var chosenCnt ;
var time = 25;
var streak = 0;
var showstreak ;
var questionFocus = document.getElementById("question1");

//CHOOSING THE FIRST OBJECT AND THE REST

var chooseCnt = function(){
  chosenCnt = Math.floor(Math.random()*english.length);
  console.log(english[chosenCnt].cnt);
  console.log(english[chosenCnt].cap);
  addFlag();
  chooseHint();
}

// RANDOMLY CHOOSING A OBJECT SETTING TO DISPLAY

var chooseHint = function(){
  var choice = Math.random();
  if (choice < .25) {document.getElementById("hint").innerHTML = english[chosenCnt].cnt}
  else if (choice < .50) {document.getElementById("hint").innerHTML = english[chosenCnt].cap}
  else if (choice < .75) {document.getElementById("hint").innerHTML = french[chosenCnt].cnt}
  else {document.getElementById("hint").innerHTML = french[chosenCnt].cap}
  console.log(choice);
}

var callHelp = function(){
  tries -= 1;
  document.getElementById("hint").style.visibility = "visible";
  document.getElementById("triesbar").innerHTML = "Tries : " + tries;
  document.getElementById("pointLose").style.animationName = "scoreUp";
  setTimeout(resetAnim,1200);
  document.getElementById("help").style.color = "rgba(0,0,0,0.5)";
  document.getElementById("help").style.pointerEvents = "none";
  checkGame();
}

var clearHelp = function(){
  document.getElementById("help").style.color = "#fafff0";
  document.getElementById("help").style.pointerEvents = "all";
  document.getElementById("hint").style.visibility = "hidden";
}

// ADDING AND PLAYING SOUNDS

var winSound = function(){
  sTp = document.getElementById("correct");
  sTp.play();
}
var loseSound = function(){
  sTp = document.getElementById("wrong");
  sTp.play();
}
var finishSound = function(){
  sTp = document.getElementById("finished");
  sTp.play();
}
// CHEKING GAME AND ENDING GAME

var endGame = function(){
  document.getElementById("gameOver").style.animationName = "gameOverAnim";
  finishSound();
  document.getElementById("goButton").style.pointerEvents = "none";
  document.getElementById("watch").style.animationName = "clockRing";
  setTimeout(function(){document.getElementById("gameOver").style.top = 0},800);
  document.getElementById("gameOver").innerHTML = "Game Over<br>Total Score : " + score;
  time = 0;
}

var checkGame = function(){
  if (english.length == 0 || tries == 0){
    endGame();
  }
}

// ADDING FLAG TO OBJECT

var addFlag = function(){
  if(english[chosenCnt].cnt == "france"){document.getElementById("flag").style.backgroundImage = "url(flags/france.png)"}
  else if (english[chosenCnt].cnt == "spain"){document.getElementById("flag").style.backgroundImage = "url(flags/spain.png)"}
  else if (english[chosenCnt].cnt == "germany"){document.getElementById("flag").style.backgroundImage = "url(flags/germany.png)"}
  else if (english[chosenCnt].cnt == "england"){document.getElementById("flag").style.backgroundImage = "url(flags/england.png)"}
  else if (english[chosenCnt].cnt == "australia"){document.getElementById("flag").style.backgroundImage = "url(flags/australia.png)"}
  else if (english[chosenCnt].cnt == "china"){document.getElementById("flag").style.backgroundImage = "url(flags/china.png)"}
  else if (english[chosenCnt].cnt == "usa"){document.getElementById("flag").style.backgroundImage = "url(flags/usa.png)"}
  else if (english[chosenCnt].cnt == "sweden"){document.getElementById("flag").style.backgroundImage = "url(flags/sweden.png)"}
  else if (english[chosenCnt].cnt == "japan"){document.getElementById("flag").style.backgroundImage = "url(flags/japan.png)"}
  else if (english[chosenCnt].cnt == "russia"){document.getElementById("flag").style.backgroundImage = "url(flags/russia.png)"}
  else if (english[chosenCnt].cnt == "greece"){document.getElementById("flag").style.backgroundImage = "url(flags/greece.png)"}
  else if (english[chosenCnt].cnt == "italy"){document.getElementById("flag").style.backgroundImage = "url(flags/italy.png)"}
  else if (english[chosenCnt].cnt == "brazil"){document.getElementById("flag").style.backgroundImage = "url(flags/brazil.png)"}
  else if (english[chosenCnt].cnt == "chile"){document.getElementById("flag").style.backgroundImage = "url(flags/chile.png)"}
  else if (english[chosenCnt].cnt == "belgium"){document.getElementById("flag").style.backgroundImage = "url(flags/belgium.png)"}
  else if (english[chosenCnt].cnt == "egypt"){document.getElementById("flag").style.backgroundImage = "url(flags/egypt.png)"}
  else if (english[chosenCnt].cnt == "estonia"){document.getElementById("flag").style.backgroundImage = "url(flags/estonia.png)"}
  else if (english[chosenCnt].cnt == "malta"){document.getElementById("flag").style.backgroundImage = "url(flags/malta.png)"}
  else if (english[chosenCnt].cnt == "mexico"){document.getElementById("flag").style.backgroundImage = "url(flags/mexico.png)"}
  else if (english[chosenCnt].cnt == "new zeland"){document.getElementById("flag").style.backgroundImage = "url(flags/newzeland.png)"}
  else if (english[chosenCnt].cnt == "nigeria"){document.getElementById("flag").style.backgroundImage = "url(flags/nigeria.png)"}
  else if (english[chosenCnt].cnt == "romania"){document.getElementById("flag").style.backgroundImage = "url(flags/romania.png)"}
  else if (english[chosenCnt].cnt == "thailand"){document.getElementById("flag").style.backgroundImage = "url(flags/thailand.png)"}
  else if (english[chosenCnt].cnt == "netherlands"){document.getElementById("flag").style.backgroundImage = "url(flags/netherlands.png)"}
  else if (english[chosenCnt].cnt == "turkey"){document.getElementById("flag").style.backgroundImage = "url(flags/turkey.png)"}
  else if (english[chosenCnt].cnt == "india"){document.getElementById("flag").style.backgroundImage = "url(flags/india.png)"}
  else if (english[chosenCnt].cnt == "portugal"){document.getElementById("flag").style.backgroundImage = "url(flags/portugal.png)"}
  else if (english[chosenCnt].cnt == "ireland"){document.getElementById("flag").style.backgroundImage = "url(flags/ireland.png)"}
  else if (english[chosenCnt].cnt == "haiti"){document.getElementById("flag").style.backgroundImage = "url(flags/haiti.png)"}
  else if (english[chosenCnt].cnt == "madagascar"){document.getElementById("flag").style.backgroundImage = "url(flags/madagascar.png)"}
  else if (english[chosenCnt].cnt == "nepal"){document.getElementById("flag").style.backgroundImage = "url(flags/nepal.png)"}
  else if (english[chosenCnt].cnt == "scotland"){document.getElementById("flag").style.backgroundImage = "url(flags/scotland.png)"}
  else{console.log("Done!");}
}

//DEFINING FUNCTION

var addAnswer = function(e){
  if(e.which == 13 || e == "gogo"){
    answer1 = document.getElementById("question1").value;
    answer2 = document.getElementById("question2").value;
    answer1 = answer1.toLowerCase();
    answer2 = answer2.toLowerCase();
    callCompare();
  }
}

//COMPARE FUNCTION

var callCompare = function(){
  clearHelp();
  document.getElementById("question1").focus();
  if(answer1 == english[chosenCnt].cnt || answer1 == french[chosenCnt].cnt){
    if(answer2 == english[chosenCnt].cap || answer2 == french[chosenCnt].cap){
      win();
    }
    else{
      lose();
    }
  }
    else{
      lose();
    }
}

//ANIM RESET

var resetAnim = function(){
  document.getElementById("timeWin").style.animationName = "";
  document.getElementById("timeLose").style.animationName = "";
  document.getElementById("pointWin").style.animationName = "";
  document.getElementById("pointLose").style.animationName = "";
  console.log("Timer");
}

//WIN FUNCTION

var win = function(){
  streak += 1 ;
  score += 1;
  time += streak + 5;
  showstreak = 5 + streak;
  document.getElementById("spree").innerHTML = "Streak : " + streak;
  document.getElementById("scorebar").innerHTML = "Score : " + score;
  document.getElementById("timeWin").innerHTML = "+" + showstreak + "s"
  document.getElementById("pointWin").style.animationName = "scoreUp";
  document.getElementById("timeWin").style.animationName = "timeUp";
  document.getElementById("question1").value = "";
  document.getElementById("question2").value = "";
  console.log("Score is :" + score);
  winSound();
  setTimeout(resetAnim,1200);
  english.splice(chosenCnt,1);
  french.splice(chosenCnt,1);
  if(english.length > 0){chooseCnt();}
  checkGame();
}

//LOSE FUNCTION

var lose = function(){
  document.getElementById("question1").value = "";
  document.getElementById("question2").value = "";
  tries -= 1;
  time -= 1;
  streak = 0;
  showstreak = 10;
  document.getElementById("spree").innerHTML = "Streak : " + streak;
  document.getElementById("triesbar").innerHTML = "Tries : " + tries;
  document.getElementById("pointLose").style.animationName = "scoreUp";
  document.getElementById("timeLose").style.animationName = "timeDown";
  loseSound();
  setTimeout(resetAnim,1200);
  console.log("Tries =" + tries);
  if(english.length > 0){chooseCnt();}
  checkGame();
}

//TIMER FUNCTION

var timer = function(){
    setTimeout(function(){
      document.getElementById("clock").innerHTML =": "+ time +"s";
      if(time > 0){
      time -= 1;
      timer();}
      else {
      endGame();
      }
    },1000);
  }

// START GAME

var startGame = function(){
  timer();
  chooseCnt();
//  document.getElementById("buttonHide").style.animationName = "buttonUp";
  document.getElementById("topHide").style.animationName = "sliderUp";
  document.getElementById("bottomHide").style.animationName = "sliderDown";
  setTimeout(hideStarter,600);
}

var hideStarter = function(){
  document.getElementById("buttonHide").style.visibility = "hidden";
  document.getElementById("topHide").style.visibility = "hidden";
  document.getElementById("bottomHide").style.visibility = "hidden";
}
