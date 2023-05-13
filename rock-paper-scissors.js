let playerSelection;
let computerSelection = getComputerChoice();
let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll(".button");

const player = document.querySelector(".playerScore");
player.textContent = `${playerScore}`;

const computer = document.querySelector(".computerScore");
computer.textContent = `${computerScore}`;

const announcement = document.querySelector(".announcer");
announcement.textContent = announcer();


//TRIAL
let result;
const playerText = document.querySelector(".playerText");
const computerText = document.querySelector(".computerText");
const resultText = document.querySelector(".resultText");

buttons.forEach(button => button.addEventListener("click", () => {
    playerSelection = button.id;
    getComputerChoice();
    playRound(playerSelection, computerSelection);

    //temporary
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    resultText.textContent = announcer();
}));
//END  TRial


//buttons.forEach((button) => {
  //  button.addEventListener("click", (e) => {
    //    //const img = button.querySelector("img");
      //  playerSelection = this.id;
        //getComputerChoice();
        //playRound(playerSelection, computerSelection);
        //announcer();
    //});
//});

//buttons.forEach(function(i){
//    i.addEventListener("click", function(e){
//        playerSelection = this.id;
//       alert(this.id);
        
//        getComputerChoice();
//        announcer();
       // playRound(playerSelection, computerSelection);
//    })
//    console.log(playerSelection);
//});
//console.log(buttons);


//This function outputs a random choice of rock, paper,or scissors
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random()*choices.length);
    let randomResult = choices[randomChoice];
    return randomResult;
}


//this function compares the userInput and getComputerChoice and returns an appropriate response.
//added code that will add 1 point to whoever won a round.
function playRound(playerSelection, computerSelection){
    
    let roundResult;
    if (playerSelection === "rock" && computerSelection === "rock"){
            roundResult = "It's a Draw! You both drew Rock."
        } else if (playerSelection === "rock" && computerSelection === "paper"){
            roundResult = "You Lose! Your Rock loses to Paper.";
            computerScore += 1; 
        } else if (playerSelection === "rock" && computerSelection === "scissors"){
            roundResult = "You Win! Your Rock beats Scissors."; 
            playerScore += 1;
        } else if (playerSelection === "paper" && computerSelection === "rock"){
            roundResult = "You Win! Your Paper beats Rock.";
            playerScore += 1+playerScore;
        } else if (playerSelection === "paper" && computerSelection === "paper"){
            roundResult = "It's a Draw! You both drew Paper."
        } else if (playerSelection === "paper" && computerSelection === "scissors"){
            roundResult = "You Lose! Your Paper loses to Scissors.";
            computerScore += 1;
        } else if (playerSelection === "scissors" && computerSelection === "rock"){
            roundResult = "You Lose! Your Scissors loses to Rock.";
            computerScore += 1;
        } else if (playerSelection === "scissors" && computerSelection === "paper"){
            roundResult = "You Win! Your Scissors beats Paper.";
            playerScore += 1; 
        } else if (playerSelection ==="scissors" && computerSelection === "scissors") {
            roundResult = "It's a Draw! You both drew Scissors."
        } else {
            alert("Please enter rock, paper or scissors.")
            //this part prompts the user again they did not input rock, paper or scissors
            //if (playerSelection !== "rock" || playerSelection !== "paper" || playerSelection !== "scissors"){
            //    prompt(userInput)
            //} else {

            //}
        }

        return roundResult;
}


//displays a message whenever the player or computer scores
function announcer(){
    let announcement;
    if (playerScore === 1){
        announcement = "Good Job."
    } else if (playerScore === 2){
        announcement = "Alright! You'll win if you keep at it."
    } else if (playerScore === 3){
        announcement = "*Chandler celebration dance*"
    } else if (playerScore === 4){
        announcement = "One more to go."
    } else if (playerScore === 5){
        announcement = "You've done it. You won!"
    } else if (computerScore === 1){
        announcement = "That's one for the computer."
    } else if (computerScore === 2){
        announcement = "The computer is really going for it"
    } else if (computerScore === 3){
        announcement = "This computer is good. I wonder if its cheating?"
    } else if (computerScore === 4){
        announcement = "The computer only needs 1 more win."
    } else if (computerScore === 5){
        announcement = "The computer won the match."
    } else if (playerScore === computerScore){
        announcement = "Let's keep going the match is'nt over"
    } else {
        announcement = "Let's Play!"
    }

    return `${announcement}`;
}

//to be tweeked or might delete
//function game(){
//    let winnerAnnouncement;
//    if (playerScore === 2) {
//        winnerAnnouncement = "You have won the game."
//    } else if (computerScore === 2){
//        winnerAnnouncement = "The computer won the game."
//    } else {
//        winnerAnnouncement = "The fight continues"
//    }

//    return winnerAnnouncement;
//}


//let rockBtn = document.querySelector("#rock")



//const computerSelection = getComputerChoice();
//const computerSelection = "scissors";
console.log("computer: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log(`Rounds the player has won: ${playerScore}`);
console.log(`Rounds the computer has won: ${computerScore}`);

console.log(announcer());

