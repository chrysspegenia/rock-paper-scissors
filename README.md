# rock-paper-scissors
javascript rock, paper, scissors project from odin-project

Day 1:
Pseudocode:
-the computer prompts the user for rock, paper, or scissors.

-create function getComputerChoice that randomly returns rock, paper or scissors.

-create a function playRound that plays a single round of rock paper scissors.
        -make if else loop containing rock paper scissors outcomes
        rock vs rock, rock vs paper, rock vs scissors, paper vs rock, paper vs paper, paper vs scissors, scissors vs rock, scissors vs paper, scissors vs scissors.

-create a function called game to keep score and reports winner or loser at the end.


Day 1
-added prompt to ask user for rock, paper or scissors.
-added function that randomly returns rock, paper or scissors.
-added if else on the 9 possible outcomes for the game.

Day 2 
-finalized function playRound() which compares userInput and computerSelection and returns a result of win, lose or draw.
-made userInput case-insensitive using .toLowerCase() method.


Day 3
-added code that would add 1 point to whoever won a round.
-added function that would return a message whenever one side scores and announce a winner once a specified number of wins was reached.






figure out how to loop the condition if ends in a draw and no score is added.

add roundRepeater() function that loops the other functions until someone reaches wins 5 rounds.

try using while do loop and set while condition playerScore <= 5 || computerScore <= 5



let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

try using code above for prompt and set condition if score  <= 5