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
    
}

function updateScore() {
  
  let playerScore  = document.getElementById("man-score");
  let computerScore = document.getElementById("computer-score");
    
  if (playerScore == "Rock" && computerScore == "2") {
        

     } else if (playerScore == "Scissors" && computerScore == "0") {
        computerScore =+ 1;

     } else if (playerScore == "Paper" && computerScore == "2") {
        computerScore =+ 1;

     } else if (playerScore == "Rock" && computerScore == "1") {
        computerScore =+1;

     } else if (playerScore == "Paper" && computerScore == "0") {
        playerScore =+ 1;

     } else if (playerScore == "Scissors" && computerScore == "1") {
        playerScore =+ 1;

     } else if (playerScore == computerScore); {
        playerScore =+ 1;
        computerScore =+ 1;
     }
    
    }
  


//score counter, who makes it to 3 points first wins//

function checkWinner() {

        for (let i = 0; i < 3; i++) {
         
    if (playerScore >= 2 && computerScore >= 2) {
        document.getElementById(playerScore).textContent = "Its a tie";
        document.getElementById(computerScore).textContent = "its a tie";

    } else if (playerScore >= 2 && computerScore <= 1) {
        document.getElementById(playerScore).textContent = "Winner";
        document.getElementById(computerScore).textContent =  "Loser";

    } else if (playerScore <= 1 && computerScore >= 2) {
        document.getElementById(playerScore).textContent ="Loser";
        document.getElementById(computerScore).textContent = "Winner";

    }
}
}



//last function restart game (with button or automatic refresh after 3 rounds)