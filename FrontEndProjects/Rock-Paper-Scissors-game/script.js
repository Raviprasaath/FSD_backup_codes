let ans = document.getElementById('result');
let btn = document.getElementById('btn-submit');
let player1 = document.getElementsByClassName('player-1-selection')[0];
let player1Selected = document.getElementById('player1-selected');
let player2Selected = document.getElementById('player-2');
let checkingArea = document.getElementById('checking-area');
let fire = document.getElementsByClassName('firework')[0];

const array = ["stone", "paper", "scissor"];
const random = Math.floor(Math.random()*3+1);



function loadDelay() {
    btn.style.display = "inline-block"
    if (random === 1) {   
        player2Selected.innerHTML =     
        `<p class="selection-header">Computer Selection</p>
        <img  class="selector-img" src="./assets/stone.png" alt="stone">`
    } else if (random === 2) {
        player2Selected.innerHTML = 
        `<p class="selection-header">Computer Selection</p>
        <img class="selector-img" src="./assets/paper.png" alt="paper">`
    } else if (random === 3) {
        player2Selected.innerHTML = 
        `<p class="selection-header">Computer Selection</p>
        <img class="selector-img" src="./assets/scissor.jpg" alt="scissor">`
    }

}



function handleStone () {
    loadDelay()
    
    player1Selected.innerHTML = 
        `<p class="selection-header">Your Selection</p>
        <img class="selector-img" src="./assets/stone.png" alt="stone">` 
    if (random === 1) {
        ans.textContent = "Match Draw"
    } else if (random === 2) {
        ans.textContent = "Lost"   
    } else if (random === 3) {
        ans.textContent = "Win"  
        fire.style.display = "block"
    }    
    player1.style.opacity = 0;
    player1.style.transform = "translateY(50px)";
    player1Selected.style.opacity = 0;
    

    setTimeout(function () {
        player1.style.display = "none";
        player2Selected.style.opacity = 1;
        player1Selected.style.opacity = 1;

        player2Selected.style.transform = "translateY(0)";
    }, 500);
    
}


function handlePaper () {
    player1Selected.innerHTML = 
        `<p class="selection-header">Your Selection</p>
        <img class="selector-img" src="./assets/paper.png" alt="paper">`
    loadDelay()
    if (random === 1) {
        
        ans.textContent = "Win"
        fire.style.display = "block"
    } else if (random === 2) {
        ans.textContent = "Match Draw"
    } else if (random === 3) {
        ans.textContent = "Lost"
    }
    player1.style.opacity = 0;
    player1.style.transform = "translateY(50px)";
    player1Selected.style.opacity = 0;
    

    setTimeout(function () {
        player1.style.display = "none";
        player1Selected.style.opacity = 1;
        player2Selected.style.opacity = 1;
        player2Selected.style.transform = "translateY(0)";
    }, 500);
}


function handleScissor () {
    player1Selected.innerHTML = 
        `<p class="selection-header">Your Selection</p>
        <img class="selector-img" src="./assets/scissor.jpg" alt="scissor">`
    loadDelay()
    if (random === 1) {
        ans.textContent = "Lost"
        
    } else if (random === 2) {
        ans.textContent = "Win"
        fire.style.display = "block"
    } else if (random === 3) {
        ans.textContent = "Match Draw"
    }
    player1.style.opacity = 0;
    player1.style.transform = "translateY(50px)";
    player1Selected.style.opacity = 0;
    

    setTimeout(function () {
        player1.style.display = "none";
        player1Selected.style.opacity = 1;
        player2Selected.style.opacity = 1;
        player2Selected.style.transform = "translateY(0)";
    }, 500);   
}



btn.onclick = function () {
    location.reload()
}

