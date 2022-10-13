const score = new Map([
    ["Win", 0],
    ["Lose", 0],
    ["Tie", 0]
]);
const imgArr = ['rock', 'paper', 'scissor'];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function isWin(win){
    if(win == true){
        document.getElementsByClassName("titleComp")[0].style.backgroundColor = "red";
        document.getElementsByClassName("titlePlay")[0].style.backgroundColor = "green";
    }
    else{
        document.getElementsByClassName("titleComp")[0].style.backgroundColor = "green";
        document.getElementsByClassName("titlePlay")[0].style.backgroundColor = "red"
    }
}
function refreshScoreboard() {
    const td0 = document.getElementById("Win");
    td0.innerHTML = score.get("Win");
    const td1 = document.getElementById("Lose");
    td1.innerHTML = score.get("Lose");
    const td2 = document.getElementById("Tie");
    td2.innerHTML = score.get("Tie");
}
refreshScoreboard();
function determineOutcome(pick) {
    const compPick = getRandomInt(3);
    document.getElementById("compImg").src = imgArr[compPick] + ".png";
    if (pick == compPick) {
        x = score.get("Tie");
        x += 1;
        score.set("Tie", x);
        document.getElementsByClassName("titleComp")[0].style.backgroundColor = "yellow";
        document.getElementsByClassName("titlePlay")[0].style.backgroundColor = "yellow";
    }
    else if (pick == 0) {
        if (compPick == 1) {
            isWin(false);
            x = score.get("Lose");
            x += 1;
            score.set("Lose", x);
        }
        else {
            isWin(true);
            x = score.get("Win");
            x += 1;
            score.set("Win", x);
        }
    }
    else if (pick == 1) {
        if (compPick == 2) {
            isWin(false);
            x = score.get("Lose");
            x += 1;
            score.set("Lose", x);
        }
        else {
            isWin(true);
            x = score.get("Win");
            x += 1;
            score.set("Win", x);
        }
    }
    else if (pick == 2) {
        if (compPick == 0) {
            isWin(false);
            x = score.get("Lose");
            x += 1;
            score.set("Lose", x);
        }
        else {
            isWin(true);
            x = score.get("Win");
            x += 1;
            score.set("Win", x);
        }
    }
    refreshScoreboard();
}


