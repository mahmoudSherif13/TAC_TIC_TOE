const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const btn = document.getElementById("btn");
const cells = Array.from(document.getElementsByClassName("cell"));
const gameBox = document.getElementById("gameBox");

let player1;
let player2;
let curGame;
let curPlayer = true;

btn.addEventListener('click', ()=>{
    if(name1.value.length && name2.value.length){
        player1 = player(name1.value);
        player2 = player(name2.value);
        curGame = game(player1, player2);
        btn.disabled = true;
        gameBox.style.visibility = 'visible';
    }
});

const clearListeners = ()=>{
    cells.forEach(key=>{
        key.removeEventListener('click' , clickHandle);
    });
};

const clickHandle = (e)=>{
    let curColor;
    let ans;
    let key = e.target;
    const x = key.attributes["data-pos"].value[0].charCodeAt() - '0'.charCodeAt();
    const y = key.attributes["data-pos"].value[1].charCodeAt() - '0'.charCodeAt();
    if(curPlayer){
        ans = curGame.play(player1 ,x , y);
        curColor = "green";
    }else{
        ans = curGame.play(player2 , x , y);
        curColor = "red";
    }
    if(ans == -1){
        return;
    }
    curPlayer = !curPlayer;
    key.style.background = curColor;
    if(ans){
        if(ans == 1){
            console.log(player1.getName());
        }else{
            console.log(player2.getName());
        }
        clearListeners();
    }
};

cells.forEach(key=>{
    key.addEventListener("click",clickHandle);
});