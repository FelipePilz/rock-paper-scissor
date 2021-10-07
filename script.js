var elements = document.querySelectorAll('.player-options div > img');
var playerOpt = "";

const resetOpacityPlayer = ()=>{
    for(var i=0; i < elements.length; i++){
            elements[i].style.opacity = 0.3;
    }
}

for(var i=0; i < elements.length; i++){
    elements[i].addEventListener('click',(t)=>{
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute("opt");
    })
}