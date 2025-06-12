// Declare variables below to save the different divs of your story.


let storyOpening = document.querySelector('.story-opening');
let leftButton = document.querySelector('.option-one');
let rightButton = document.querySelector('.option-two');
let optionThree = document.querySelector('.option-three');
let optionFour = document.querySelector('.option-four');
let optionFive = document.querySelector('.option-five');
let optionSix = document.querySelector('.option-six');
let optionOnescreen = document.querySelector('.option-one-screen');
let optionTwoscreen = document.querySelector('.option-two-screen');
let optionOneEnd = document.querySelector('.option-one-end');
let optionTwoEnd = document.querySelector('.option-two-end');
let restartButton = document.querySelector('.restart-button');
let optionThreescreen = document.querySelector('.option-three-screen');



// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


leftButton.addEventListener('click', function(){
    optionOnescreen.style.display = 'block';
    storyOpening.style.display = 'none';
    leftButton.style.display = 'none';
    optionThree.style.display = 'block';
    optionFour.style.display = 'block';
    rightButton.style.display = 'none';
});

rightButton.addEventListener('click', function(){
    optionThreescreen.style.display = 'block';
    storyOpening.style.display = 'none';
    leftButton.style.display = 'none';
    rightButton.style.display = 'none';
    optionFive.style.display = 'block';
    optionSix.style.display = 'block';
});

optionThree.addEventListener('click', function(){
   optionOnescreen.style.display = 'none';
   optionTwoscreen.style.display = 'block';
   optionThree.style.display = 'none';
   optionFour.style.display = 'none';
   restartButton.style.display = 'block';
});

optionFour.addEventListener('click', function(){
    optionOnescreen.style.display = 'none';
    optionTwoEnd.style.display = 'block';
    optionThree.style.display = 'none';
    optionFour.style.display = 'none';
    restartButton.style.display = 'block';
});

optionFive.addEventListener('click', function(){
    optionThreescreen.style.display = 'none';
    optionOneEnd.style.display = 'block';
    optionFive.style.display = 'none';
    optionSix.style.display = 'none';
    restartButton.style.display = 'block';
});
optionSix.addEventListener('click', function(){
    optionThreescreen.style.display = 'none';
    optionTwoEnd.style.display = 'block';
    optionFive.style.display = 'none';
    optionSix.style.display = 'none';
    restartButton.style.display = 'block';
});
restartButton.addEventListener('click', function(){
    optionOneEnd.style.display = 'none';
    optionTwoEnd.style.display = 'none';
    optionOnescreen.style.display = 'none';
    optionTwoscreen.style.display = 'none';
    storyOpening.style.display = 'block';
    leftButton.style.display = 'block';
    rightButton.style.display = 'block';
    restartButton.style.display = 'none';
});
