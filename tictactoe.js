var prompt = require('prompt');
/******************************************************************************************************************************************
Make a command line tic-tac-toe game from scratch for two players.
Expected features
===============
* Minimal UI that redraws the board and makes clear whose turn it is, each turn.
* Players can submit moves (assume, admittedly unrealistically, that both players are sitting at the same keyboard).
* Win detection - detect and display who won

Bonus / stretch goals (any or all of the following)
=======================================
* Structure your code such that the UI can be turned easily into a native mobile app (iOS say) without having to rewrite the core game logic.
* Implement win detection with a functional rather than iterative style.
* Between moves, rotate the board 90 degrees counter-clockwise. The moves "fall" due to "gravity", post-rotation.

Implementation instructions
=======================
* Create the project from scratch. Don't just clone an existing project.
* This includes writing configuration files for any dependencies and test framework setup.
* You should have a reasonably thorough suite of unit tests using a real unit test framework.
* Use the editor of your choice.
* Init a git repo for this project.
* Push the repo up to github.
* Make small commits as you go to illustrate your thought process and be able to back out changes easily.
* Don't forget to push your final solution up to Github.
* Add a professional-looking README file with installation and usage instructions.

Try your best to work on this challenge without referring to outside resources. However, if you have to look things up online, go ahead.

Submission instructions
====================
Upon completion of your work, submit a link to the repository via this form.

******************************************************************************************************************************************/




var Game = function (p1name, p2name) {
  this.board = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
  ];
  this.player1 = {
    name: p1name
  };
  this.player2 = {
    name: p2name
  };
};

Game.prototype.checkWin = function() {
  // 3 scenarios to win
  // if everything in a row is same value
  // if everything in same col is same value
  // if everything in diagonals are same value
  // or if all spaces are filled, then tie

  // check rows
  for (var row = 0; row < this.board.length; row++) {
    if (this.board[row][0] === this.board[row][1] && this.board[row][0] === this.board[row][2]) {
      if (this.board[row][0] === 'x') {
        console.log('player1 wins');
        return true;
      } else if (this.board[row][0] === 'o') {
        console.log('player2 wins');
        return true;
      }
    }
  }

  // check columns
  for (var col = 0; col < this.board[0].length; col++) {
    if (this.board[0][col] === this.board[1][col] && this.board[0][col] === this.board[2][col]) {
      if (this.board[0][col] === 'x') {
        console.log('player1 wins');
        return true;

      } else if (this.board[0][col] === 'o') {

        console.log('player2 wins');
        return true;

      }
    }
  }

  // check top-left to bottom-right diagonal
  if (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]) {
    if (this.board[0][0] === 'x') {
      console.log('player1 wins');
      return true;

    } else if (this.board[0][0] === 'o') {
      console.log('player2 wins');
      return true;

    }
  }

  if (this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0]) {
    if (this.board[0][2] === 'x') {
      console.log('player1 wins');
      return true;

    } else if (this.board[0][2] === 'o') {
      console.log('player2 wins');
      return true;

    }
  }

  return false;

};

Game.prototype.toggleBoard = function(x, y, player) {
  // check if spot if already taken, if so, then cannot place
  if (player === 'p1') {
    // player 1
    this.board[y][x] = 'x';
  } else {
    // player 2
    this.board[y][x] = 'o';
  }
}

Game.prototype.displayBoard = function() {
  console.log('  0   1   2');
  for (var row = 0; row < this.board.length; row++) {
    console.log(row + ' ' + this.board[row][0] + ' | ' + this.board[row][1] + ' | ' + this.board[row][2] + ' ');
    if (row !== this.board.length - 1) {
      console.log('  -----------');
    }
  }
};

Game.prototype.startGame = function() {
  var context = this;
  prompt.start();

  var count = 0;
  this.displayBoard();

  var playerMove = function(player) {
    prompt.get(['x', 'y'], function (err, result) {
      var x = result.x;
      var y = result.y;

      if (context.board[y][x] === ' ') {
        context.toggleBoard(x, y, player);
        context.displayBoard();
      } else {
        console.log('please choose another square');
      }
      console.log('checkwin', context.checkWin());
      if (context.checkWin()){
        return;
      } else {
        if (player === 'p1') { playerMove('p2'); }
        else { playerMove('p2'); }
      }

    });
  }
  console.log('what is your move?');
  playerMove('p1');

};

var test = new Game('derek', 'bob');
test.startGame();
