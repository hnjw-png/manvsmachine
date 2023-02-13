// const buttons = document.getElementsByClassName("buttons");
const buttons = document.getElementsByClassName('buttons');
console.log(buttons);
var playerScore = document.getElementById("man-score");
console.log(playerScore);
var computerScore = document.getElementById("computer-score");
console.log(computerScore); 
var playerImage = document.getElementById("man-image");
console.log(playerImage);
var computerImage = document.getElementById("computer-image");
console.log(computerImage);
const choice = ["Rock", "Paper", "Scissors"];

//game function for clicking the as a user//
for (let button of buttons) {
    button.addEventListener("click", function () {
        // let playerChoice = this.getElementsByClassName("buttons");
        let playerChoice = this.innerText;
        playGame(playerChoice, computerChoice);
    });
}

//play the game, player choice and computers choice//
function playGame(playerChoice){
    console.log("Argument passed into playGame function: ", playerChoice)

    
    if (playerChoice == 'Rock') {
        playerImage.src = 'assets/images/rock.jpg';
        console.log("you clicked rock");
    } else if (playerChoice == "Paper") {
        playerImage.src = 'assets/images/paper.jpg';
        console.log("you clicked paper");
    } else if  (playerChoice == "Scissors") {
        playerImage.src = 'assets/images/scissors.jpg';
        console.log("you clicked scissors");
    }


    let computerChoice = Math.floor(Math.random()*3);
    console.log(computerChoice);
    


        if(choice == "0") {
            computerImage.src = 'assets/images/rock.jpg'
        } else if(computerChoice == "1") {
            computerImage.src = 'assets/images/paper.jpg'
        } else if(computerChoice == "2") {
            computerImage.src = 'assets/images/scissors.jpg'
    }

    }

//points decider//
function incrementScore() {

    let playerScore; {

    if (playerChoice == "Rock" && computerChoice == "2") {
        playerScore +=1;
        console.log(playerWins);
    } else if (playerChoice == "Scissors" && computerChoice== "0") {
        playerScore = 0;
        console.log(computerWins);
    } else if (playerChoice == "Paper" && computerChoice == "2") {
        playerScore = 0;
        console.log(computerWins);
    } else if (playerChoice == "Rock" && computerScore == "1") {
        playerScore = 0;
        console.log(computerWins);
    } else if (playerChoice == "Paper" && computerScore == "0") {
        playerScore +=1;
        console.log(playerWins);
    } else if (playerChoice == "Scissors" && computerScore == "1") {
        playerScore +=1;
        console.log(playerWins);
    } else if (playerChoice == computerScore); {
        playerScore +=1;
        console.log(YouTied);
    }}

    let = computerScore(); {

     if (playerChoice == "Rock" && computerChoice == "2") {
        computerScore =0;
        console.log(playerWins);
    } else if (playerChoice == "Scissors" && computerScore == "0") {
        computerScore +=1;
        console.log(computerWins);
    } else if (playerChoice == "Paper" && computerScore == "2") {
        computerScore +=1;
        console.log(computerWins);
    } else if (playerChoice == "Rock" && computerScore == "1") {
        computerScore +=1;
        console.log(computerWins);
    } else if (playerChoice == "Paper" && computerScore == "0") {
        computerScore.innerText =0;
        console.log(playerWins);
    } else if (playerChoice == "Scissors" && computerScore == "1") {
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
    playerScore.innerText = 1;
    computerScore.innerText = 1;
  console.log('Tie');
} else if (playerScore >= 2 && computerScore <= 1) {
    playerScore.innerText = 1;
    computerScore.innerText = 0;
  console.log('manWins');
} else if (playerScore <= 1 && computerScore >= 2) {
    playerScore.innerText = 0;
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

function roundsPlayed() {
for (let i = 0; i < 3; i++) {
    endGame();
}
}