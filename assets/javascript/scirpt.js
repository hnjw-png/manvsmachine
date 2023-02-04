//start of code//

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

//play the game, player choice and computers choice//
function playGame (playerChoice) {
    playerImage.scr = 'assets/images/${choices[player-choice]}.jpeg';


    function playGame (computerChoice) {

    let computerChoice = Math.random();
    if (computerChoice <= 0.34){
        computerChoice = "Rock";
    } else if (computerChoice <= 0.68){
        computerChoice = "Paper";
    } else if (computerChoice >= 0.68) {
        computerChoice = "Scissors" ;
    }
    
    let computerImage.src = 'assets/images/${choices[player-choice]}.jpeg';}
}

//logic of playing rock paper scissor//
function playRound(playerChoice, computerChoice) {
    if(playerChoice == "Rock" && computerChoice == "Scissors"){
    return "You win! Rock Beats Scissors!"; 
}else if(playerChoice == "Scissors" && computerChoice == "Rock"){
        return "Computer wins! Rock Beats Scissors!"
    } else if(playerChoice == "Paper" && computerChoice == "Scissors"){
    return "Computer Wins! Scissors Beats Paper"; 
    } else if(playerChoice == "Rock" && computerChoice == "Paper"){
        return "Computer wins! Paper Beats Rock!";
        } else if(playerChoice == "Paper" && computerChoice == "Rock"){
            return "You win! Paper Beats Rock";
        } else if(playerChoice == "Scissors" && computerChoice == "Paper") {
            return "Yon win! Scissors beats Paper";
        } else if(playerChoice == computerChoice);{
            return "Its a draw!";
        }
    
}

//play three rounds//
function game(){
    for(let i = 0, i < 3, i++) {
        if 
    }
}
//calculate scores according to which of the rock, paper and scissors competes and wins against each other.//
function incrementScore () ; {
    if(playerChoice =< computerChoice){

    }
}
//calculate score best of three rounds



