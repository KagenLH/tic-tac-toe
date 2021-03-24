const player_dialogue = document.querySelector('#player_dialogue');
const tiles = Array.from(document.querySelectorAll(".tile"));

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let my_num = 6;
console.log(document.querySelector(`#tile-${my_num}`).innerText);

function generateAiSquare() {
    let ai_square = getRandomInt(10);
    if(ai_square) {
        if((document.querySelector(`#tile-${ai_square}`).innerText == 'X') || (document.querySelector(`#tile-${ai_square}`).innerText == 'O')) {
            ai_square = generateAiSquare();
        }
    }
    else {
        ai_square = generateAiSquare();
    }

    return ai_square;
}

function didPlayerWin(player) {
    // Horizontal win conditions
    if(document.querySelector('#tile-1').innerText == player && document.querySelector('#tile-2').innerText == player && document.querySelector('#tile-3').innerText == player) return true;
    if(document.querySelector('#tile-4').innerText == player && document.querySelector('#tile-5').innerText == player && document.querySelector('#tile-6').innerText == player) return true;
    if(document.querySelector('#tile-7').innerText == player && document.querySelector('#tile-8').innerText == player && document.querySelector('#tile-9').innerText == player) return true;
    // Vertical win conditions
    if(document.querySelector('#tile-1').innerText == player && document.querySelector('#tile-4').innerText == player && document.querySelector('#tile-7').innerText == player) return true;
    if(document.querySelector('#tile-2').innerText == player && document.querySelector('#tile-5').innerText == player && document.querySelector('#tile-8').innerText == player) return true;
    if(document.querySelector('#tile-3').innerText == player && document.querySelector('#tile-6').innerText == player && document.querySelector('#tile-9').innerText == player) return true;
    // Diagonal win conditions
    if(document.querySelector('#tile-1').innerText == player && document.querySelector('#tile-5').innerText == player && document.querySelector('#tile-9').innerText == player) return true;
    if(document.querySelector('#tile-3').innerText == player && document.querySelector('#tile-5').innerText == player && document.querySelector('#tile-7').innerText == player) return true;
    // No win condition is met
    return false;
}

function boardIsFull() {
    for(let i = 1; i < 10; i++) {
        if(document.querySelector(`#tile-${i}`).innerText == '') return false;
    }
    return true;
}

function onTileClick(tile) {
    this.innerText = 'X';
    this.removeEventListener('click', onTileClick);

    if(didPlayerWin('X')) {
        tiles.forEach(function(board_tiles) {
            board_tiles.removeEventListener('click', onTileClick);
        });
        player_dialogue.innerText = 'Three in a row, you win! Refresh to play again.';
        return;
    }

    if(boardIsFull()) {
        player_dialogue.innerText = 'The board is full, its a draw! Refresh to play again.';
        return;
    }

    let ai_square = generateAiSquare();
    console.log(ai_square);
    ai_tile = document.querySelector(`#tile-${ai_square}`);
    ai_tile.innerText = 'O';
    ai_tile.removeEventListener('click', onTileClick);

    if(didPlayerWin('O')) {
        tiles.forEach(function(board_tiles) {
            board_tiles.removeEventListener('click', onTileClick);
        });
        player_dialogue.innerText = 'The Computer has three in a row, you lose! Refresh to play again.';
        return;
    }

    if(boardIsFull()) {
        player.dialogue.innerText = 'The board is full, its a draw! Refresh to play again.';
        return;
    }

    player_dialogue.innerText = "Make your next move...";
}

tiles.forEach(function(clicked_tile) {
    clicked_tile.addEventListener('click', onTileClick);
});
