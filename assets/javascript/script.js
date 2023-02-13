// const buttons = document.getElementsByClassName("buttons");
const buttons = document.getElementsByClassName('buttons');
console.log(buttons);
let playerScore = document.getElementById("man-score");
console.log(playerScore);
let computerScore = document.getElementById("computer-score");
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
        playGame(playerChoice);
    });
}

//declaration for increment score//
let score = 0;
if (playerScore > 2) {
    score += 1;
    document.getElementById("man-score").innerHTML = score;
} else {
    score = 0;
    document.getElementById("man-score").innerHTML = score;
}
incrementScore();

//declaration for after 3 rounds, endgame and draw the score.

for (let i = 0; i < 3; i++); {
    
    drawScore();
}


//play the game, player choice and computers choice//
function playGame(playerChoice) {
    console.log("Argument passed into playGame function: ", playerChoice)


    if (playerChoice == 'Rock') {
        playerImage.src = 'assets/images/rock.jpg';
        console.log("you clicked rock");
    } else if (playerChoice == "Paper") {
        playerImage.src = 'assets/images/paper.jpg';
        console.log("you clicked paper");
    } else if (playerChoice == "Scissors") {
        playerImage.src = 'assets/images/scissors.jpg';
        console.log("you clicked scissors");
    }


    let computerChoice = Math.floor(Math.random() * 3);
    //console.log(computerChoice);

    if (computerChoice == "0") {
        computerImage.src = 'assets/images/rock.jpg';
    } else if (computerChoice == "1") {
        computerImage.src = 'assets/images/paper.jpg';
    } else if (computerChoice == "2") {
        computerImage.src = 'assets/images/scissors.jpg';
    }
}


//calculate score, so it appears on the html (man-score, computerScore)

//points decider//
function incrementScore() {

    if (playerScore == "Rock" && computerChoice == "2") {
        playerScore += 1;
        console.log(playerWins);
    } else if (playerScore == "Scissors" && computerScore == "0") {
        playerScore = 0;
        console.log(computerWins);
    } else if (playerScore == "Paper" && computerScore == "2") {
        playerScore = 0;
        console.log(computerWins);
    } else if (playerScore == "Rock" && computerScore == "1") {
        playerScore = 0;
        console.log(computerWins);
    } else if (playerScore == "Paper" && computerScore == "0") {
        playerScore += 1;
        console.log(playerWins);
    } else if (playerScore == "Scissors" && computerScore == "1") {
        playerScore += 1;
        console.log(playerWins);
    } else if (playerScore == computerScore); {
        playerScore += 1;
    }
}

//score counter, who makes it to 3 points first wins//
function drawScore() {

    if (playerScore >= 2 && computerScore >= 2) {
        playerScore.innerText = "Its a tie";
        computerScore.innerText = "its a tie";
        
    } else if (playerScore >= 2 && computerScore <= 1) {
        playerScore.innerText = "Winner";
        computerScore.innerText = "Loser";
        
    } else if (playerScore <= 1 && computerScore >= 2) {
        playerScore.innerText = "Loser";
        computerScore.innerText = "Winner";
        

}}

