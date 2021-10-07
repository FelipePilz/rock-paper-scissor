var playerElements = document.querySelectorAll('.player-options div > img');
var enemyElements = document.querySelectorAll('.enemy-options div > img');
var playerOpt = "";
var enemyOpt = "";

const enemyChoice = ()=>{
    let rand = Math.floor(Math.random()*3);
    for(var i = 0; i < enemyElements.length; i++){
        if(i == rand){
            resetOpacityEnemy();
            enemyElements[i].style.opacity = 1;
            enemyOpt = enemyElements[i].getAttribute('opt');
        }
    }
}

const resetOpacityEnemy = ()=>{
    for(var i=0; i < enemyElements.length; i++){
        enemyElements[i].style.opacity = 0.3;
    }
}


const resetOpacityPlayer = ()=>{
    for(var i=0; i < playerElements.length; i++){
        playerElements[i].style.opacity = 0.3;
    }
}

for(var i=0; i < playerElements.length; i++){
    playerElements[i].addEventListener('click',(t)=>{
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute("opt");

        enemyChoice();
    })
}