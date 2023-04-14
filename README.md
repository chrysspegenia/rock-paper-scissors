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
-need to rework getComputerChoice function doesn't return the proper output.
(Using hardcoded outcomes of rock, paper, and scissors will return correct results.
While, using outcomes from getComputerChoice will oftentimes return incorrect results.)