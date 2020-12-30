const View = require('./ttt-view.js');
const Game = require('./game.js');


// const game = new Game();
// window.Game = game;

// const view = new View(game);
// window.View = view;


// document.addEventListener('DOMContentLoaded',function(){

//   const newGame = new Game();
  
// });



  $(() => {
    const game = new Game();
    // debugger
    const view = new View(game, $('.ttt'));
      view.setupBoard()
  });

