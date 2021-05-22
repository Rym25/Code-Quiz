// Gets the html elements we will work with from the page
var mainEl = document.querySelector("#questions");
var articleEl = document.querySelector("#options");
var timeEl = document.querySelector(".timer");

// creates an i for iterating
var i = 0;

// creating a variable for a timer event
var timeVar;

// creates an array with the questions, options, and answers
var qArr = [
    {question: "Commonly used Data Types do not include:", a: "strings", b: "booleans", c: "alerts", d: "numbers", answer: "alerts"},
    {question: "A very useful tool during development and debugging for printing content to the debugger is:", a: "JavaScript", b: "terminal/bash", c: "for loops", d: "console.log", answer: "console.log"},
    {question: "Arrays in JavaScript can be used to store:", a: "numbers and strings", b: "booleans", c: "other arrays", d: "all of the above", answer: "all of the above"},
    {question: "String values must be enclosed by _______ when being assigned to a variable:", a: "quotes", b: "commas", c: "curly brackets", d: "parenthesis", answer: "quotes"},
    {question: "The condition in an if/else statement must be enclosed by _______:", a: "quotes", b: "parenthesis", c: "square brackets", d: "curly brackets", answer: "parenthesis"}    
            ];

// function to style all of the buttons
var styleButton = function (button) {
    button.style.borderRadius = "10px";
    button.style.backgroundColor = "blueviolet";
    button.style.color = "antiquewhite";
    button.style.width = "200px";
    button.style.height = "60px";
    button.style.marginBottom = "10px"
    button.style.fontSize = "20px"
}

// Function to remove all of the childern of an element
var removeElements = function(parent) {
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
};

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
    styleButton(startButtonEl);
    articleEl.appendChild(startButtonEl);
}

// create a function for the quiz state
var nextQuestion = function () {
    // Clears childern from the main and article elements
    removeElements(mainEl);
    removeElements(articleEl);

    // gets question and puts it in the main in an h1
    var h1El = document.createElement("h1");
    h1El.textContent = qArr[i].question;
    h1El.style.textAlign = "Center"
    mainEl.appendChild(h1El);

    // creates the options
    for (var q = 0; q < 4; q++) {
        var arr = ["a","b","c","d"];
        var ButtonEl = document.createElement("button");
        ButtonEl.textContent = (q+1) + ". " + qArr[i][arr[q]];
        ButtonEl.setAttribute("class", "button");
        styleButton(ButtonEl);
        articleEl.appendChild(ButtonEl);
    }
    i++;
    // return i;
}

//if an answer is correct
var checkAnswer = function (targetEl) {
    var submit = targetEl.textContent.substring(3);
    console.log(submit);
    console.log(qArr[(i-1)].answer);
    if (submit !== qArr[(i-1)].answer) {
        var time = document.getElementById("timer").textContent;
            var timeMan = parseInt(time);
            timeMan -= 10;
            if (timeMan <= 0) {
                timeMan = 0;
            }
            timeMan.toString();
            timeEl.innerHTML = "<p>Time:<span id='timer'>" + timeMan + "</span></p>";
            console.log("Wrong Answer");
    } else {
        console.log("Correct Answer");
    }
}

var buttonHandler = function (event) {
    // gets the target of the event
    var targetEl = event.target;
    // calls the first question and starts the timer when the start quiz button is pressed 
    if (targetEl.matches("#start-button")){
        nextQuestion();
        // counts down from 75 updating the timer in the top right will stop when it reaches 0
        timeVar = setInterval(function (stopTime) {
            var time = document.getElementById("timer").textContent;
            var timeMan = parseInt(time);
            timeMan--;
            timeMan.toString();
            if (timeMan <= 0) {
                clearInterval(timeVar);
                console.log("times up go to score page.");
            }
            timeEl.innerHTML = "<p>Time:<span id='timer'>" + timeMan + "</span></p>";
        }, 1000);
        
    } 
    // gets the next question when an answer is given
    else if (targetEl.matches(".button") && i !== 5) {
        checkAnswer(targetEl);
        nextQuestion();
    } 
    // when the last question is answered stops the timer and say the quiz is done
    else if (targetEl.matches(".button")) {
        checkAnswer(targetEl);
        clearInterval(timeVar);
        console.log("done with the quiz");
    }


}
// Calls startState when the page is loaded
startState();

// Event Listener for the start button
articleEl.addEventListener("click", buttonHandler);
