const View = require('./ttt-View.js');
const Game = require('./game.js');


const game = new Game();
window.Game = game;

const view = new View(game);
window.View = view;


document.addEventListener('DOMContentLoaded',function(){

  const newGame = new Game();
  
});

  $(() => {
    // Your code here
  });

