let input = document.querySelector("input");
let button = document.querySelector("button");
let computerChoice = document.querySelector(".choices");
let userChoice = document.querySelector(".color");
let resultBtn = document.querySelector(".result-button");
let winScore = document.querySelector(".win");
let loseScore = document.querySelector(".lose");
let clearBtn = document.querySelector(".buton");
let music = new Audio("backgroundMusic.mp3");

window.addEventListener("load", ()=>{
    music.loop = true;
    music.play();
});

let win = 0;
let lose = 0;


button.addEventListener("click", (e) => {
    let userNo = input.value;
    let randomNo = Math.floor(Math.random() * 10);
    
    computerChoice.innerHTML = randomNo;
    userChoice.innerHTML = userNo;
    document.querySelector(".main-game").style.display = "none";
    document.querySelector(".result-container").style.display = "flex";
    
    if (userNo == randomNo) {
        win++;
        winScore.innerHTML = win;
        document.querySelector(".result-message").innerHTML = "You win!";
        document.querySelector(".result-message").style.color = "#1df600";
    } else if (userNo !== randomNo){
        lose++;
        loseScore.innerHTML = lose;
        document.querySelector(".result-message").innerHTML = "You Lose!";
        document.querySelector(".result-message").style.color = "red";
    } 
});

resultBtn.addEventListener("click", () => {
    document.querySelector(".main-game").style.display = "flex";
    document.querySelector(".result-container").style.display = "none";
    input.value = "";
});

    clearBtn.addEventListener("click", () => {
        win = 0;
        lose = 0;
        winScore.innerHTML = 0;
        loseScore.innerHTML = 0;
    });