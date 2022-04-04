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

    for(i = 0; i< 5; i++){
        let playerSelection = prompt("Rock, Paper, Scissors, Shoot!(Choose your item)");
        let computerSelection = computerPlay();
        let winPrompt = `You win! ${playerSelection} beats ${computerSelection}`;
    let losePrompt = `You lose! ${computerSelection} beats ${playerSelection}`;
        let result = playRound(computerSelection, playerSelection);
        if (result === 2){
            playerScore++;
            console.log(winPrompt);
        }else if (result === 3){
            computerScore++;
            console.log(losePrompt);
        }else if (result ===4){
            playerSelection = prompt(`Oops! Didn't recognize your choice of ${playerChoice}. Try again!`);
        }else{
            console.log('It\'s a tie!');
        }
        console.log(`Score: Player - ${playerScore}, Computer - ${computerScore}`);
    }

    if(playerScore > computerScore){
        console.log("Player wins!")
    }
    else if(computerScore > playerScore){
        console.log("Computer wins!")
    }else{
        console.log("It's a tie!")
    }
}

game();

