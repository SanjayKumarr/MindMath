var menuState = {

  create: function () {

    game.add.image(0, 0, 'background_1200_900');
    showHomeWorkScreen();

    var homework_question_txt = game.add.text(game.world.centerX,game.world.centerY - 200, getQuestion(), {fill: '#fff', font: "30px"});
    homework_question_txt.anchor.setTo(0.5);
  
  }

};

function getQuestion() {
  var question_prefix = 'Today, My teacher taught me the trick to find \n';
  var homework_questions = {
    easy: [
      'the square of any number ending with 5!',
      ''
    ],
    medium: [],
    hard: []
  }

  return question_prefix + homework_questions.easy[0];
};

function showHomeWorkScreen() {
  var homework_green_board = game.add.image(game.world.centerX,game.world.centerY - 200, 'homework_green_board');
  homework_green_board.anchor.setTo(0.5);

  var btn_text_style = {fill: '#fff', font: "20px"};
  
  var learn_trick_btn = game.add.button(game.world.centerX - 150,600, 'text_button');
  learn_trick_btn.anchor.setTo(0.5);
  var learn_trick_txt = game.add.text(game.world.centerX - 150,600, 'Learn the trick', btn_text_style);
  learn_trick_txt.anchor.setTo(0.5);

  var know_trick_btn = game.add.button(game.world.centerX + 150,600, 'text_button', doHomeworkForTux);
  know_trick_btn.anchor.setTo(0.5);
  var know_trick_txt = game.add.text(game.world.centerX + 150,600, 'I Know the trick', btn_text_style);
  know_trick_txt.anchor.setTo(0.5);

  var penguin_notepad = game.add.sprite(120, 600, 'penguin_notepad');
  penguin_notepad.scale.setTo(0.35, 0.35);
}

function doHomeworkForTux() {
  game.state.start('play');
}
