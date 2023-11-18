var lossCount = 0;
function rockPaperScissors(uChoice){
    const choices = ["rock","paper","scissors"];
    var userChoice = choices[uChoice];
    var randomNumber=Math.floor(Math.random() * 3);
    var computerChoice=choices[randomNumber];
    
    if(userChoice==computerChoice){
        alert("It was a draw! You both chose " +userChoice)
        lossCount = lossCount+1;
    }
    else if(userChoice=="rock" && computerChoice=="paper"){
        alert("You loose! Paper beats rock.")
        lossCount = lossCount+1;
    }
    else if(userChoice=="paper" && computerChoice=="rock"){
        alert("You win! Paper beats rock.")
        uWin = true;
    }
    else if(userChoice=="paper" && computerChoice=="scissors"){
        alert("You lose! Scissors beats paper.")
        lossCount = lossCount+1;
    }
    else if(userChoice=="scissors" && computerChoice=="paper"){
        alert("You win! Scissors beats paper.")
        uWin = true;
    }
    else if(userChoice=="scissors" && computerChoice=="rock"){
        alert("You lose! Rock beats scissors.")
        lossCount = lossCount+1;
    }
    else if(userChoice=="rock" && computerChoice=="scissors"){
        alert("You win! Rock beats scissors.")
        uWin = true;
    }
    else{
        alert("Invalid input. Please try again.")
    }
    if(lossCount>=3){
        document.getElementById("gameChoices").hidden=true;
        document.getElementById("message").innerHTML="You lose! You had 3 chances to win! To play again reload the page.";
    }
    if(uWin==true){
        document.getElementById("gameChoices").hidden=true;
        document.getElementById("message").innerHTML="You Win! To play again reload the page.";
    }
    

}





