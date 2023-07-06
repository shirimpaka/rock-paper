function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());
function playRound(playerSelection, computerSelection) {
    // Convert both selections to lowercase for case-insensitive comparison
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
  
    // Check for a tie
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    }
  
    // Check for all possible winning scenarios for the player
    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return `You win! ${playerChoice} beats ${computerChoice}`;
    }
  
    // If none of the above conditions are met, the computer wins
    return `You lose! ${computerChoice} beats ${playerChoice}`;
  }
  
  // Test the function
  const playerSelection = 'Rock';
  const computerSelection = getComputerChoice(); // Assuming you've defined the getComputerChoice function
  
  console.log(playRound(playerSelection, computerSelection));

  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
      const computerSelection = getComputerChoice();
  
      const result = playRound(playerSelection, computerSelection);
      console.log(`Round ${round}: ${result}`);
  
      if (result.includes("win")) {
        playerScore++;
      } else if (result.includes("lose")) {
        computerScore++;
      }
    }
  
    console.log(`Final Score: Player ${playerScore} - Computer ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
      console.log("Sorry! You lost the game.");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  // Start the game
  game();