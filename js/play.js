var timer_txt, timer, elapsed_seconds = 0;
var lollipops_count_txt, lollipops_count = 0;
var question_num, question_txt, answer_helper_left, answer_helper_right;

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

  game.add.image(240, 130, 'homework_template');
  var penguin_helper = game.add.sprite(120, 650, 'penguin_helper');
  penguin_helper.scale.setTo(0.35, 0.35);
  game.add.text(220, 800, "I am here to help you anytime!", {fill: '#fff', font: "bold 20px"}, helper_texts);

  question_txt = game.add.text(game.world.centerX ,200, '( ' + 0 + ' )', {fill: 'black', font: 'bold 30px'}, helper_texts);
  answer_helper_left = game.add.text(game.world.centerX - 250 ,360, '1 * Next number to 1', {fill: '#ccc', font: '20px'}, helper_texts);
  answer_helper_right = game.add.text(game.world.centerX + 250 ,360, '25', {fill: '#ccc', font: '20px'}, helper_texts);
  answer_helper_middle = game.add.text(game.world.centerX ,360, '', {fill: '#ccc', font: '20px'}, helper_texts);
  setInputField(true);

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
  var canvas_element = document.getElementById('canvas');
  canvas_element.style.visibility = "visible";
  canvas_element.addEventListener("click", getFocusOnAnswerField);
  elapsed_seconds = 0;
  lollipops_count = 0;
  setQuestion();

}

function setInputField(placeholder_text_condition) {
  answer_field = new CanvasInput({
    canvas: document.getElementById('canvas'),
    fontSize: 18,
    fontFamily: 'Arial',
    fontColor: '#212121',
    fontWeight: 'bold',
    width: 200,
    height: 30,
    padding: 8,
    borderWidth: 0,
    borderColor: '#000',
    borderRadius: 3,
    //boxShadow: '1px 1px 0px #fff',
    //innerShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
    placeHolder: (placeholder_text_condition) ? '         Your answer': '         Try again!',
    textAlign: 'right',
    onsubmit: function() {
      verifyAnswer();
    },
  });
}

function setQuestion() {
  switch(chosen_question_number) {
    case 0:
    //Sqaure of a number ending with 5
    question_num = Math.round(Math.random() * 9) * 10 + 5;
    var first_digit = Math.floor(question_num/10);

    question_txt.setText('( ' + question_num + ' )²');
    answer_helper_left.setText(first_digit + ' * Next number to ' + first_digit + '  (' + (++first_digit) + ')');    
    answer_helper_right.setText('5 * 5');
    answer_helper_middle.setText('');
    break;

    case 1:
    //Square of numbers just below 100
    question_num = getRandomInt(91, 96);

    question_txt.setText('( ' + question_num + ' )²');
    answer_helper_middle.setText('');
    answer_helper_left.setText(question_num +' - '+ (100 - question_num));
    answer_helper_right.setText('Sqaure of '+ (100 - question_num));
    break;

    case 2:
    // multiply a number with 9
    question_num = getRandomInt(10, 99);
    var first_digit = Math.floor(question_num/10);
    var second_digit = Math.floor(question_num%10);

    question_txt.setText('( ' + question_num + ' ) * 9');
    answer_helper_middle.setText('');
    answer_helper_left.setText(question_num +' - '+ (first_digit + 1));
    answer_helper_right.setText('10 - '+ second_digit);
    break;
    case 3:
    // sqaure of number just above 100
    question_num = getRandomInt(104, 109);

    question_txt.setText('( ' + question_num + ' )²');
    answer_helper_middle.setText('');
    answer_helper_left.setText(question_num +' + '+ (question_num - 100));
    answer_helper_right.setText('Sqaure of '+ (question_num - 100));
    break;

    case 4:
    // square of any three digit number with a zero in between
    question_num = getRandomInt(101, 109) + Math.round((Math.random() * 5)) * 100;
    var first_digit = Math.floor(question_num/100);
    var last_digit = Math.floor(question_num%10);

    question_txt.setText('( ' + question_num + ' )²'); 
    answer_helper_middle.setText('(' + first_digit +') * ('+ last_digit + ') * 2');
    answer_helper_left.setText('Square of '+ first_digit);
    answer_helper_right.setText('Sqaure of '+ last_digit);
    break;

    case 5:
    // multiply any number with 5
    question_num = getRandomInt(10, 49) * 2;

    question_txt.setText('( ' + question_num + ' ) * 5'); 
    answer_helper_middle.setText('Half of '+ question_num + ' * 10');
    answer_helper_left.setText('');
    answer_helper_right.setText('');
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
  var user_answer = (parseInt(answer_field.value()) != NaN) ? parseInt(answer_field.value()) : 0
  switch(chosen_question_number) {
    case 0:
    if (user_answer === question_num * question_num) {
      answered_right = true;
    }
    break;

    case 1:
    if (user_answer === question_num * question_num) {
      answered_right = true;
    }
    break;

    case 2:
    if (user_answer === question_num * 9) {
      answered_right = true;
    }
    break;

    case 3:
    if (user_answer === question_num * question_num) {
      answered_right = true;
    }
    break;

    case 4:
    if (user_answer === question_num * question_num) {
      answered_right = true;
    }
    break;

    case 5:
    if (user_answer === question_num * 5) {
      answered_right = true;
    }
    break;

    case 6:
    if (user_answer === question_num * 11) {
      answered_right = true;
    }
    break;

    case 7:
    if (user_answer === question_num[0] * question_num[1]) {
      answered_right = true;
    }
    break;

    default:
    break;
  }
  
  if (answered_right) {
    lollipops_count = lollipops_count + 10;
    lollipops_count_txt.setText(lollipops_count);
    if(lollipops_count >= 100) {
      game.state.start('end');
    }
    setQuestion();
  }
  answer_field.destroy();
  setInputField(answered_right);
  answer_field.focus();  
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function goBackFunction() {
  game.state.start('questionDisplay');
  moving_back = true;
  answer_field.destroy();
  document.getElementById('canvas').style.visibility = "hidden";
}

function getFocusOnAnswerField() {
  if(typeof(answer_field) != 'undefined'){
    answer_field.focus();
  }
}

