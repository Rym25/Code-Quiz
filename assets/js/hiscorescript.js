
var mainEl = document.createElement("main");
mainEl.innerHTML = '<h1>Hi Scores</h1><div id = "scores"></div><div class = "button-wrapper"><button class="button">Go Back</button><button class="button">Clear Scores</button></div>';
mainEl.style.display = "flex";
mainEl.style.flexFlow = "column";

document.body.appendChild(mainEl);

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



localStorage.setItem("hiscores", JSON.stringify(hiScoresArr));

localStorage.removeItem("Score");