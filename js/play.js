var timer_txt, timer, elapsed_seconds = 0;
var lollipops_count_txt, lollipops_count = 0;
var question_num, question_txt, answer_helper_left;
var answer_field;
var playState = {

  create: function () {
  
  game.add.image(0, 0, 'background_1200_900');
  var boards = game.add.group();
  boards.create(game.world.centerX - 400 ,100 , 'timer_board');
  boards.create(game.world.centerX + 400 ,100 , 'timer_board');
  boards.setAll('anchor.x', 0.5);
  boards.setAll('anchor.y', 0.5);

  timer_txt = game.add.text(game.world.centerX - 400 ,100, '0s', {fill: '#fff', font: "30px"});
  timer_txt.anchor.setTo(0.5);
  timer = game.time.create(false);
  timer.loop(1000, updateCounter, this);
  timer.start();
  
  lollipops_count_txt = game.add.text(game.world.centerX + 400 ,100, '0', {fill: '#fff', font: "30px"});
  lollipops_count_txt.anchor.setTo(0.5);

  var helper_texts = game.add.group();
  game.add.text(game.world.centerX - 400 ,180, "Time", {fill: 'orange', font: "bold 20px"}, helper_texts);
  game.add.text(game.world.centerX + 400 ,180, "Lollipops", {fill: 'orange', font: "bold 20px"}, helper_texts);

  game.add.image(240, 250, 'homework_template');
  var penguin_helper = game.add.sprite(120, 650, 'penguin_helper');
  penguin_helper.scale.setTo(0.35, 0.35);
  game.add.text(220, 800, "I am here to help you anytime!", {fill: '#fff', font: "bold 20px"}, helper_texts);

  question_txt = game.add.text(game.world.centerX ,320, '( ' + 0 + ' )', {fill: 'black', font: 'bold 30px'}, helper_texts);
  answer_helper_left = game.add.text(game.world.centerX - 235 ,480, '1 * Next number to 1', {fill: '#ccc', font: '25px'}, helper_texts);
  answer_helper_right = game.add.text(game.world.centerX + 235 ,480, '25', {fill: '#ccc', font: '25px'}, helper_texts);
  answer_field = game.add.inputField(game.world.centerX - 40,620, {
    font: '25px',
    fill: '#000',
    fillAlpha: 0,
    fontWeight: 'bold',
    width: 150,
    padding: 10,
    borderWidth: 0,
    placeHolder: 'Answer...',
    type: PhaserInput.InputType.number
  });

  enter_key = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  enter_key.onDown.add(verifyAnswer, this);

  helper_texts.setAll('anchor.x', 0.5);
  helper_texts.setAll('anchor.y', 0.5);

  startGame();
},

  update: function () {
    timer_txt.setText(elapsed_seconds + 's');
    
  }

};

function updateCounter() {
  elapsed_seconds++;
}

function startGame() {
  setQuestion();

}

function setQuestion() {
  question_num = Math.round(Math.random() * 9) * 10 + 5;
  var first_digit = Math.floor(question_num/10);

  question_txt.setText('( ' + question_num + ' )');
  answer_helper_left.setText(first_digit + ' * Next number to ' + first_digit + '  (' + (++first_digit) + ')');
  is_question_set = true; 

}

function verifyAnswer() {
  if (parseInt(answer_field.value) === question_num * question_num) {
    lollipops_count = lollipops_count + 10;
    lollipops_count_txt.setText(lollipops_count);
    startGame();
    answer_field.setText("");
    answer_field.startFocus(); 
    answer_field.update();
  }
  
}



