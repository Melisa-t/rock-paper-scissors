


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

/* function getHumanChoice */
//prompt and accept only rock, paper, scissors
//else ask again

 function getHumanChoice(){
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
    function playRound(humanChoice, computerChoice) {
        console.log(`This round: Human ${humanChoice}, Computer ${computerChoice}`)
        if (humanChoice === "rock" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "paper" || humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("Tie!")
            console.log(`The scores: Human ${humanScore}, Computer ${computerScore}`)
        } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper" ||humanChoice === "paper" && computerChoice === "rock") {
            console.log("Human has won the round!")
            humanScore = humanScore + 1
            console.log(`The scores: Human ${humanScore}, Computer ${computerScore}`)
        } else {
            console.log ("Computer has won the round!")
            computerScore = computerScore + 1
            console.log(`The scores: Human ${humanScore}, Computer ${computerScore}`)
        }

      }
      for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice()); 
}

      if (computerScore > humanScore) {
        console.log("Computer has won!")
      } else if (computerScore < humanScore) {
        console.log("Human has won!")
      } else {
        console.log("No one won!")
      }

}

playGame();
