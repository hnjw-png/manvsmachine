// const buttons = document.getElementsByClassName("buttons");
const buttons = document.getElementsByClassName('buttons');
console.log(buttons);
let playerScore = document.getElementById("man-score");
let computerScore = document.getElementById("computer-score");
let playerImage = document.getElementById("man-image");
let computerImage = document.getElementById("computer-image");
const choice = ["Rock", "Paper", "Scissors"];

//game function for clicking the as a user//
for (let button of buttons) {
    button.addEventListener("click", function () {
        // let playerChoice = this.getElementsByClassName("buttons");
        let playerChoice = this.innerText;
        playGame(playerChoice);
    });
}

//play the game, player choice and computers choice//
function playGame(playerChoice) {
    console.log("Argument passed into playGame function: ", playerChoice)
    
    if (buttons.textContent == "Rock") {
        document.getElementById("rock-click").style.display ='block';
        document.getElementById("paper-click").style.display ='none';
        document.getElementById("scissors-click").style.display ='none';
        console.log("you clicked rock");
    } else if (buttons.textContent == "Paper") {
        document.getElementById("paper-click").style.display ='block';
        document.getElementById("rock-click").style.display ='none';
        document.getElementById("scissors-click").style.display ='none';
        console.log("you clicked paper")
    } else if  (buttons.textContent == "Scissors") {
        document.getElementById("scissors-click").style.display ='block';
        document.getElementById("rock-click").style.display ='none';
        document.getElementById("paper-click").style.display ='none';
        console.log("you clicked scissors");
    }}


    function clickEvent(); {

    let computerChoice = Math.floor(Math.random()*3);
    

    {
        if(computerChoice == "rock") {
            document.getElementById("rock-click").style.display ='block';
        document.getElementById("paper-click").style.display ='none';
        document.getElementById("scissors-click").style.display ='none';
        } else if(computerChoice == "paper") {
            document.getElementById("paper-click").style.display ='block';
        document.getElementById("rock-click").style.display ='none';
        document.getElementById("scissors-click").style.display ='none';
        } else if(computerChoice == "scissors") {
            document.getElementById("scissors-click").style.display ='block';
        document.getElementById("rock-click").style.display ='none';
        document.getElementById("paper-click").style.display ='none';
        console.log("you clicked scissors");
    }

    }}

//points decider//
function incrementScore(manScore) {
    if (manScore == "Rock" && computerScore == "Scissors") {
        manScore +=1;
        console.log(playerWins);
    } else if (playerChoice == "Scissors" && computerScore== "Rock") {
        playerScore = 0;
        console.log(computerWins);
    } else if (playerChoice == "Paper" && computerScore == "Scissors") {
        playerScore = 0;
        console.log(computerWins);
    } else if (playerChoice == "Rock" && computerScore == "Paper") {
        playerScore = 0;
        console.log(computerWins);
    } else if (playerChoice == "Paper" && computerScore == "Rock") {
        playerScore +=1;
        console.log(playerWins);
    } else if (playerChoice == "Scissors" && computerScore == "Paper") {
        playerScore +=1;
        console.log(playerWins);
    } else if (playerChoice == computerScore); {
        playerScore +=1;
        console.log(YouTied);
    }

    let = computerScore(); {

     if (playerChoice == "Rock" && computerChoice == "Scissors") {
        computerScore =0;
        console.log(playerWins);
    } else if (playerChoice == "Scissors" && computerScore == "Rock") {
        computerScore +=1;
        console.log(computerWins);
    } else if (playerChoice == "Paper" && computerScore == "Scissors") {
        computerScore +=1;
        console.log(computerWins);
    } else if (playerChoice == "Rock" && computerScore == "Paper") {
        computerScore +=1;
        console.log(computerWins);
    } else if (playerChoice == "Paper" && computerScore == "Rock") {
        computerScore =0;
        console.log(playerWins);
    } else if (playerChoice == "Scissors" && computerScore == "Paper") {
        computerScore =0;
        console.log(computerWins);
    } else if (playerChoice == computerScore); {
        computerScore +=1;
        console.log(YouTied);
    }
    
}
};

//score counter, who makes it to 3 points first wins//
function drawScore(){

    let manScore = getElementById("Man-score");
    //let computerScore = getElementById("computer-score");

if (playerScore >= 2 && computerScore >= 2) {
    manScore.innerText = 1;
    computerScore.innerText = 1;
  console.log('Tie');
} else if (playerScore >= 2 && computerScore <= 1) {
    manScore.innerText = 1;
    computerScore.innerText = 0;
  console.log('manWins');
} else if (playerScore <= 1 && computerScore >= 2) {
    manScore.innerText = 0;
    computerScore.innerText = 1;
  console.log('computerWins');
} 
let computerScore = getElementById("computer-score");
if (playerScore >= 2 && computerScore >= 2) {
    manScore.innerText = 1;
    computerScore.innerText = 1;
  console.log('Tie');
} else if (playerScore >= 2 && computerScore <= 1) {
    manScore.innerText = 1;
    computerScore.innerText = 0;
  console.log('manWins');
} else if (playerScore <= 1 && computerScore >= 2) {
    manScore.innerText = 0;
    computerScore.innerText = 1;
  console.log('computerWins');}


}

function roundsPlayed(){
for (let i = 0; i < 3; i++) {
    endGame();
}
}