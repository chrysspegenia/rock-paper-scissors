let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll(".button");
const player = document.querySelector(".playerScore");
const computer = document.querySelector(".computerScore");
const announcement = document.querySelector(".announcer");
const winRSound = document.querySelector(".winRSound");
const loseRSound = document.querySelector(".loseRSound");
const winGSound = document.querySelector(".winGSound");
const loseGSound = document.querySelector(".loseGSound");
const drawSound = document.querySelector(".drawSound");
const playAgainSound = document.querySelector(".playAgainSound");
announcement.textContent = "Let's Play! First to get 5 points win.";


buttons.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.id;
    getComputerChoice();
    announcement.textContent = playRound(playerSelection, computerSelection);
    roundResultColor();
    gameResult();
}));



function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * 3)+1;

    switch(randomChoice){
        case 1:
            computerSelection = "rock";
        break;
        case 2:
            computerSelection = "paper";
        break;
        case 3:
            computerSelection = "scissors"
        break;
    }
}



//this function compares the playerSelection and getComputerChoice and returns an appropriate response.
//added code that will add 1 point to whoever won a round.
function playRound(playerSelection, computerSelection){

    let roundResult;

    if (playerSelection == computerSelection){
        roundResult = `It's a tie. You both drew ${playerSelection}.`
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
               (playerSelection == "paper" && computerSelection == "rock") ||
               (playerSelection == "scissors" && computerSelection == "paper")){
                    playerScore++;
                    roundResult = `You won the round. Your ${playerSelection} beats ${computerSelection}.`;
    } else if ((computerSelection == "rock" && playerSelection == "scissors") ||
               (computerSelection == "paper" && playerSelection == "rock") ||
               (computerSelection == "scissors" && playerSelection == "paper")) {
                    computerScore++;
                    roundResult = `You lost the round. Their ${computerSelection} beats your ${playerSelection}.`;
    };

    player.textContent = `${playerScore}`;
    computer.textContent = `${computerScore}`;
    return roundResult;
};


function gameResult(){
    if(playerScore === 5 || computerScore === 5){
        openPopup();
        resultMessage();
    };
}

const popupTitle = document.querySelector(".popupTitle");
const popupMessage = document.querySelector(".popupMessage");

//+= and \r\n works with white-space: pre; in css
function resultMessage(){
    if(playerScore == 5){
        winGSound.play();
        popupTitle.textContent = "Congratulations!\r\n"
        popupTitle.textContent += "You Win!"
        popupMessage.textContent = "Be strong, but not rude.\r\n"
        popupMessage.textContent += "Be kind, but not weak.\r\n"
        popupMessage.textContent += "Be bold, but not bully.\r\n"
        popupMessage.textContent += "Be humble, but not shy.\r\n"
        popupMessage.textContent += "Be confident, but not arrogant.\r\n"
        popupMessage.textContent += "\r\n"
        popupMessage.textContent += "- Zig Ziglar"
    } else if(computerScore == 5) {
        loseGSound.play();
        popupTitle.textContent = "You Lost! Try Again."
        popupMessage.textContent = "If you fall behind, run faster.\r\n"
        popupMessage.textContent += "Never give up, never surrender,\r\n" 
        popupMessage.textContent += "and rise up against the odds.\r\n"
        popupMessage.textContent += "\r\n"
        popupMessage.textContent += "- Jesse Jackson"
    }
}

//for popup message
let popup = document.getElementById("popupId");
let playAgain = document.querySelector(".playagainBtn");

function openPopup(){
    popup.classList.add("open-popup");
}

playAgain.addEventListener("click", () => {
    playAgainSound.play();
    playerScore = 0;
    computerScore = 0;
    player.textContent = 0;
    computer.textContent = 0;
    loseGSound.pause();
    winGSound.pause();
    announcement.textContent = "Guess you want to go again. First to 5 point wins."
    popup.classList.remove("open-popup");
});

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const compRock = document.getElementById("compRock");
const compPaper = document.getElementById("compPaper");
const compScissors = document.getElementById("compScissors");


