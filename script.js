const xajara=document.getElementById("xajara")
const waraqa=document.getElementById("waraxa")
const maqas=document.getElementById("maqas")
const replay=document.getElementById("replay")
const game=document.getElementById("game")
const textCom=document.getElementById("cmcount")
const textPlay=document.getElementById("plcount")
const text=document.getElementById("text")
const dooro=["xajara","waraqa","maqas"]

let computerScore=0;
let playerScore=0;

const checkWinner=()=>{
    if(playerScore===3||computerScore===3){
        game.style.display="none"
        replay.style.display="block"
        text.innerText=`the winner is the ${playerScore===3? "player":"computer"}`
    }
}


// computer choice

const random=()=>{
    return dooro[Math.floor(Math.random()*3)]
}

    
const getResult=(userChoise)=>{
    const computerchioce=random()

if(userChoise === computerchioce){
    text.innerText= `"${computerchioce}" isku mid ayaad tihin "${userChoise}"`
}
else if(
    (userChoise ==="maqas" && computerchioce === "waraqa")||
    (userChoise === "waraqa" && computerchioce === "xajara")||
    (userChoise === "xajara" && computerchioce === "maqas")
){
playerScore++
textPlay.innerText=playerScore
text.innerText=`${userChoise} beat ${computerchioce} player win`
}
else{
 
computerScore++
textCom.innerText=computerScore
text.innerText=`${computerchioce} beat ${userChoise} computer win`
}
checkWinner()
}







xajara.addEventListener("click",function(){
    getResult("xajara")
    })
maqas.addEventListener("click",function(){
    getResult("maqas" )
})

waraqa.addEventListener("click",function(){
    getResult("waraqa")
})

replay.addEventListener("click",function(){
    
    computerScore=0
    playerScore=0
    textCom.innerText=computerScore
    textPlay.innerText=playerScore
    text.innerText="";
    
    game.style.display="block";
    replay.style.display="none";
 

})


