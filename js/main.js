// Code written by Ankit Dwivedi

// Initializing DOM elements
const welcome = document.querySelector(".welcome");
const card = document.querySelector(".card");
const clickMe = document.querySelector(".clickMe");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

// A counter to count the number of clicks
// Frankly, it has no use except to unset the values for background gradient animation
let count = 0;

// This is our random colour generator function.
function generateRandomColour()
{
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

// This function unsets the background gradient animation
function unsetBackgroundAnimation() {
    body.style.animationIterationCount = "unset";
    body.style.background = "unset";
    body.style.backgroundSize = "unset";
}

// This function will change the colour of the background randomly
function change()
{
    if (count === 0)
    {
        unsetBackgroundAnimation();
    }
    clickMe.style.animationName = "hit";
    let colour = generateRandomColour();
    body.style.backgroundColor = colour;
    count++;
    setTimeout(() => {
        clickMe.style.animationName = "unset";
    }, 50);
}

// The code below is just to que the animation accordingly.

setTimeout(() => {
    welcome.classList.add("animate");
    setTimeout(() => {
        card.classList.add("animate");
        card.style.height = "200px";
        nav.classList.add("animate");
        setTimeout(() => {
            nav.style.opacity = "1";
            welcome.innerHTML = "<span class='hi'>Background</span> colour changer!";
            welcome.classList.add("animateStay");
            welcome.style.fontSize = "25px";
            welcome.style.opacity = "1";
            welcome.style.transform = "translate(0px, 0%)";
            setTimeout(() => {
                welcome.classList.add("up");
                welcome.style.transform = "translate(0px, -75%)";
                setTimeout(() => {
                    clickMe.classList.add("liftUp");
                    clickMe.style.opacity = "1";
                    setTimeout(() => {
                        clickMe.style.animationDuration = "0.05s";
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
        
    }, 1000);
}, 1000);


// The below function redirect to my Github account on a new tab.
function myGithub()
{
    window.open("https://github.com/iamankitdwivedi", "_blank");
}