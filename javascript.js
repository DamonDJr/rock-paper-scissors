function computerPlay(){
    let choice = getRandomNumber(3) + 1;
    if (choice === 1){
        return "Rock";
    }else if (choice === 2){
        return "Paper";
    }else{
        return "Scissors";
    }
}

function getRandomNumber(number){
    return Math.floor(Math.random() * number);
}

console.log(computerPlay());