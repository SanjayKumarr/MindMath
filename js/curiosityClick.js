var current_step_index = -1;

var curiosityClickState = {

    create: function () {
      game.add.image(0, 0, 'background_1200_900');

      var back_button = game.add.button(game.world.centerX - 550 ,100, 'back_button', moveToLearnTrick);
      back_button.anchor.setTo(0.5)
      back_button.scale.setTo(0.40, 0.40);
      var back_button_txt = game.add.text(game.world.centerX - 550 ,130, "Back", {fill: '#ccc', font: "bold 15px"});
      back_button_txt.anchor.setTo(0.5);

      var board = game.add.image(game.world.centerX, game.world.centerY - 100, 'board');
      board.scale.setTo(0.75, 0.75);
      board.anchor.setTo(0.5);

      var navigate_button = game.add.button(game.world.centerX ,game.world.centerY + 250, 'text_button', showNext);
      navigate_button.anchor.setTo(0.5);
      navigate_button_txt = game.add.text(game.world.centerX ,game.world.centerY + 250, 'Next Step', {fill: '#fff', font: "20px"});
      navigate_button_txt.anchor.setTo(0.5);
    }
};

function moveToLearnTrick() {
  game.state.start('learnTrick');
  moving_back = true;
  current_step = -1;
}

function showNext() {

}
