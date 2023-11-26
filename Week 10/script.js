
function guessNumber(){
    let count =0;
    let randomArray=[];
    for (i=0;i<5;i++){
        randomArray[i]= Math.floor(Math.random() * 10) + 1;
    }
    choice = parseInt(prompt("Enter a number between 1 and 10"));
    if(Number.isInteger(choice)&&choice>0&&choice<=10){
        for (i=0;i<5;i++){
            if (choice==randomArray[i]){
                count++;
            }
        }
        alert("The number "+choice+" was in the list "+count+" times.\nThe list was "+randomArray.toString());
    }
    else{
        alert("Invalid input, please try again!")
    }
    
}



