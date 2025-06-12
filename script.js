// Declare variables below to save the different divs of your story.

let leftButton = document.querySelector('.option-one');
let rightButton = document.querySelector('.option-two');
let optionOnescreen = document.querySelector('.option-one-screen');
let trackButton = document.querySelector('.track');
let keepButton = document.querySelector('.keepLeft');
let insideButton = document.querySelector('#cabin');
let outsideButton = document.querySelector('#keepRight');





// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


leftButton.addEventListener('click', function(){
    window.location.href = "optionone.html";
});

rightButton.addEventListener('click', function(){
    window.location.href = "optiontwo.html";
});

trackButton.addEventListener('click', function(){
    window.location.href ="track.html";
});