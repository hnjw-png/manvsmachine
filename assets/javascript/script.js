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
        playerImage.src = getMyElementsByClassName("rock-click").image;
        console.log("you clicked rock");
    } else if (buttons.textContent == "Paper") {
        playerImage.src = getMyElementsByClassName("paper-click").image;
        console.log("you clicked paper")
    } else if  (buttons.textContent == "Scissors") {
        playerImage.src = getMyElementsByClassName("scissors").image;
        console.log("you clicked scissors");
    }

    let computerChoice = Math.floor(Math.random()*3);

    {
        if(computerChoice === "0") {
        computerImage.src = getElementsByClassName("rock-click").image;
        } else if(computerChoice === "1") {
        computerImage.src = getElementsByClassName("paper-click").image;
        } else if(computerChoice === "2") {
        computerImage.src = getMyElementsByClassName("scissors-click").image;
    }

    }}

//points decider//
function incrementScore() {
    if (playerChoice == "Rock" && computerChoice == "Scissors") {
        playerScore +=1;
        console.log(playerWins);
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        playerScore = 0;
        console.log(computerWins);
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        playerScore = 0;
        console.log(computerWins);
    } else if (playerChoice == "Rock" && computerChoice == "Paper") {
        playerScore = 0;
        console.log(computerWins);
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        playerScore +=1;
        console.log(playerWins);
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        playerScore +=1;
        console.log(playerWins);
    } else if (playerChoice == computerChoice); {
        playerScore +=1;
        console.log(YouTied);
    }

     if (playerChoice == "Rock" && computerChoice == "Scissors") {
        computerScore =0;
        console.log(playerWins);
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        computerScore +=1;
        console.log(computerWins);
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        computerScore +=1;
        console.log(computerWins);
    } else if (playerChoice == "Rock" && computerChoice == "Paper") {
        computerScore +=1;
        console.log(computerWins);
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        computerScore =0;
        console.log(playerWins);
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        computerScore =0;
        console.log(computerWins);
    } else if (playerChoice == computerChoice); {
        computerScore +=1;
        console.log(YouTied);
    }
    

}

//score counter, who makes it to 3 points first wins//
function drawScore();
let score = 0;
if (playerScore >= 2 && computerScore >= 2) {
    print.toString.getElementById("Man-score").print("0")
    print.toString.getElementsById("Computer-score").print("0");
  console.log('Tie');
} else if (playerScore >= 2 && computerScore <= 1) {
    print.toString.getElementById("Man-score").print("1")
    print.toString.getElementsById("Computer-score").print("0");
  console.log('manWins');
} else if (playerScore <= 1 && computerScore >= 2) {
    print.toString.getElementById("Man-score").print("0")
    print.toString.getElementsById("Computer-score").print("1");
  console.log('computerWins');
} 



function roundsPlayed()
let roundsPlayed = 0;
for (let i = 0; i < 3; i++) {
    endGame();
}