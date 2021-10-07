var playerElements = document.querySelectorAll('.player-options div > img');
var enemyElements = document.querySelectorAll('.enemy-options div > img');
var playerScoreElement = document.querySelector('.player-score');
var enemyScoreElement = document.querySelector('.enemy-score');
var playerOpt = "";
var enemyOpt = "";
var playerScore = {
    win: 0,
    lose: 0
}
var enemyScore = {
    win: 0,
    lose: 0
}

const updateScoreDefeat = ()=>{
    enemyScore.win += 1;
    playerScore.lose += 1;
}

const updateScoreVictory = ()=>{
    playerScore.win += 1;
    enemyScore.lose += 1;
}

const showResult = ()=>{
    let winner = document.querySelector('.winner');

    if(playerOpt == enemyOpt){
        winner.innerHTML = "It's a tie";
    }else{
        if(playerOpt == "rock"){
            switch (enemyOpt){
                case "paper":
                    winner.innerHTML = "Enemy player wins!";
                    updateScoreDefeat();
                break;
                case "scissor":
                    winner.innerHTML = "You win!";
                    updateScoreVictory();
                break;
            }
        }else if(playerOpt == "paper"){
            switch (enemyOpt){
                case "rock":
                    winner.innerHTML = "You win!";
                    updateScoreVictory();
                break;
                case "scissor":
                    winner.innerHTML = "Enemy player wins!";
                    updateScoreDefeat();
                break;
            }
        }else{// playerOpt == scissors
            switch (enemyOpt){
                case "rock":
                    winner.innerHTML = "Enemy player wins!";
                    updateScoreDefeat();
                break;
                case "paper":
                    winner.innerHTML = "You win!";
                    updateScoreVictory();
                break;
            }
        }
    }
    playerScoreElement.innerHTML = playerScore.win+" W / "+playerScore.lose+" L";
    enemyScoreElement.innerHTML = enemyScore.win+" W / "+enemyScore.lose+" L";
}

const enemyChoice = ()=>{
    let rand = Math.floor(Math.random()*3);
    for(var i = 0; i < enemyElements.length; i++){
        if(i == rand){
            resetOpacityEnemy();
            enemyElements[i].style.opacity = 1;
            enemyOpt = enemyElements[i].getAttribute('opt');
        }
    }

    showResult();
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