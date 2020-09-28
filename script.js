
var dest = new Date("Sept 27 , 2020 00:00:00").getTime()

var x = setInterval(function(){
var now = new Date().getTime();

var diff = (dest - now)

var days = Math.floor( diff/ (1000* 60*60*24))

var hours = Math.floor((diff % (1000* 60 *60 * 24)) / (1000 * 60 * 60))

var minutes =  Math.floor((diff % (1000* 60 * 60)) / (1000 * 60))

var seconds =  Math.floor((diff % (1000 * 60)) / 1000)

var newDays = document.getElementById("days")
var newHours = document.getElementById("hours")
var newMinutes = document.getElementById("minutes")
var newSeconds = document.getElementById("seconds")

newDays.innerHTML = days
newHours.innerHTML = hours
newMinutes.innerHTML = minutes
newSeconds.innerHTML = seconds
}, 1000)


AOS.init();


var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });