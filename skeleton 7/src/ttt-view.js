const Game = require('./game.js')

class View {
  constructor(game, $el) {
    // debugger
  }

  bindEvents() {
    // callback = 
    $('li').on("click", e => Game.prototype.playMove([0,1]));
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

    for (let colIdx = 0; colIdx < 3; colIdx++) {
      

      for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
        $('ul').append("<li></li>");
        $('li').attr('pos', [rowIdx, colIdx]);
      }
    }
  }
};

module.exports = View;
