

// math.random * 3 + 1, 1 rock, 
// equals to 2 paper, 
// less than 3 scissors. 


        
let humanChoice;
let computerChoice;
let computerScore = 0;
let humanScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const game = document.querySelectorAll(".game")

const result = document.querySelector("#result");
const move = document.querySelector("#move")
const total = document.querySelector("#total")
const restart = document.querySelector("#restart")


rock.addEventListener("click", () => playRound("rock", getComputerChoice()));

paper.addEventListener("click", () => playRound("paper", getComputerChoice()));

scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

restart.addEventListener("click", () => restartGame());

function restartGame () {
    console.log(computerScore, humanScore)
    computerScore = 0; 
    humanScore = 0;
    total.textContent = `This round: Human ${humanScore}, Computer ${computerScore}`
    changeGame(false)
}

console.log(restartGame())

  function getHumanChoice(){
    if (humanChoice == "rock") {
        return humanChoice
    } else if (humanChoice == "paper") {
        return humanChoice
    } else if (humanChoice == "scissors") {
        return humanChoice
    } else {
        return getHumanChoice();
    }
}    

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

    
function playRound(humanChoice, computerChoice) {
    total.textContent = `This round: Human ${humanScore}, Computer ${computerScore}`
    move.textContent = `This round: Human ${humanChoice}, Computer ${computerChoice}`
    if (humanChoice === "rock" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "paper" || humanChoice === "scissors" && computerChoice === "scissors") {
        result.textContent = "Tie!"
        humanScore = humanScore + 1
        computerScore = computerScore + 1
        move.textContent = `This round: Human ${humanChoice}, Computer ${computerChoice}`
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" ||humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "Human has won the round!"
        humanScore = humanScore + 1
        move.textContent = `This round: Human ${humanChoice}, Computer ${computerChoice}`
    } else {
        result.textContent = "Computer has won the round!"
        computerScore = computerScore + 1
        move.textContent = `This round: Human ${humanChoice}, Computer ${computerChoice}`
    }
    endGame(humanScore,computerScore)
  }

  if (computerScore > humanScore) {
    result.textContent = "Computer has won the round!"
  } else if (computerScore < humanScore) {
    result.textContent = "Human has won the round!"
  } else {
    result.textContent = "No one won the round!"
  }

  function endGame(humanScore, computerScore) {
    if (humanScore == 6) {
        alert("You have won!");
        changeGame(true)
    } else if (computerScore == 6 ) {
        alert("Computer has won!")
        changeGame(true)
    }
  }

  function changeGame (isDisabled) {
    console.log(game)
    game[0].disabled = isDisabled;
    game[1].disabled = isDisabled;
    game[2].disabled = isDisabled;
  }

  //loop here 