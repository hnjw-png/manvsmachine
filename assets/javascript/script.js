const buttons = document.getElementsByClassName('buttons');

let playerScore = document.getElementById("man-score");

let computerScore = document.getElementById("computer-score");

var playerImage = document.getElementById("man-image");

var computerImage = document.getElementById("computer-image");

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


    if (computerChoice == "0") {
        computerImage.src = 'assets/images/rock.jpg';
    } else if (computerChoice == "1") {
        computerImage.src = 'assets/images/paper.jpg';
    } else if (computerChoice == "2") {
        computerImage.src = 'assets/images/scissors.jpg';
    }

    const winnerString = determineWinner(playerChoice.toLowerCase(), computerChoice.toString());
    const displayWinner = document.getElementById('man-score');
    displayWinner.innerHTML = winnerString;
}

const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (playerChoice === 'rock') {
        if (computerChoice === '1') {
            return 'Computer Wins!';
        } else {
            return 'User Wins!';
        }
    }
    if (playerChoice === 'paper') {
        if (computerChoice === '2') {
            return 'Computer Wins!';
        } else {
            return 'User Wins!';
        }
    }
    if (playerChoice === 'scissors') {
        if (computerChoice === '0') {
            return 'Computer Wins!';
        } else {
            return 'User Wins!';
        }
    }
};

