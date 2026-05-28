
console.log("Welcome to Community Portal");

window.onload = function(){

  alert("Page Loaded Successfully");

}



const eventName = "Music Festival";

const eventDate = "20 March 2026";

let seats = 50;

console.log(
`${eventName} on ${eventDate}`
);


let events = [

  {
    id:1,
    name:"Music Festival",
    category:"Music",
    seats:50
  },

  {
    id:2,
    name:"Sports Event",
    category:"Sports",
    seats:30
  },

  {
    id:3,
    name:"Food Festival",
    category:"Food",
    seats:20
  }

];



const eventContainer =
document.querySelector(".event-container");

function displayEvents(){

  eventContainer.innerHTML = "";

  events.forEach(event => {

    const card =
    document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `

      <h3>${event.name}</h3>

      <p>Category: ${event.category}</p>

      <p>Seats Available: ${event.seats}</p>

      <button onclick="registerUser(${event.id})">
      Register
      </button>

    `;

    eventContainer.appendChild(card);

  });

}

displayEvents();



function registerUser(id){

  try{

    const event =
    events.find(event => event.id === id);

    if(event.seats > 0){

      event.seats--;

      alert(
      `Registered for ${event.name}`
      );

      displayEvents();

    }

    else{

      throw new Error("No Seats Available");

    }

  }

  catch(error){

    alert(error.message);

  }

}


function addEvent(name,category,seats){

  events.push({

    id:events.length + 1,

    name:name,

    category:category,

    seats:seats

  });

  displayEvents();

}

function filterEventsByCategory(category){

  const filtered =
  events.filter(event =>
  event.category === category);

  console.log(filtered);

}


function registrationCounter(){

  let total = 0;

  return function(){

    total++;

    return total;

  }

}

const countRegistrations =
registrationCounter();


function Event(name,seats){

  this.name = name;

  this.seats = seats;

}

Event.prototype.checkAvailability =
function(){

  return this.seats > 0
  ? "Available"
  : "Full";

}



events.push({

  id:4,
  name:"Workshop",
  category:"Education",
  seats:15

});

const musicEvents =
events.filter(event =>
event.category === "Music");

console.log(musicEvents);

const eventTitles =
events.map(event =>
event.name);

console.log(eventTitles);



const form =
document.getElementById("eventForm");

if(form){

form.addEventListener("submit",
function(event){

event.preventDefault();

const name =
form.elements[0].value;

const email =
form.elements[1].value;

if(name === "" || email === ""){

alert("Please Fill All Fields");

}

else{

alert("Registration Successful");

}

});

}


function countCharacters(){

  const text =
  document.getElementById("feedback").value;

  document.getElementById("charCount").innerHTML =

  "Characters: " + text.length;

}


function validatePhone(input){

  const phone = input.value;

  if(phone.length < 10){

    alert("Invalid Phone Number");

  }

}



function showFee(){

  const event =
  document.getElementById("eventType").value;

  let fee = "";

  if(event === "Music Festival"){

    fee = "Entry Fee: ₹200";

  }

  else if(event === "Sports Event"){

    fee = "Entry Fee: ₹150";

  }

  else if(event === "Food Festival"){

    fee = "Entry Fee: ₹100";

  }

  document.getElementById("fee").innerHTML =
  fee;

}


function videoReady(){

  document.getElementById("videoMessage")
  .innerHTML =
  "Video Ready To Play";

}



function findLocation(){

navigator.geolocation.getCurrentPosition(

success,
error,

{enableHighAccuracy:true}

);

}

function success(position){

document.getElementById("location").innerHTML =

"Latitude: " +

position.coords.latitude +

"<br>Longitude: " +

position.coords.longitude;

}

function error(){

alert("Location Permission Denied");

}



fetch(
"https://jsonplaceholder.typicode.com/posts"
)

.then(response => response.json())

.then(data => {

console.log(data);

})

.catch(error => {

console.log(error);

});



async function loadData(){

try{

const response =
await fetch(
"https://jsonplaceholder.typicode.com/users"
);

const data =
await response.json();

console.log(data);

}

catch(error){

console.log(error);

}

}

loadData();


document.addEventListener("keydown",
function(){

console.log("Typing...");

});



window.onbeforeunload = function(){

return "Are you sure you want to leave?";

}