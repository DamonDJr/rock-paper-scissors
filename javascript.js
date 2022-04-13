function computerPlay(){
    let choice = getRandomNumber(3) + 1;
    if (choice === 1){
        return "rock";
    }else if (choice === 2){
        return "paper";
    }else{
        return "scissors";
    }
}

function getRandomNumber(number){
    return Math.floor(Math.random() * number);
}

function playRound(computerSelection, playerSelection){
    let playerChoice = playerSelection.toLowerCase();


    if (computerSelection === playerChoice){
        return 1;
    }else if (computerSelection === "rock" && playerChoice === "paper"){
        return 2;
    }else if (computerSelection === "rock" && playerChoice === 'scissors'){
        return 3;
    }else if (computerSelection === "paper" && playerChoice === 'scissors'){
        return 2;
    }else if (computerSelection === "paper" && playerChoice === 'rock'){
        return 3;
    }else if (computerSelection === "scissors" && playerChoice === 'paper'){
        return 3;
    }else if (computerSelection === "scissors" && playerChoice === 'rock'){
        return 2;
    }else{
        return 4;
    }

}



function game(){

    let computerScore = 0;
    let playerScore = 0;
    const buttons = document.querySelectorAll('button');
    const div = document.querySelector('div');
    const para = document.createElement('p');
    const scoreBoard = document.createElement('div');
    const score = document.createElement('h3');
    const cScore = document.createElement('h3');

    
    score.classList.add("status");
    cScore.classList.add("status")
    scoreBoard.classList.add("scoreboard");

    

    cScore.textContent = 0;
    score.textContent = 0;

    const number = document.querySelector('.number');
    const cnumber = document.querySelector('.cNumber');


    buttons.forEach((button) => {

        button.addEventListener('click',() => {

            let computerSelection = computerPlay();
            let playerSelection = button.id;
            let gameId = playRound(computerSelection,playerSelection);
            if (playerScore > 4){
                para.textContent = "Congratulations, you've beat the computer!";
                let playAgain=window.confirm("You Win! Would you like to play again?");
                if (playAgain){
                    playerScore =  0;
                    computerScore = 0;
                    score.textContent =playerScore;
                    cScore.textContent =computerScore;
                }else return;
            }else if(computerScore > 4){
                para.textContent = "Sorry! you lost! Maybe you should rethink your strategy!"
                let playAgain=window.confirm("You Lose! Would you like to play again?")
                if (playAgain){
                    playerScore = 0;
                    computerScore = 0;
                    score.textContent =playerScore;
                    cScore.textContent =computerScore;
                }else return;
            }else{

                switch(getWinner(gameId)){
                    case "tie":
                        para.textContent = "It's a tie!";
                        break;
                    case "player":
                        para.textContent = `${playerSelection} beats ${computerSelection}, you win!`;                        playerScore++;
                        score.textContent = playerScore;
                        number.classList.add('winner')
                        break;
                    case "computer":
                        para.textContent = `${computerSelection} beats ${playerSelection}, you lose!`;
                        computerScore++
                        cScore.textContent = computerScore;
                        cnumber.classList.add('winner')
                        break;
                    default:
                        console.log("Sorry, an error occured");
                }
            }


        });

    cnumber.addEventListener('transitionend', removeTransition);
    number.addEventListener('transitionend',removeTransition);

    

    
        
        
        });
    
    

    scoreBoard.appendChild(score);
    scoreBoard.appendChild(cScore);
    document.body.appendChild(scoreBoard);
    document.body.appendChild(para);

}


    

    


function removeTransition(e){
    if(e.propertyName !== 'transform') return;

    this.classList.remove('winner');
}



function getWinner(id){
    switch (id){
        case 1:
            return "tie"
            break;
        case 2:
            return "player"
        case 3:
            return "computer"
        default:
            return "error"
    }
}

game();

