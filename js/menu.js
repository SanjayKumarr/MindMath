var WELCOME_USER = 'Hello! Welcome to MindMath';
var moving_back = false;
var menuState = {

  create: function () {
    game.add.image(0, 0, 'background_1200_900');

    var welcome_board = game.add.image(game.world.centerX,game.world.centerY - 200, 'homework_green_board');
    welcome_board.anchor.setTo(0.5);

    var welcome_txt = game.add.text(game.world.centerX,game.world.centerY - 200, WELCOME_USER, {fill: '#fff', font: "30px"});
    welcome_txt.anchor.setTo(0.5);
    
    var btn_text_style = {fill: '#fff', font: "20px"};

    var help_tux_btn = game.add.button(game.world.centerX, 500, 'text_button', this.startHomeWork);
    help_tux_btn.anchor.setTo(0.5);
    var help_tux_txt = game.add.text(game.world.centerX, 500, 'Help Tux\'s H/w', btn_text_style);
    help_tux_txt.anchor.setTo(0.5);

    var show_menu_btn = game.add.button(game.world.centerX, 700, 'text_button', this.moveToTricksList);
    show_menu_btn.anchor.setTo(0.5);
    var show_menu_txt = game.add.text(game.world.centerX, 700, 'Show all tricks', btn_text_style);
    show_menu_txt.anchor.setTo(0.5);

    var calc_challenge_btn = game.add.button(game.world.centerX, 600, 'text_button', this.startCalcChallenge);
    calc_challenge_btn.anchor.setTo(0.5);
    var calc_challenge_txt = game.add.text(game.world.centerX, 600, 'Calculator challenge', btn_text_style);
    calc_challenge_txt.anchor.setTo(0.5);

    //game.state.start('questionDisplay');
  },

  moveToTricksList: function() {
    game.state.start('tricksList');
  },

  startCalcChallenge: function() {
    game.state.start('calcChallenge');
  },

  startHomeWork: function startHomeWork() {
    game.state.start('questionDisplay');
    moving_back = false;
  }

};


