const Game = require('./game.js')

class View {
  constructor(game, $el) {
    // debugger
  }

  bindEvents() {
    debugger
    const player = game.currentPlayer;
    debugger
    $('li').on("click", e => {
      // debugger
      let posArrayRough = Array.from(e.target.dataset["pos"])
      let pos = [parseInt(posArrayRough[0]), parseInt(posArrayRough[2])]
      debugger
    Game.prototype.playMove(pos);
    });
    // debugger;
  
    // $('li').data()
  }
  
  makeMove($square) {
    
  }

  setupBoard() {
    // append elements to containing tag
    // ul > li, li, li
    // ul > li, li, li
    // ul > li, li, li

    $('.ttt').append("<ul></ul>");
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      
      
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        $('ul').append("<li></li>");
        // debugger
        $('li').last().attr('data-pos', [ rowIdx, colIdx]);
      }
    }
  }
};

module.exports = View;
