let userstatus=0;
let userscore=0;
let computerscore=0;
function useraction1(){
userstatus=1;
document.getElementById("uimgbox1").style.border="5px solid black";
document.getElementById("uimgbox2").style.border="5px solid bisque";
document.getElementById("uimgbox3").style.border="5px solid bisque";
}
function useraction2(){
userstatus=2;
document.getElementById("uimgbox1").style.border="5px solid bisque";
document.getElementById("uimgbox2").style.border="5px solid black";
document.getElementById("uimgbox3").style.border="5px solid bisque";
}
function useraction3(){
userstatus=3;
document.getElementById("uimgbox1").style.border="5px solid bisque";
document.getElementById("uimgbox2").style.border="5px solid bisque";
document.getElementById("uimgbox3").style.border="5px solid black";
}
let computerstatus=0;
console.log(userstatus);

function playgame(){
    let count=0;
    const myinterval=setInterval(function(){
        count++;
        computerstatus=Math.floor(Math.random()*(4-2+1))+1;
        console.log(computerstatus)
        
        
        if(computerstatus==1){
            document.getElementById("cimgbox1").style.border="5px solid black";
            document.getElementById("cimgbox2").style.border="5px solid bisque";
            document.getElementById("cimgbox3").style.border="5px solid bisque";
            console.log("condition1",computerstatus)
        }
        else if(computerstatus==2){
            document.getElementById("cimgbox1").style.border="5px solid bisque";
            document.getElementById("cimgbox2").style.border="5px solid black";
            document.getElementById("cimgbox3").style.border="5px solid bisque";
            console.log("condition2",computerstatus)
        }
        else if(computerstatus==3){
            document.getElementById("cimgbox1").style.border="5px solid bisque";
            document.getElementById("cimgbox2").style.border="5px solid bisque";
            document.getElementById("cimgbox3").style.border="5px solid black";
            console.log("condition3",computerstatus)
        }
        if(count==20){
            clearInterval(myinterval);
            showresult();
        }
    },100)

   
}
function showresult(){
    if(userstatus==2 && computerstatus==1||userstatus==3 && computerstatus==2||userstatus==1 && computerstatus==3){
        document.getElementById("usertitle").innerHTML="YOU WON";
        document.getElementById("usertitle").style.backgroundColor="greenyellow";
        userscore=userscore+1;
        
    }
    else if(userstatus==computerstatus){
        document.getElementById("usertitle").innerHTML="DRAW";
        document.getElementById("usertitle").style.backgroundColor="white";
    }
    else{
        document.getElementById("usertitle").innerHTML="YOU LOSE";
        document.getElementById("usertitle").style.backgroundColor="red";
        computerscore=computerscore+1;

    }
}
function playagain(){
    document.getElementById("uimgbox1").style.border="5px solid bisque";
document.getElementById("uimgbox2").style.border="5px solid bisque";
document.getElementById("uimgbox3").style.border="5px solid bisque";

document.getElementById("cimgbox1").style.border="5px solid bisque";
document.getElementById("cimgbox2").style.border="5px solid bisque";
document.getElementById("cimgbox3").style.border="5px solid bisque";
userstatus=0;
computerstatus=0;
userscore=0;
computerscore=0;
document.getElementById("usertitle").innerHTML="Choose your option";
document.getElementById("usertitle").style.backgroundColor="bisque";
}
