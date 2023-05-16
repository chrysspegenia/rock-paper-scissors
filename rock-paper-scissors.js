let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll(".button");
const player = document.querySelector(".playerScore");
const computer = document.querySelector(".computerScore");
const announcement = document.querySelector(".announcer");
announcement.textContent = "Let's Play";


//TRIAL
let result;
const playerText = document.querySelector(".playerText");
const computerText = document.querySelector(".computerText");
const resultText = document.querySelector(".resultText");

buttons.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.id;
    getComputerChoice();
    playRound(playerSelection, computerSelection);
    
    announcement.textContent = playRound(playerSelection, computerSelection);

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
  
        // trial code use the same roundResult variable and return


        if (playerSelection == computerSelection){
            roundResult = `It's a tie. You both drew ${playerSelection}.`
        } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
                   (playerSelection == "paper" && computerSelection == "rock") ||
                   (playerSelection == "scissors" && computerSelection == "paper")){
                        playerScore++
                        roundResult = `You won the round. Your ${playerSelection} beats ${computerSelection}.`
        } else if ((computerSelection == "rock" && playerSelection == "scissors") ||
                   (computerSelection == "paper" && playerSelection == "rock") ||
                   (computerSelection == "scissors" && playerSelection == "paper")) {
                        computerScore++
                        roundResult = `You lost the round. Their ${computerSelection} beats your ${playerSelection}.`
        };

        player.textContent = `${playerScore}`;
        computer.textContent = `${computerScore}`;
        //trial code ends here


        return roundResult;
}


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
    } else {
        announcement = "Let's Play!"
    }

    return `${announcement}`;
}


//const computerSelection = getComputerChoice();
//const computerSelection = "scissors";
//console.log("computer: " + computerSelection);
//console.log(playRound(playerSelection, computerSelection));
//console.log(`Rounds the player has won: ${playerScore}`);
//console.log(`Rounds the computer has won: ${computerScore}`);

//console.log(announcer());
