


// math.random * 3 + 1, 1 rock, 
// equals to 2 paper, 
// less than 3 scissors. 

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
        
let humanChoice;
let computerChoice;
let computerScore = 0;
let humanScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const result = document.querySelector("#result");
const move = document.querySelector("#move")
const total = document.querySelector("#total")





rock.addEventListener("click", () => playRound("rock", getComputerChoice()));

paper.addEventListener("click", () => playRound("paper", getComputerChoice()));

scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

// human choice!!! 

//prompt and accept only rock, paper, scissors
//else ask again

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


// create humanScore and computerScore
// initialize them with 0 

 
 //function named playRound, 
 // parameters are humanChoice and computerChoice 
 // humanchoice is case-insensitive 
 // add strings for defeat and win in playRound 
 // increase humanScore || computerScore according to round win




      /* for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice()); 
} */

      if (computerScore > humanScore) {
        result.textContent = "Computer has won!"
      } else if (computerScore < humanScore) {
        result.textContent = "Human has won!"
      } else {
        result.textContent = "No one won!"
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

  }

