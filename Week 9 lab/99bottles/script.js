function bottles(){
    for(i=99; i>=0;i--){
        if(i>2){
            document.getElementById("myID").innerHTML+="<br />"+i+" bottles of beer on the wall, " + i +" bottles of beer<br />Take one down and pass it around, "+(i-1) +" bottles of beer on the wall";
        }
        else if(i==2){
            document.getElementById("myID").innerHTML+="<br />"+i+" bottles of beer on the wall, " + i +" bottles of beer<br />Take one down and pass it around, "+(i-1) +" bottle of beer on the wall";
        }
        else if(i==1){
            document.getElementById("myID").innerHTML+="<br />"+i+" bottle of beer on the wall, " + i +" bottle of beer<br />Take one down and pass it around, no more bottles of beer on the wall";
        }
        else{
            document.getElementById("myID").innerHTML+="<br />"+"No more bottles of beer on the wall, no more bottles of beer<br />Go to the store and buy some more, 99 bottles of beer on the wall";
        }
    }
}