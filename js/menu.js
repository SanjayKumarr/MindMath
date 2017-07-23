var WELCOME_USER = 'Hello! Welcome to MindMath';
var moving_back = false;
var menuState = {

  create: function () {
    game.add.image(0, 0, 'background_1200_900');

    var welcome_board = game.add.image(game.world.centerX,game.world.centerY - 200, 'homework_green_board');
    welcome_board.anchor.setTo(0.5);

    var welcome_txt = game.add.text(game.world.centerX,game.world.centerY - 200, WELCOME_USER, {fill: '#fff', font: "30px"});
    welcome_txt.anchor.setTo(0.5);

    var update_board_design_txt_temp = game.add.text(game.world.centerX - 380,game.world.centerY - 120, 'The board design has to be updated. The board design has to be updated. The board design has to be updated. The board design', {fill: '#fff', font: "15px"});

    var btn_text_style = {fill: '#fff', font: "20px"};

    var help_tux_btn = game.add.button(game.world.centerX, 500, 'text_button', startHomeWork);
    help_tux_btn.anchor.setTo(0.5);
    var help_tux_txt = game.add.text(game.world.centerX, 500, 'Help Tux\'s H/w', btn_text_style);
    help_tux_txt.anchor.setTo(0.5);

    var show_menu_btn = game.add.button(game.world.centerX, 600, 'text_button', startHomeWork);
    show_menu_btn.anchor.setTo(0.5);
    var show_menu_txt = game.add.text(game.world.centerX, 600, 'Show all tricks', btn_text_style);
    show_menu_txt.anchor.setTo(0.5);

    var calc_challenge_btn = game.add.button(game.world.centerX, 700, 'text_button', startHomeWork);
    calc_challenge_btn.anchor.setTo(0.5);
    var calc_challenge_txt = game.add.text(game.world.centerX, 700, 'Calculator challenge', btn_text_style);
    calc_challenge_txt.anchor.setTo(0.5);


    //game.state.start('questionDisplay');
  }
};

function startHomeWork() {
  game.state.start('questionDisplay');
  moving_back = false;
}
