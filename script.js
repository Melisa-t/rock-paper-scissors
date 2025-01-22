


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
let computerScore;
let humanScore;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const div = document.querySelector("div");

function getHumanChoice(){

rock.addEventListener("click", playRound => {
    return humanChoice;
});

paper.addEventListener("click", playRound => {
    return humanChoice;
});

scissors.addEventListener("click", playRound => {
    return humanChoice;
});
} 

//prompt and accept only rock, paper, scissors
//else ask again

/*  function getHumanChoice(){
    let humanChoice = prompt("Please choose one: rock, paper, scissors!").toLowerCase();
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
 */

// create humanScore and computerScore
// initialize them with 0 

 
 //function named playRound, 
 // parameters are humanChoice and computerChoice 
 // humanchoice is case-insensitive 
 // add strings for defeat and win in playRound 
 // increase humanScore || computerScore according to round win



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    playRound(humanChoice, computerChoice)


      /* for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice()); 
} */

      if (computerScore > humanScore) {
        div.textContent = "Computer has won!"
      } else if (computerScore < humanScore) {
        div.textContent = "Human has won!"
      } else {
        div.textContent = "No one won!"
      }

}

function playRound(humanChoice, computerChoice) {
    div.textContent = `This round: Human ${humanChoice}, Computer ${computerChoice}`
    if (humanChoice === "rock" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "paper" || humanChoice === "scissors" && computerChoice === "scissors") {
        div.textContent = "Tie!"
        div.textContent = `The scores: Human ${humanScore}, Computer ${computerScore}`
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" ||humanChoice === "paper" && computerChoice === "rock") {
        div.textContent = "Human has won the round!"
        humanScore = humanScore + 1
        div.textContent = `The scores: Human ${humanScore}, Computer ${computerScore}`
    } else {
        div.textContent = "Computer has won the round!"
        computerScore = computerScore + 1
        div.textContent = `The scores: Human ${humanScore}, Computer ${computerScore}`
    }

  }

playGame();