function roundResultColor(){
    if(playerSelection == "rock" && computerSelection == "scissors"){
        rockBtn.classList.replace("icon","roundWin");
        rockBtn.style.transform = "scaleX(-1)"
        compScissors.classList.replace("icon","roundLose");
        winRSound.currentTime = 0;
        winRSound.play();
        setTimeout(() => {
            rockBtn.classList.replace("roundWin", "icon");
            compScissors.classList.replace("roundLose", "icon");
        }, 1000);
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        paperBtn.classList.replace("icon","roundWin");
        paperBtn.style.transform = "scaleX(-1)"
        compRock.classList.replace("icon","roundLose");
        winRSound.currentTime = 0;
        winRSound.play();
        setTimeout(() => {
            paperBtn.classList.replace("roundWin", "icon");
            compRock.classList.replace("roundLose", "icon");
        }, 1000);
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        scissorsBtn.classList.replace("icon","roundWin");
        scissorsBtn.style.transform = "scaleX(-1)"
        compPaper.classList.replace("icon","roundLose");
        winRSound.currentTime = 0;
        winRSound.play();
        setTimeout(() => {
            scissorsBtn.classList.replace("roundWin", "icon");
            compPaper.classList.replace("roundLose", "icon");
        }, 1000);
    } else if(computerSelection == "rock" && playerSelection == "scissors"){
        compRock.classList.replace("icon","roundWin");
        scissorsBtn.classList.replace("icon","roundLose");
        scissorsBtn.style.transform = "scaleX(-1)";
        loseRSound.currentTime = 0;
        loseRSound.play();
        setTimeout(() => {
            compRock.classList.replace("roundWin", "icon");
            scissorsBtn.classList.replace("roundLose", "icon");
        }, 1000);
    } else if(computerSelection == "paper" && playerSelection == "rock"){
        compPaper.classList.replace("icon","roundWin");
        rockBtn.classList.replace("icon","roundLose");
        rockBtn.style.transform = "scaleX(-1)";
        loseRSound.currentTime = 0;
        loseRSound.play();
        setTimeout(() => {
            compPaper.classList.replace("roundWin", "icon");
            rockBtn.classList.replace("roundLose", "icon");
        }, 1000);
    } else if(computerSelection == "scissors" && playerSelection == "paper"){
        compScissors.classList.replace("icon","roundWin");
        paperBtn.classList.replace("icon","roundLose");
        paperBtn.style.transform = "scaleX(-1)";
        loseRSound.currentTime = 0;
        loseRSound.play();
        setTimeout(() => {
            compScissors.classList.replace("roundWin", "icon");
            paperBtn.classList.replace("roundLose", "icon");
        }, 1000);
    } else if(computerSelection == "rock" && playerSelection == "rock"){
        compRock.classList.replace("icon","roundTie");
        rockBtn.classList.replace("icon","roundTie");
        rockBtn.style.transform = "scaleX(-1)";
        drawSound.currentTime = 0;
        drawSound.play();
        setTimeout(() => {
            compRock.classList.replace("roundTie", "icon");
            rockBtn.classList.replace("roundTie", "icon");
        }, 1000);
    } else if(computerSelection == "paper" && playerSelection == "paper"){
        compPaper.classList.replace("icon","roundTie");
        paperBtn.classList.replace("icon","roundTie");
        paperBtn.style.transform = "scaleX(-1)";
        drawSound.currentTime = 0;
        drawSound.play();
        setTimeout(() => {
            compPaper.classList.replace("roundTie", "icon");
            paperBtn.classList.replace("roundTie", "icon");
        }, 1000);
    } else if(computerSelection == "scissors" && playerSelection == "scissors"){
        compScissors.classList.replace("icon","roundTie");
        scissorsBtn.classList.replace("icon","roundTie");
        scissorsBtn.style.transform = "scaleX(-1)";
        drawSound.currentTime = 0;
        drawSound.play();
        setTimeout(() => {
            compScissors.classList.replace("roundTie", "icon");
            scissorsBtn.classList.replace("roundTie", "icon");
        }, 1000);
    } 
}


document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const divider = document.querySelector(".divider");
    const rect = divider.getBoundingClientRect();
    const dividerX = rect.left + rect.width /2;
    const dividerY = rect.top + rect.height /2;

    const angleDeg = angle(mouseX, mouseY, dividerX, dividerY);

    divider.style.filter = `hue-rotate(${30 + angleDeg}deg)`;


    // const bird = document.querySelector("#eyeContainer");
    // const birdRect = bird.getBoundingClientRect();
    // const birdX = birdRect.left + birdRect.width /2;
    // const birdY = birdRect.top + birdRect.height /2;

    // const angleDegBird = angle(mouseX, mouseY, birdX, birdY);
    // console.log(angleDegBird)
    // const eyes = document.querySelectorAll(".birdEye")
    // eyes.forEach(birdEye => {
    //     birdEye.style.transform = `rotate(${230 + angleDegBird}deg)`;
    // })
})


function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - ey;
    const rad = Math.atan2(dx, dy);
    const deg = rad * 180 / Math.PI;
    return deg;
}
