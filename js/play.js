var timer_txt, timer, elapsed_seconds = 0;
var lollipops_count_txt, lollipops_count = 0;
var question_num, question_txt, answer_helper_left, answer_helper_right;
var answer_field;
var playState = {

  create: function () {
  
  game.add.image(0, 0, 'background_1200_900');
  var helper_texts = game.add.group();

  var back_button = game.add.button(game.world.centerX - 550 ,100, 'back_button', goBackFunction);
  back_button.anchor.setTo(0.5)
  back_button.scale.setTo(0.40, 0.40);
  game.add.text(game.world.centerX - 550 ,130, "Back", {fill: '#ccc', font: "bold 15px"}, helper_texts);

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

  game.add.text(game.world.centerX - 400 ,180, "Time", {fill: 'orange', font: "bold 20px"}, helper_texts);
  game.add.text(game.world.centerX + 400 ,180, "Lollipops", {fill: 'orange', font: "bold 20px"}, helper_texts);

  game.add.image(240, 250, 'homework_template');
  var penguin_helper = game.add.sprite(120, 650, 'penguin_helper');
  penguin_helper.scale.setTo(0.35, 0.35);
  game.add.text(220, 800, "I am here to help you anytime!", {fill: '#fff', font: "bold 20px"}, helper_texts);

  question_txt = game.add.text(game.world.centerX ,320, '( ' + 0 + ' )', {fill: 'black', font: 'bold 30px'}, helper_texts);
  answer_helper_left = game.add.text(game.world.centerX - 250 ,480, '1 * Next number to 1', {fill: '#ccc', font: '20px'}, helper_texts);
  answer_helper_right = game.add.text(game.world.centerX + 250 ,480, '25', {fill: '#ccc', font: '20px'}, helper_texts);
  answer_helper_middle = game.add.text(game.world.centerX ,480, '', {fill: '#ccc', font: '20px'}, helper_texts);
  answer_field = game.add.inputField(game.world.centerX - 70,620, {
    font: '25px',
    fill: '#000',
    fillAlpha: 0,
    fontWeight: 'bold',
    width: 150,
    padding: 10,
    borderWidth: 0,
    placeHolder: '',
    type: PhaserInput.InputType.number
  });
  answer_field.anchor.setTo(0.5);

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
  switch(chosen_question_number) {
    case 0:
    //Sqaure of a number ending with 5
    question_num = Math.round(Math.random() * 9) * 10 + 5;
    var first_digit = Math.floor(question_num/10);

    question_txt.setText('( ' + question_num + ' )^2');
    answer_helper_left.setText(first_digit + ' * Next number to ' + first_digit + '  (' + (++first_digit) + ')');    
    answer_helper_right.setText('5 * 5');
    break;

    case 1:
    //Square of numbers just below 100
    question_num = getRandomInt(91, 96);

    question_txt.setText('( ' + question_num + ' )^2');
    answer_helper_middle.setText('Difference of '+ question_num +' with 100 ('+ (100 - question_num) + ')');
    answer_helper_left.setText(question_num +' - '+ (100 - question_num));
    answer_helper_right.setText('Sqaure of '+ (100 - question_num));
    break;

    case 2:
    // multiply a number with 9
    question_num = getRandomInt(10, 99);
    var first_digit = Math.floor(question_num/10);
    var second_digit = Math.floor(question_num%10);

    question_txt.setText('( ' + question_num + ' ) * 9');
    answer_helper_middle.setText('The Number next to '+ first_digit + '. (' + (first_digit + 1) +')');
    answer_helper_left.setText(question_num +' - '+ (first_digit + 1));
    answer_helper_right.setText('10 - '+ second_digit);
    break;
    case 3:
    // sqaure of number just above 100
    question_num = getRandomInt(104, 109);

    question_txt.setText('( ' + question_num + ' )^2');
    answer_helper_middle.setText('Difference of 100 with '+ question_num + ' ('+ (question_num - 100) + ')');
    answer_helper_left.setText(question_num +' + '+ (question_num - 100));
    answer_helper_right.setText('Sqaure of '+ (question_num - 100));
    break;

    case 4:
    // square of any three digit number with a zero in between
    question_num = getRandomInt(101, 109) + Math.round((Math.random() * 5)) * 100;
    var first_digit = Math.floor(question_num/100);
    var last_digit = Math.floor(question_num%10);

    question_txt.setText('( ' + question_num + ' )^2'); 
    answer_helper_middle.setText('(' + first_digit +') * ('+ last_digit + ') * 2');
    answer_helper_left.setText('Square of '+ first_digit);
    answer_helper_right.setText('Sqaure of '+ last_digit);
    break;

    case 5:
    // multiply any number with 5
    question_num = getRandomInt(10, 49) * 2;

    question_txt.setText('( ' + question_num + ' ) * 5'); 
    answer_helper_middle.setText('('+ (question_num/2) +' * 10)');
    answer_helper_left.setText('Find half of '+ question_num);
    answer_helper_right.setText('Half ('+ (question_num/2)+ ') * 10');
    break;

    case 6:
    // multiply a two digit number with 11  
    while(true) {
      question_num = getRandomInt(10, 99);
      if((Math.floor(question_num/10) + Math.floor(question_num%10) ) < 10)
      break;
    }
    var first_digit = Math.floor(question_num/10);
    var second_digit = Math.floor(question_num%10);

    question_txt.setText('( ' + question_num + ' ) * 11'); 
    answer_helper_middle.setText(first_digit +' + '+ second_digit);
    answer_helper_left.setText('First digit ('+ first_digit +')');
    answer_helper_right.setText('Last digit ('+ second_digit +')');
    break;

    case 7:
    // multiply two digits when the sum of the one's digit is 10
    question_num = getRandomInt(20, 99);
    var first_digit = Math.floor(question_num/10);
    var question_num_one = question_num;
    var question_num_two = question_num + ((10 - Math.floor(question_num%10)) - Math.floor(question_num%10));

    question_txt.setText('( ' + question_num_one + ' * '+ question_num_two +' )'); 
    answer_helper_middle.setText('');
    answer_helper_left.setText(first_digit +' * Next number to '+ first_digit +' (' + first_digit +' * '+ (first_digit + 1) +')');
    answer_helper_right.setText( (Math.floor(question_num_one%10)) +' * '+ (Math.floor(question_num_two%10)));

    question_num = [question_num_one, question_num_two];
    break;

    case 8:

    case 9:

    default:
  }
  is_question_set = true; 

}

function verifyAnswer() {
  var answered_right = false;
  switch(chosen_question_number) {
    case 0:
    if (parseInt(answer_field.value) === question_num * question_num) {
      answered_right = true;
    }
    break;

    case 1:
    if (parseInt(answer_field.value) === question_num * question_num) {
      answered_right = true;
    }
    break;

    case 2:
    if (parseInt(answer_field.value) === question_num * 9) {
      answered_right = true;
    }
    break;

    case 3:
    if (parseInt(answer_field.value) === question_num * question_num) {
      answered_right = true;
    }
    break;

    case 4:
    if (parseInt(answer_field.value) === question_num * question_num) {
      answered_right = true;
    }
    break;

    case 5:
    if (parseInt(answer_field.value) === question_num * 5) {
      answered_right = true;
    }
    break;

    case 6:
    if (parseInt(answer_field.value) === question_num * 11) {
      answered_right = true;
    }
    break;

    case 7:
    if (parseInt(answer_field.value) === question_num[0] * question_num[1]) {
      answered_right = true;
    }
    break;

    default:
    break;
  }
  if (answered_right) {
    lollipops_count = lollipops_count + 10;
    lollipops_count_txt.setText(lollipops_count);
    startGame();
    answer_field.setText("Correct!, Next.");
    answer_field.startFocus(); 
    answer_field.update();

  }
  else {
    answer_field.setText("Try again!");
    answer_field.startFocus(); 
    answer_field.update();
  }
  
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function goBackFunction() {
  game.state.start('questionDisplay');
  moving_back = true;
}



