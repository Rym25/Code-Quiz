// Gets the html elements we will work with from the page
var mainEl = document.querySelector("#questions");
var articleEl = document.querySelector("#options");
var timeEl = document.querySelector("#timer");

var styleButton = function (button) {
    
}
// Function that sets the starting state
var startState = function () {
    
    // creates a h1 element sets the text content and appends it as a child of the main element
    var h1El = document.createElement("h1");
    h1El.textContent = "Coding Quiz Challenge";
    h1El.style.textAlign = "Center"
    mainEl.appendChild(h1El);

    //creates a p element sets the text content and appends it as a child of the main element
    var pEl = document.createElement("p");
    pEl.textContent = "Try to answer the following code related question in the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds.";
    pEl.style.textAlign = "center"
    mainEl.appendChild(pEl);

    // creates a button that say "Start Quiz" and adds it to the article element
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start Quiz";
    startButtonEl.setAttribute("id", "start-button");
    startButtonEl.style.borderRadius = "6px";
    startButtonEl.style.backgroundColor = "blueviolet";
    startButtonEl.style.color = "antiquewhite"
    articleEl.appendChild(startButtonEl);
}

startState();

document.querySelector("#start-button").addEventListener("click", function() {
    console.log("start the quiz");
})