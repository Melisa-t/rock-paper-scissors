




        
let humanChoice;
let computerChoice;
let computerScore = 0;
let humanScore = 0;

//creating variables to change DOM

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const game = document.querySelectorAll(".game")

const result = document.querySelector("#result");
const move = document.querySelector("#move")
const total = document.querySelector("#total")
const restart = document.querySelector("#restart")

//event listeners for buttons

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));

paper.addEventListener("click", () => playRound("paper", getComputerChoice()));

scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

restart.addEventListener("click", () => restartGame());

//a function that will be called when clicked Restart Button

function restartGame () {
    console.log(computerScore, humanScore)
    computerScore = 0; 
    humanScore = 0;
    total.textContent = `Scores are reset.`
    result.textContent = "Welcome again!"
    move.textContent = ``
    changeGame(false)
}

//not needed in this version of the game

/*   function getHumanChoice(){
    if (humanChoice == "rock") {
        return humanChoice
    } else if (humanChoice == "paper") {
        return humanChoice
    } else if (humanChoice == "scissors") {
        return humanChoice
    } else {
        return getHumanChoice();
    }
}     */

// math.random * 3 + 1, 1 rock, 
// equals to 2 paper, 
// less than 3 scissors
// so computer randomly chooses rock, paper, or scissors.

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    if (computerChoice == 1) {
        return "rock" }
        else if (computerChoice == 2){
            return "paper" }
            else {
                return "scissors"
            }
        }

//the way game is played. 
// Every round the total score, this round's move 
// as well as this round's result is displayed.
    
function playRound(humanChoice, computerChoice) {
    total.textContent = `Scores: You ${humanScore}, Computer ${computerScore}`
    move.textContent = `This round: You ${humanChoice}, Computer ${computerChoice}`
        if (humanChoice === "rock" && computerChoice === "rock" || 
            humanChoice === "paper" && computerChoice === "paper" || 
            humanChoice === "scissors" && computerChoice === "scissors") {
        result.textContent = "Tie! No one won the round."
        move.textContent = `This round: You ${humanChoice}, Computer ${computerChoice}`
    } else if (humanChoice === "rock" && computerChoice === "scissors" || 
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "You have won the round!"
        move.textContent = `This round: You ${humanChoice}, Computer ${computerChoice}`
            humanScore = humanScore + 1
    } else {
        result.textContent = "Computer has won the round!"
        move.textContent = `This round: You ${humanChoice}, Computer ${computerChoice}`
         computerScore = computerScore + 1
    }
    endGame(humanScore,computerScore)
  }

  if (computerScore > humanScore) {
        result.textContent = "Computer has won the round!"
  } else if (computerScore < humanScore) {
        result.textContent = "You have won the round!"
  } else {
        result.textContent = "Welcome!"
  }

  function endGame(humanScore, computerScore) {
    if (humanScore == 6) {
        total.textContent = `Scores: You ${humanScore}, Computer ${computerScore}`
        result.textContent = "You have won!"
            alert("You have won!");
            changeGame(true)
    } else if (computerScore == 6 ) {
        total.textContent = `Scores: You ${humanScore}, Computer ${computerScore}`
        result.textContent = "Computer has won!"
            alert("Computer has won!")
            changeGame(true)
    }
  }

  function changeGame (isDisabled) {
    console.log(game)
    for (let i = 0;  i <= 3; i++) {
        game[i].disabled = isDisabled;
      }
  }



 