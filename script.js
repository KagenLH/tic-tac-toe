const player_dialogue = document.querySelector('#player_dialogue');
const tiles = Array.from(document.querySelectorAll(".tile"));

function aiPlayMove() {
    // Checking for plays to make for immediate wins
    // Tile 1 Win Check
    if(tiles[0].innerText == "") {
        if(tiles[1].innerText == 'O' && tiles[2].innerText == 'O') return 1;
        if(tiles[3].innerText == 'O' && tiles[6].innerText == 'O') return 1;
        if(tiles[4].innerText == 'O' && tiles[8].innerText == 'O') return 1;
    }

    // Tile 2 Win Check
    if(tiles[1].innerText == "") {
        if(tiles[0].innerText == 'O' && tiles[2].innerText == 'O') return 2;
        if(tiles[4].innerText == 'O' && tiles[7].innerText == 'O') return 2;
    }

    // Tile 3 Win Check
    if(tiles[2].innerText == "") {
        if(tiles[0].innerText == 'O' && tiles[1].innerText == 'O') return 3;
        if(tiles[5].innerText == 'O' && tiles[8].innerText == 'O') return 3;
        if(tiles[4].innerText == 'O' && tiles[6].innerText == 'O') return 3;
    }

    //Tile 4 Win Check
    if(tiles[3].innerText == "") {
        if(tiles[0].innerText == 'O' && tiles[6].innerText == 'O') return 4;
        if(tiles[4].innerText == 'O' && tiles[5].innerText == 'O') return 4;
    }

    //Tile 5 Win Check
    if(tiles[4].innerText == "") {
        if(tiles[0].innerText == 'O' && tiles[8].innerText == 'O') return 5;
        if(tiles[2].innerText == 'O' && tiles[6].innerText == 'O') return 5;
        if(tiles[1].innerText == 'O' && tiles[7].innerText == 'O') return 5;
        if(tiles[3].innerText == 'O' && tiles[5].innerText == 'O') return 5;
    }
    //Tile 6 Win Check
    if(tiles[5].innerText == "") {
        if(tiles[3].innerText == 'O' && tiles[4].innerText == 'O') return 6;
        if(tiles[2].innerText == 'O' && tiles[8].innerText == 'O') return 6;
    }

    //Tile 7 Win Check
    if(tiles[6].innerText == "") {
        if(tiles[0].innerText == 'O' && tiles[3].innerText == 'O') return 7;
        if(tiles[2].innerText == 'O' && tiles[4].innerText == 'O') return 7;
        if(tiles[7].innerText == 'O' && tiles[8].innerText == 'O') return 7;
    }

    //Tile 8 Win Check
    if(tiles[7].innerText == "") {
        if(tiles[6].innerText == 'O' && tiles[8].innerText == 'O') return 8;
        if(tiles[1].innerText == 'O' && tiles[4].innerText == 'O') return 8;
    }

    //Tile 9 Win Check
    if(tiles[8].innerText == "") {
        if(tiles[0].innerText == 'O' && tiles[4].innerText == '0') return 9;
        if(tiles[6].innerText == 'O' && tiles[7].innerText == 'O') return 9;
        if(tiles[2].innerText == 'O' && tiles[5].innerText == 'O') return 9;
    }


    // Checking for plays the opponent can make next turn that would result in an immediate loss, and making that play if found.
    // Tile 1 Loss Check
    if(tiles[0].innerText == "") {
        if(tiles[1].innerText == 'X' && tiles[2].innerText == 'X') return 1;
        if(tiles[3].innerText == 'X' && tiles[6].innerText == 'X') return 1;
        if(tiles[4].innerText == 'X' && tiles[8].innerText == 'X') return 1;
    }

    // Tile 2 Loss Check
    if(tiles[1].innerText == "") {
        if(tiles[0].innerText == 'X' && tiles[2].innerText == 'X') return 2;
        if(tiles[4].innerText == 'X' && tiles[7].innerText == 'X') return 2;
    }

    // Tile 3 Loss Check
    if(tiles[2].innerText == "") {
        if(tiles[0].innerText == 'X' && tiles[1].innerText == 'X') return 3;
        if(tiles[5].innerText == 'X' && tiles[8].innerText == 'X') return 3;
        if(tiles[4].innerText == 'X' && tiles[6].innerText == 'X') return 3;
    }

    //Tile 4 Loss Check
    if(tiles[3].innerText == "") {
        if(tiles[0].innerText == 'X' && tiles[6].innerText == 'X') return 4;
        if(tiles[4].innerText == 'X' && tiles[5].innerText == 'X') return 4;
    }

    //Tile 5 Loss Check
    if(tiles[4].innerText == "") {
        if(tiles[0].innerText == 'X' && tiles[8].innerText == 'X') return 5;
        if(tiles[2].innerText == 'X' && tiles[6].innerText == 'X') return 5;
        if(tiles[1].innerText == 'X' && tiles[7].innerText == 'X') return 5;
        if(tiles[3].innerText == 'X' && tiles[5].innerText == 'X') return 5;
    }
    //Tile 6 Loss Check
    if(tiles[5].innerText == "") {
        if(tiles[3].innerText == 'X' && tiles[4].innerText == 'X') return 6;
        if(tiles[2].innerText == 'X' && tiles[8].innerText == 'X') return 6;
    }

    //Tile 7 Loss Check
    if(tiles[6].innerText == "") {
        if(tiles[0].innerText == 'X' && tiles[3].innerText == 'X') return 7;
        if(tiles[2].innerText == 'X' && tiles[4].innerText == 'X') return 7;
        if(tiles[7].innerText == 'X' && tiles[8].innerText == 'X') return 7;
    }

    //Tile 8 Loss Check
    if(tiles[7].innerText == "") {
        if(tiles[6].innerText == 'X' && tiles[8].innerText == 'X') return 8;
        if(tiles[1].innerText == 'X' && tiles[4].innerText == 'X') return 8;
    }

    //Tile 9 Loss Check
    if(tiles[8].innerText == "") {
        if(tiles[0].innerText == 'X' && tiles[4].innerText == 'X') return 9;
        if(tiles[6].innerText == 'X' && tiles[7].innerText == 'X') return 9;
        if(tiles[2].innerText == 'X' && tiles[5].innerText == 'X') return 9;
    }

    if(tiles[4].innerText == "") return 5;

    // No immediate win or loss available, so just play into the next available tile.
    for(i = 0; i < 9; i++) {
        if(tiles[i].innerText == "") return i + 1;
    }

}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

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
    if(tiles[0].innerText == player && tiles[1].innerText == player && tiles[2].innerText == player) return true;
    if(tiles[3].innerText == player && tiles[4].innerText == player && tiles[5].innerText == player) return true;
    if(tiles[6].innerText == player && tiles[7].innerText == player && tiles[8].innerText == player) return true;
    // Vertical win conditions
    if(tiles[0].innerText == player && tiles[3].innerText == player && tiles[6].innerText == player) return true;
    if(tiles[1].innerText == player && tiles[4].innerText == player && tiles[7].innerText == player) return true;
    if(tiles[2].innerText == player && tiles[5].innerText == player && tiles[8].innerText == player) return true;
    // Diagonal win conditions
    if(tiles[0].innerText == player && tiles[4].innerText == player && tiles[8].innerText == player) return true;
    if(tiles[2].innerText == player && tiles[4].innerText == player && tiles[6].innerText == player) return true;
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

    let ai_move = aiPlayMove()
    document.querySelector(`#tile-${ai_move}`).removeEventListener('click', onTileClick);
    document.querySelector(`#tile-${ai_move}`).innerText = 'O';


    if(didPlayerWin('O')) {
        tiles.forEach(function(board_tiles) {
            board_tiles.removeEventListener('click', onTileClick);
        });
        player_dialogue.innerText = 'The Computer has three in a row, you lose! Refresh to play again.';
        return;
    }

    if(boardIsFull()) {
        player_dialogue.innerText = 'The board is full, its a draw! Refresh to play again.';
        return;
    }

    player_dialogue.innerText = "Make your next move...";
}

tiles.forEach(function(clicked_tile) {
    clicked_tile.addEventListener('click', onTileClick);
});
