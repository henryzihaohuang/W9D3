class View {
  constructor(game, $el) {
    // debugger
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    // append elements to containing tag
    // ul > li, li, li
    // ul > li, li, li
    // ul > li, li, li
    
    $('.ttt').append('ul');
    $('ul').append('li');

  }
}

module.exports = View;
