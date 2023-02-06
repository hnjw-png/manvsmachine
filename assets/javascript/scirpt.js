const buttons = document.getMyElementByClassName("buttons");
const playerScore = document.getMyElementById("man-score");
const computerScore = document.getMyElementByiD("computer-score");
const playerImage = document.getMyElementId("man-image");
const computerImage = document.getMyElementById("computer-image");
const choice = ["Rock", "Paper", "Scissors"];

//game function
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribrute("data-choice");
        playGame(playerChoice);
    });
}

//play the game, player choice and computers choice//
function playGame(playerChoice) {
    
    if (buttons.textContent === "Rock") {
        playerImage.src = choice["0"].image;
        playerChoice.textContent = choice["0"].name;
    } else if (buttons.textContent === "Paper") {
        playerImage.src = choice["1"].image;
        playerChoice.textContent = choice["1"].name;
    } else if  (buttons.textContent === "Scissors") {
        playerImage.src = choice["2"].image;
        playerChoice.textContent = choice["2"].name;
    }
    let computerChoice = Math.floor(Math.random()*3);

    {
        if(computerChoice === "0") {
        computerImage.src = choice["0"].image;
        computerChoice.textContent = choice["0"].name;
        } else if(computerChoice === "1") {
        computerImage.src = choice["1"].image;
        computerChoice.textContent = choice["1"].name;
        } else if(computerChoice === "2") {
        computerImage.src = choice["2"].image;
        computerChoice.textContent = choice["2"].name;
    }

    }}
    
    
    


//logic of playing rock paper scissor//
function playerScore() {
    if (playerChoice == "Rock" && computerChoice == "Scissors") {
        playerScore = "+1" computerScore = "0";
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        playerScore = "+0" computerScore = "+1";
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        return "Computer Wins! Scissors Beats Paper";
    } else if (playerChoice == "Rock" && computerChoice == "Paper") {
        return "Computer wins! Paper Beats Rock!";
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        return "You win! Paper Beats Rock!";
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        return "Yon win! Scissors beats Paper!";
    } else if (playerChoice == computerChoice); {
        return "Its a draw!";
    }

}

//computer picks rock paper or scissors maths random//



    let computerScore = Math.floor(Math.random()*3);
    if (computerScore = 0) {
        computerScore = "Rock";
    } else if (computerScore = 1) {
        computerScore = "Paper";
    } else if (computerScore = 2) {
        computerScore = "Scissors";
    } }


//score counter, print at title, calulate winner, calculate rounds of three//



    


//function play again//

