var date = new Date();
var month = date.getMonth();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();



var displayClock = function(){
  displayMonth();
  displayHours();
  displayMinutes();
  displaySeconds();
  }

var displayHours = function(){
  if(hours < 10){document.getElementById("hour").innerHTML = "0" + hours ;}
  else{document.getElementById("hour").innerHTML = "" + hours ;}
}

var displayMinutes = function(){
  if(minutes < 10){document.getElementById("minute").innerHTML = " : 0" + minutes ;}
  else{document.getElementById("minute").innerHTML = " : " + minutes ;}
}

var displaySeconds = function(){
  if(seconds < 10){document.getElementById("second").innerHTML = " : 0" + seconds ;}
  else{document.getElementById("second").innerHTML = " : " + seconds ;}
}

var displayMonth = function(){
  if(month == 0){document.getElementById("month").innerHTML="JANUARY"}
  else if(month == 1){document.getElementById("month").innerHTML="FEBRUARY"}
  else if(month == 2){document.getElementById("month").innerHTML="MARCH"}
  else if(month == 3){document.getElementById("month").innerHTML="APRIL"}
  else if(month == 4){document.getElementById("month").innerHTML="MAY"}
  else if(month == 5){document.getElementById("month").innerHTML="JUNE"}
  else if(month == 6){document.getElementById("month").innerHTML="JULY"}
  else if(month == 7){document.getElementById("month").innerHTML="AUGUST"}
  else if(month == 8){document.getElementById("month").innerHTML="SEPTEMBER"}
  else if(month == 9){document.getElementById("month").innerHTML="OCTOBER"}
  else if(month == 10){document.getElementById("month").innerHTML="NOVEMBER"}
  else {document.getElementById("month").innerHTML="DECEMBER"}
}

var timer = function(){
  setTimeout(function(){
    date = new Date();
    seconds = date.getSeconds();
    minutes = date.getMinutes();
    hours = date.getHours();
    month = date.getMonth();
    displayClock();
    timer();  }, 50 );
}
