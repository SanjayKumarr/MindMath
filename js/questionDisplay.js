var chosen_question_number, is_user_selecting_question = false, user_selected_question = 0;
var questionDisplayState = {

  create: function () {

    game.add.image(0, 0, 'background_1200_900');
    showHomeWorkScreen();
    var question_txt = getQuestion(!moving_back);
    
    var homework_question_txt = game.add.text(game.world.centerX,game.world.centerY - 200, question_txt, {fill: '#fff', font: "20px"});
    homework_question_txt.anchor.setTo(0.5);
  
  }

};

function getQuestion(get_new_question) {
  var question_prefix = 'Today, My teacher taught me the trick to ';
  var homework_questions = [
    "find \n the Square of any number ending with 5!",
    "find \n the Square of numbers just below 100!",
    "\n multiply a number with 9",
    "find \n the Square of number just above 100!",
    "find the Square of \n any three digit number with a zero in between!",
    "\n multiply any number with 5!",
    "multiply \n a two digit number with 11",
    "multiply two digits \n when the sum of the one's digit is 10",
    //"Include your trick in the questions array"
  ];
  
  if(is_user_selecting_question) {
    is_user_selecting_question = false;
    chosen_question_number = user_selected_question;
  }
  else {
      if(get_new_question) {
      chosen_question_number = Math.floor((Math.random() * homework_questions.length) /2) * 2;
    }
  }  
  
  return question_prefix + homework_questions[chosen_question_number];
};

function showHomeWorkScreen() {
  var homework_green_board = game.add.image(game.world.centerX,game.world.centerY - 200, 'homework_green_board');
  homework_green_board.anchor.setTo(0.5);

  var back_button = game.add.button(game.world.centerX - 550 ,100, 'back_button', moveToMenu);
  back_button.anchor.setTo(0.5)
  back_button.scale.setTo(0.40, 0.40);
  var back_button_txt = game.add.text(game.world.centerX - 550 ,130, "Back", {fill: '#ccc', font: "bold 15px"});
  back_button_txt.anchor.setTo(0.5);

  var btn_text_style = {fill: '#fff', font: "20px"};
  
  var learn_trick_btn = game.add.button(game.world.centerX - 150,600, 'text_button', learnTrick);
  learn_trick_btn.anchor.setTo(0.5);
  var learn_trick_txt = game.add.text(game.world.centerX - 150,600, 'Learn the trick', btn_text_style);
  learn_trick_txt.anchor.setTo(0.5);

  var know_trick_btn = game.add.button(game.world.centerX + 150,600, 'text_button', doHomeworkForTux);
  know_trick_btn.anchor.setTo(0.5);
  var know_trick_txt = game.add.text(game.world.centerX + 150,600, 'Let me try the trick', btn_text_style);
  know_trick_txt.anchor.setTo(0.5);

  var penguin_notepad = game.add.sprite(120, 600, 'penguin_notepad');
  penguin_notepad.scale.setTo(0.35, 0.35);
}

function doHomeworkForTux() {
  game.state.start('play');
  moving_back = false;
}

function learnTrick() {
  game.state.start('learnTrick');
  moving_back = false;
  current_step = -1;

}

function moveToMenu() {
  game.state.start('menu');
  moving_back = true;
}
