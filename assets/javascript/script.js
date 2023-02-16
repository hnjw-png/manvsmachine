const buttons = document.getElementsByClassName('buttons');

var playerScore = document.getElementById("man-score");

var computerScore = document.getElementById("computer-score");

var playerImage = document.getElementById("man-image");

var computerImage = document.getElementById("computer-image");

const score = ["Rock", "Paper", "Scissors"];




//game function for clicking the as a user//
for (let button of buttons) {
    button.addEventListener("click", function () {
        // let playerChoice = this.getElementsByClassName("buttons");
        let playerChoice = this.innerText;
        playGame(playerChoice);
    });
}

//declaration for increment score//
let playerNumber = 0;
let computerNumber = 0; {
    while (playerNumber != 3 && computerNumber != 3);

    incrementScore();
}

//declaration for after 3 rounds, endgame and draw the score.

for (let i = 0; i < 3; i++); {

    drawScore();
};


//play the game, player choice and computers choice//
function playGame(playerChoice) {


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

    if (playerScore == "Rock" && computerScore == "2") {
        playerNumber = score + 1;

    } else if (playerScore == "Scissors" && computerScore == "0") {
        computerNumber = score + 1;

    } else if (playerScore == "Paper" && computerScore == "2") {
        computerNumber = score + 1;

    } else if (playerScore == "Rock" && computerScore == "1") {
        computerNumber = +1;

    } else if (playerScore == "Paper" && computerScore == "0") {
        playerNumber = score + 1;

    } else if (playerScore == "Scissors" && computerScore == "1") {
        playerNumber = score + 1;

    } else if (playerScore == computerScore); {
        playerNumber = score + 1;
        computerScore = score + 1;
    }
}

//score counter, who makes it to 3 points first wins//
function drawScore(); {

    if (playerScore >= 2 && computerScore >= 2) {
        document.getElementById(playerScore).innerHTML = "Its a tie";
        document.getElementById(computerScore).innerHTML = "its a tie";

    } else if (playerScore >= 2 && computerScore <= 1) {
        document.getElementById(playerScore).innerHTML = "Winner";
        document.getElementById(computerScore).innerHTML =  "Loser";

    } else if (playerScore <= 1 && computerScore >= 2) {
        document.getElementById(playerScore).innerHTML ="Loser";
        document.getElementById(computerScore).innerHTML = "Winner";

    }
}

//last function restart game (with button or automatic refresh after 3 rounds)