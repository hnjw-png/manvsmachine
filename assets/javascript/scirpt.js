//start of code//

//start restart function.//

//declare elements//

const buttons = document.getMyElementByClassName("buttons");
const playerScore = document.getMyElementById("man-score");
const computerScore = document.getMyElementByiD("computer-score");
const playerImage = document.getMyElementId("man-image");
const computerImage = document.getMyElement("computer-image");
const choice = ["Rock", "Paper", "Scissors"];

//player presses rock, paper or scissors button.//
for (let buttons of buttons) {
    button.addEventListener("click", function() {
    let playerChoice = this.getAttribrute('data-choice');
    playGame(playerChoice);
})
}

//play the game
function playGame {
    playerImage.scr = 'assets/images/${choices[player-choice]}.jpeg;


    let computerChoice = Math.random();
    if (computerChoice <= 0.34){
        computerChoice = "Rock";
    } else if (computerChoice <= 0.68){
        computerChoice = "Paper";
    } else if (computerChoice >= 0.68) {
        computerChoice = "Scissors" ;
    }
    
    computerImage.src = 'assets/images/${choices[player-choice]}.jpeg;
}




//calculate scores according to which of the rock, paper and scissors competes and wins against each other.//


//calculate score best of three rounds



