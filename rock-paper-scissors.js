let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll(".button");
const player = document.querySelector(".playerScore");
const computer = document.querySelector(".computerScore");
const announcement = document.querySelector(".announcer");
announcement.textContent = "Let's Play! First to get 5 points win.";


//TRIAL
//let result;
const playerText = document.querySelector(".playerText");
const computerText = document.querySelector(".computerText");
const resultText = document.querySelector(".resultText");

buttons.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.id;
    getComputerChoice();
    announcement.textContent = playRound(playerSelection, computerSelection);
    roundResultColor();
    gameResult();

    //temporary
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    resultText.textContent = announcer();
}));
//END  TRial


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


//displays a message whenever the player or computer scores
function announcer(){
    let announcement;

//    if (playerScore == 0 && computerScore == 0){
//        announcement = "Let's play.";
//    } else if (playerScore == 5){
//        announcement = "You're the winner.";
//        playerScore = 0;
//        computerScore = 0;
//    } else if (computerScore == 5){
//        announcement = "You lost.";
 //       playerScore = 0;
 //       computerScore = 0;
 //   } else if (playerScore > computerScore){
 //       announcement = "You won the round."
 //   } else if (computerScore > playerScore){
 //       announcement = "You lost this round."
 //   } else {
 //       announcement = "It's a tie."
 //   }




    if (playerScore === 1){
        announcement = "Good Job."
    } else if (computerScore === 1){
        announcement = "That's one for the computer."
    } else if (playerScore === 2){
        announcement = "Alright! You'll win if you keep at it."
    } else if (computerScore === 2){
        announcement = "The computer is really going for it"
    } else if (playerScore === 3){
        announcement = "*Chandler celebration dance*"
    } else if (computerScore === 3){
        announcement = "This computer is good. I wonder if its cheating?"
    } else if (playerScore === 4){
        announcement = "One more to go."
    } else if (computerScore === 4){
        announcement = "The computer only needs 1 more win."
    } else if (playerScore === 5){
        announcement = "You've done it. You won!"
    } else if (computerScore === 5){
        announcement = "The computer won the match."
    } else if (playerScore === computerScore){
        announcement = "Let's keep going the match is'nt over"
    } 

    return `${announcement}`;
}


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
    playerScore = 0;
    computerScore = 0;
    player.textContent = 0;
    computer.textContent = 0;
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
        setTimeout(() => {
            rockBtn.classList.replace("roundWin", "icon");
            compScissors.classList.replace("roundLose", "icon");
        }, 1000);
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        paperBtn.classList.replace("icon","roundWin");
        paperBtn.style.transform = "scaleX(-1)"
        compRock.classList.replace("icon","roundLose");
        setTimeout(() => {
            paperBtn.classList.replace("roundWin", "icon");
            compRock.classList.replace("roundLose", "icon");
        }, 1000);
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        scissorsBtn.classList.replace("icon","roundWin");
        scissorsBtn.style.transform = "scaleX(-1)"
        compPaper.classList.replace("icon","roundLose");
        setTimeout(() => {
            scissorsBtn.classList.replace("roundWin", "icon");
            compPaper.classList.replace("roundLose", "icon");
        }, 1000);
    } else if(computerSelection == "rock" && playerSelection == "scissors"){
        compRock.classList.replace("icon","roundWin");
        scissorsBtn.classList.replace("icon","roundLose");
        scissorsBtn.style.transform = "scaleX(-1)";
        setTimeout(() => {
            compRock.classList.replace("roundWin", "icon");
            scissorsBtn.classList.replace("roundLose", "icon");
        }, 1000);
    } else if(computerSelection == "paper" && playerSelection == "rock"){
        compPaper.classList.replace("icon","roundWin");
        rockBtn.classList.replace("icon","roundLose");
        rockBtn.style.transform = "scaleX(-1)";
        setTimeout(() => {
            compPaper.classList.replace("roundWin", "icon");
            rockBtn.classList.replace("roundLose", "icon");
        }, 1000);
    } else if(computerSelection == "scissors" && playerSelection == "paper"){
        compScissors.classList.replace("icon","roundWin");
        paperBtn.classList.replace("icon","roundLose");
        paperBtn.style.transform = "scaleX(-1)";
        setTimeout(() => {
            compScissors.classList.replace("roundWin", "icon");
            paperBtn.classList.replace("roundLose", "icon");
        }, 1000);
    } else if(computerSelection == "rock" && playerSelection == "rock"){
        compRock.classList.replace("icon","roundTie");
        rockBtn.classList.replace("icon","roundTie");
        rockBtn.style.transform = "scaleX(-1)";
        setTimeout(() => {
            compRock.classList.replace("roundTie", "icon");
            rockBtn.classList.replace("roundTie", "icon");
        }, 1000);
    } else if(computerSelection == "paper" && playerSelection == "paper"){
        compPaper.classList.replace("icon","roundTie");
        paperBtn.classList.replace("icon","roundTie");
        paperBtn.style.transform = "scaleX(-1)";
        setTimeout(() => {
            compPaper.classList.replace("roundTie", "icon");
            paperBtn.classList.replace("roundTie", "icon");
        }, 1000);
    } else if(computerSelection == "scissors" && playerSelection == "scissors"){
        compScissors.classList.replace("icon","roundTie");
        scissorsBtn.classList.replace("icon","roundTie");
        scissorsBtn.style.transform = "scaleX(-1)";
        setTimeout(() => {
            compScissors.classList.replace("roundTie", "icon");
            scissorsBtn.classList.replace("roundTie", "icon");
        }, 1000);
    } 
}
//const computerSelection = getComputerChoice();
//const computerSelection = "scissors";
//console.log("computer: " + computerSelection);
//console.log(playRound(playerSelection, computerSelection));
//console.log(`Rounds the player has won: ${playerScore}`);
//console.log(`Rounds the computer has won: ${computerScore}`);

//console.log(announcer());
