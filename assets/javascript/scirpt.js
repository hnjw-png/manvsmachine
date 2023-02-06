// const buttons = document.getElementsByClassName("buttons");
const buttons = document.getElementsByClassName('buttons');
console.log(buttons);
// const playerScore = document.getElementsById("man-score");
// const computerScore = document.getElementsByiD("computer-score");
const playerImage = document.getElementsById("man-image");
// const computerImage = document.getElementsById("computer-image");
// const choice = ["Rock", "Paper", "Scissors"];

//game function
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
    
    if (buttons.textContent === "Rock") {
        playerImage.src = "/assets/images/rock.jpeg".image;
        playerChoice.textContent = choice["Rock"].name;
        return("you clicked rock");
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

//points decider//
function playerScore() {
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

    let computerScore;
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

//score counter, who makes it to 3 poins first wins//
let score = 0;{
if (playerChoice >= 2 && computerChoice >= 2);{
console.log(Tie);}
else if (playerChoice >= 2 && computerChoice <= 1);{
console.log(manWins);}
else if (playerChoice <= 1 && computerChoice >=2);{
console.log(computerWins);} 
drawScore
}
let roundsPlayed = 0;{
    if(let i = 0, i < 3, i++);
    endGame();
}
let userScore = 0;
let computerScore = 0;






    


//function play again//

