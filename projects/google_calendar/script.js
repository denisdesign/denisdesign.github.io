var request = new XMLHttpRequest();
request.open('GET', 'https://www.googleapis.com/calendar/v3/calendars/simplon.co_7sc0sp073u3svukpopmhob9fmg%40group.calendar.google.com/events?key=AIzaSyADm7UvQFnHmkfo_sei1oZoLvx_X-_mhFI');
request.onload = function() {
  calenData = JSON.parse(request.responseText) ;
  eventList = calenData.items ;
  console.log(eventList);

  createEventDates = function(){
    for (var i = 0; i < eventList.length; i++) {
      if(eventList[i] != undefined){
      var node = document.getElementsByClassName('content')[0];
      var eventBox = document.createElement('div');
      eventBox.classList.add("eventBox");
      eventBox.addEventListener('click' , toggleHideBox);
      node.appendChild(eventBox);
      var node2 = document.getElementsByClassName("eventBox")[i];
      var eventName = document.createElement('p');
      eventName.innerHTML = eventList[i].summary.toUpperCase() ;
      eventName.id = "eventName";
      node2.appendChild(eventName);
      var eventDate = document.createElement('p');
      if (eventList[i].start.dateTime == undefined){
        eventDate.innerHTML = eventList[i].start.date;
      }
      else if (eventList[i].start.date == undefined) {
        eventDate.innerHTML = eventList[i].start.dateTime ;
      }
      else {
        console.log(eventList[i]);
      }
      eventDate.id = "eventDate";
      node2.appendChild(eventDate);
      var more = document.createElement('p');
      more.id = "more" ;
      more.innerHTML = "More..."
      node2.appendChild(more);
      var hidebox = document.createElement('div');
      hidebox.classList.add("hidebox");
      node2.appendChild(hidebox);
      node3 = document.getElementsByClassName("hidebox")[i];
      var author = document.createElement("p");
      author.id = "author" ;
      author.innerHTML = eventList[i].creator.displayName ;
      node3.appendChild(author);
      var dateOfCreation = document.createElement('p');
      dateOfCreation.id = "dateOfCreation";
      dateOfCreation.innerHTML = eventList[i].created ;
      node3.appendChild(dateOfCreation);
    }
    else {
      console.log("Undefined element");
    }
    }
  };
  createEventDates();

}
request.send();

var toggleHideBox = function(){
  var selectHideBox = this.children[3];
  console.log(selectHideBox.style.visibility);

  if (selectHideBox.style.opacity == "0" || selectHideBox.style.opacity == ""){
    selectHideBox.style.height = "60px" ;
    selectHideBox.style.opacity = "1" ;
  }
  else {
    selectHideBox.style.visibility = "0px";
    selectHideBox.style.opacity = "0" ;
    selectHideBox.style.height = "0px" ;
  }
}
