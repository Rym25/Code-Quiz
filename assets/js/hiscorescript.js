var removeElements = function(parent) {
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    };
};

var mainEl = document.createElement("main");
mainEl.innerHTML = '<h1>Hi Scores</h1><div id = "scores"></div><div class = "button-wrapper"><button id="back" class = "button" >Go Back</button><button id="clear" class = "button" >Clear Scores</button></div>';
mainEl.style.display = "flex";
mainEl.style.flexFlow = "column";

document.body.appendChild(mainEl);

var buttonWrapperEl = document.querySelector(".button-wrapper");

var divEl = document.getElementById("scores");
divEl.style.display = "flex";
divEl.style.flexFlow = "column";

var buttonBackEl = document.querySelector("#back");
buttonBackEl.style.backgroundColor = "blueviolet";
buttonBackEl.style.color = "antiquewhite";
buttonBackEl.style.marginRight = "10px";
buttonBackEl.style.borderRadius = "6px";
buttonBackEl.style.marginTop = "10px";

var buttonClearEl = document.querySelector("#clear");
buttonClearEl.style.backgroundColor = "blueviolet";
buttonClearEl.style.color = "antiquewhite";
buttonClearEl.style.borderRadius = "6px";
buttonClearEl.style.marginTop = "10px";


var hiScoresArr = JSON.parse(localStorage.getItem("hiscores"));
var scorePair = JSON.parse(localStorage.getItem("Score"));
if (scorePair) {
    if (!hiScoresArr) {
        hiScoresArr = [scorePair];
    }
    else {
        for(var i = 0; i <= hiScoresArr.length; i++) {
            if (!hiScoresArr[i]) {
                hiScoresArr.push(scorePair);
                console.log("low score");
                break;
            } else if (scorePair[1]>=hiScoresArr[i][1]) {
                hiScoresArr.splice(i,0,scorePair);
                console.log("added the score in " + (1+i) +" place");
                break;        
            }
            console.log("not hi enough");
        }
    }
}

if (hiScoresArr){
    for (var q = 0; q < hiScoresArr.length; q++) {
        var scoresEl = document.createElement("h5");
        scoresEl.innerText = (q+1) + ". " + hiScoresArr[q][0] + ": " + hiScoresArr[q][1];
        scoresEl.style.backgroundColor = "lightgrey";
        scoresEl.style.margin = "2px";
        scoresEl.style.width = "20%";

        divEl.appendChild(scoresEl);
    }
}

localStorage.setItem("hiscores", JSON.stringify(hiScoresArr));

localStorage.removeItem("Score");

buttonWrapperEl.addEventListener("click", function(event){
    var targetEl = event.target;
    if (targetEl.matches("#back")){
        window.location.href = "./index.html";
    } else if (targetEl.matches("#clear")) {
        localStorage.removeItem("hiscores");
        removeElements(divEl);
    }
})