//LANGUAGE

var lang = navigator.language || navigator.userLanguage ; //grabs the language the browser is using
var langClass = document.getElementsByClassName("lang")[0];
var displayLang = function(){
  if (lang != "fr") {
    langClass.innerText = "en";
  }
  else {
    langClass.innerText = "fr";
  }
}



//ANIMATIONS

var jumptoTop = function(){
  $("html, body").animate({ scrollTop: "0px" }, 300);
}

var jumpDown = function(){
  $("html, body").animate({ scrollTop: "600px" }, 300);
}

//HIDE BUST WHEN AT TOP OF PAGE



var bust = document.getElementsByClassName("bust")[0];
var continueButton = document.getElementsByClassName("continueButton")[0];

var hidebust = function(){
  var pagePosition = window.pageYOffset;
  if(pagePosition == 0 ){
    bust.style.opacity = "0" ;
  }
  else {
    bust.style.opacity = "1";
  }
}

var hideContinue = function(){
  var pagePosition = window.pageYOffset;
  if(pagePosition > 199 ){
    continueButton.style.transform = "scaleY(0)" ;
  }
  else {
    continueButton.style.transform = "scaleY(1)";
  }
}

var scrollHide = function(){
  hideContinue();
  hidebust();
}

//SPEECH

var speech = document.getElementsByClassName("speech")[0];
var sentences = ["<3" , "Hello !" , "I'm bored!!"];

var showSpeech = function(){
  setTimeout(function(){
    var i = Math.floor(Math.random() * sentences.length) ;
    speech.innerText = sentences[i];
   }, 200);
}
var hideSpeech = function(){
  speech.innerText = "" ;
  setTimeout(function(){
  speech.innerText = "" ;},200);
  }


//SLIDER

var siteIndex = 1;
selectSite(siteIndex);
//start with first site
function changeSite(n) { selectSite(siteIndex += n); }
//this allows the arrows to change sites
function currentSite(n) { selectSite(siteIndex = n); }
//this allows the dots to change sites
function selectSite(n) {
  var i;
  var x = document.getElementsByClassName("sitePreview");//collect all sites
  var dots = document.getElementsByClassName("showboxSelector");//collects all dots
  if (n > x.length) {siteIndex = 1}//if click back at first site it jumps to last site
  if (n < 1) {siteIndex = x.length}//otherwise it jumps back to one
  for (i = 0; i < x.length; i++) {//goes to all the sites and hides them then shows only the one needed
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {//then it does the same to the dots or as I call them "selectors"
     dots[i].className = dots[i].className.replace(" currentSelection", "");
  }
  x[siteIndex-1].style.display = "block";//then it shows the selected site
  dots[siteIndex-1].className += " currentSelection"; //and same to the dot
}
