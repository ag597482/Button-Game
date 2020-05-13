var c=1;
var sc=-1;
function callfun(atr){

sc++;
//b1.disabled=true;

var n=Math.random()*10;
n=Math.floor(n);
n=n*9/10;
n=Math.floor(n);
n++;
c=n;
var id="b"+c;


document. getElementById(atr). style. backgroundColor = '';
document. getElementById(id). style. backgroundColor = 'Red';

for(var i=1;i<=9;i++)
{

    var vaal="b"+i;
    if(vaal == id)
    {
        vaal.disabled=false;
        document.getElementById(vaal).disabled=false;
        document.getElementById(vaal).innerHTML="Click ME";
    }
    else{
        vaal.disabled=true;
        
        document.getElementById(vaal).disabled=true;
        document.getElementById(vaal).innerHTML=""+i;
    }
}
document.getElementById("scorein").innerHTML=sc;




}
//Define vars to hold time values
let seconds = 10;

//Define vars to hold "display" value
let displaySeconds = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){

    seconds--;

    //Logic to determine when to increment next values
    if(seconds === 0){

        document.getElementById("result").innerHTML=sc;
        if(sc<7)
        {
            document.getElementById("t1").style.border = "thick solid #0000FF";
        }
        else if(sc>=7&&sc<=9)
        {
            document.getElementById("t2").style.border = "thick solid #0000FF";
        }
        else if(sc >=10&&sc<=12)
        {
            document.getElementById("t3").style.border = "thick solid #0000FF";
        }
        else if( sc==13 || sc== 14)
        {
            document.getElementById("t4").style.border = "thick solid #0000FF";
        }
        else
        {
            document.getElementById("t5").style.border = "thick solid #0000FF";
        }
startStop();
    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }
    //Display updated time values to user
    document.getElementById("display").innerHTML =  displaySeconds;

}



function startStop(){

    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Pause";    
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }
}

//Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 10;
    document.getElementById("display").innerHTML = "10";
    document.getElementById("startStop").innerHTML = "Start";
}