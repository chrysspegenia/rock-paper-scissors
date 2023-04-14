let userInput = prompt("Choose rock, paper, or scissors: ");


//randomly returns rock, paper or scissors
function getComputerChoice(){
    let choices = ["rock", "paper", "scissors"];

    //chooses a random selection from the array but in numbered form 0-2(number range depends on number of items in array)
    let randomChoice = Math.floor(Math.random()*choices.length);

    //converts the random number from the array back into string;
    let randomResult = choices[randomChoice];
    return randomResult;
}
//console.log(getComputerChoice());



function playRound(playerSelection, computerSelection){
    //trial code
    let winScenario = (playerSelection === "rock" && computerSelection === "scissors") || 
                      (playerSelection === "paper" && computerSelection === "rock") || 
                      (playerSelection === "scissors" && computerSelection === "paper");

    let loseScenario = (playerSelection === "rock" && computerSelection === "paper") || 
                       (playerSelection === "paper" && computerSelection === "scissors") || 
                       (playerSelection === "scissors" && computerSelection === "rock");


    let drawScenario = (playerSelection === "rock" && computerSelection === "rock") || 
                       (playerSelection === "paper" && computerSelection === "paper") || 
                       (playerSelection === "scissors" && computerSelection === "scissors");

    let roundResultAnnouncement


    //return (You lose asdbasdad) find return lesson on odin
}

let playerSelection = userInput.toLowerCase();
//const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

    let roundResult;
    if (playerSelection === "rock" && computerSelection === "rock"){
            roundResult = "It's a Draw! You both drew Rock."
        } else if (playerSelection === "rock" && computerSelection === "paper"){
            roundResult = "You Lose! Your Rock loses to Paper."
        } else if (playerSelection === "rock" && computerSelection === "scissors"){
            roundResult = "You Win! Your Rock beats Scissors."
        } else if (playerSelection === "paper" && computerSelection === "rock"){
            roundResult = "You Win! Your Paper beats Rock."
        } else if (playerSelection === "paper" && computerSelection === "paper"){
            roundResult = "It's a Draw! You both drew Paper."
        } else if (playerSelection === "paper" && computerSelection === "scissors"){
            roundResult = "You Lose! Your Paper loses to Scissors."
        } else if (playerSelection === "scissors" && computerSelection === "rock"){
            roundResult = "You Lose! Your Scissors loses to Rock."
        } else if (playerSelection === "scissors" && computerSelection === "paper"){
            roundResult = "You Win! Your Scissors beats Paper."
        } else {
            roundResult = "It's a Draw! You both drew Scissors."
        };