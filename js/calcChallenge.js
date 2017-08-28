var tween_players;
var challenge_set = false;
var challenge_question;
var chosen_challenge = 0;
var challenge_attempt_count = 0;
var seconds_left = 20;
lollipops_count = 0;
var calcChallengeState = {

    create: function () {
      game.add.image(0, 0, 'background_1200_900');
      var btn_text_style = {fill: '#fff', font: "20px"};

      var back_button = game.add.button(game.world.centerX - 550 ,100, 'back_button',  this.moveBack);
      back_button.anchor.setTo(0.5)
      back_button.scale.setTo(0.40, 0.40);
      var back_button_txt = game.add.text(game.world.centerX - 550 ,130, "Back", {fill: '#ccc', font: "bold 15px"});
      back_button_txt.anchor.setTo(0.5);

      var contestants = game.add.group();

      var penguin_with_computer = contestants.create(game.world.centerX + 350 ,game.world.centerY - 280, 'penguin_computer');

      var boy_at_desk = contestants.create(game.world.centerX - 350 ,game.world.centerY - 300, 'boy_desk');
      contestants.setAll('scale.x', 0.40);
      contestants.setAll('scale.y', 0.40);
      contestants.setAll('anchor.x', 0.5);
      contestants.setAll('anchor.y', 0.5);
      contestants.alpha = 0;
      tween_players = game.add.tween(contestants).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
      //tween_players.start();
      //game.add.tween(contestants).to( { y: game.world.centerY - 250 }, 2400, Phaser.Easing.Bounce.In, true)
      //contestants.scale.setTo(0.40, 0.40);

      var monitor = game.add.image(game.world.centerX, game.world.centerY - 200, 'monitor');
      monitor.anchor.setTo(0.5);
      monitor.alpha = 0.5;

      challenge_timer_txt = game.add.text(game.world.centerX, game.world.centerY - 230, '0s', {fill: 'grey', font: 'bold 40px'});
      challenge_timer_txt.anchor.setTo(0.5);
      challenge_timer = game.time.create(false);
      challenge_timer.loop(1000, updateChallengeCounter, this);
      //challenge_timer.start();

      challenge_succeed_count = game.add.text(game.world.centerX, game.world.centerY - 180, 'You answered: 0', {fill: 'grey', font: '13px'});
      challenge_succeed_count.anchor.setTo(0.5);

      var start_challenge = game.add.button(game.world.centerX, game.world.centerY + 200, 'text_button', this.startChallenge);
      start_challenge.anchor.setTo(0.5);
      start_challenge_txt = game.add.text(game.world.centerX, game.world.centerY + 200, 'Go!', btn_text_style);
      start_challenge_txt.anchor.setTo(0.5);

      challenge_question_txt = game.add.text(game.world.centerX ,game.world.centerY, 'On your mark! \n      Get set!', {fill: 'black', font: 'bold 30px'});
      challenge_question_txt.anchor.setTo(0.5);

    },

    moveBack: function() {
      game.state.start('menu');
      challenge_input.destroy();
      document.getElementById('canvas').style.visibility = "hidden";

    },

    startChallenge: function() {
      var canvas_element = document.getElementById('canvas');
      canvas_element.style.visibility = "visible";
      canvas_element.addEventListener("click", getFocusOnCanvasElement)
      challenge_set = false;
      chosen_challenge = 0;
      challenge_attempt_count = 0;
      seconds_left = 20;
      lollipops_count = 0;
      tween_players.stop();
      start_challenge_txt.destroy();
      setInputFieldForChallenge();

      getChallengeQuestion();
      challenge_input.focus();

      this.destroy();
    },

    update: function() {
      challenge_timer_txt.setText(seconds_left + 's');
    }

};

function verifyChallengeAnswer() {
  var answered_right = false;
  if (challenge_set) {

    var answerFromUser = parseInt(challenge_input.value());
    if (answerFromUser != NaN) {

      switch(chosen_challenge) {
        case 0:
        if (answerFromUser === challenge_question * challenge_question) {
          answered_right = true;
        }
        break;
    
        case 1:
        if (answerFromUser === challenge_question * challenge_question) {
          answered_right = true;
        }
        break;
    
        case 2:
        if (answerFromUser === challenge_question * 9) {
          answered_right = true;
        }
        break;
    
        case 3:
        if (answerFromUser === challenge_question * challenge_question) {
          answered_right = true;
        }
        break;
    
        case 4:
        if (answerFromUser === challenge_question * challenge_question) {
          answered_right = true;
        }
        break;
    
        case 5:
        if (answerFromUser === challenge_question * 5) {
          answered_right = true;
        }
        break;
    
        case 6:
        if (answerFromUser === challenge_question * 11) {
          answered_right = true;
        }
        break;
    
        case 7:
        if (answerFromUser === challenge_question[0] * challenge_question[1]) {
          answered_right = true;
        }
        break;
    
        default:
        break;
      }

    }

    challenge_set = false;

    if (answered_right) {
      lollipops_count = lollipops_count + 10;
      challenge_succeed_count.setText('You answered: ' + (lollipops_count/10) + '/' + (challenge_attempt_count+1));
      if(lollipops_count === 100 || challenge_attempt_count >= 10) {
        game.state.start('end');
      }
    }
    else {
      
    }
    prepareNextChallenge();
  }
}

function setInputFieldForChallenge() {
    challenge_input = new CanvasInput({
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
      placeHolder: '         Your answer',
      textAlign: 'right',
      onsubmit: function() {
        verifyChallengeAnswer();
      },
    });
}

function getChallengeQuestion() {
  chosen_challenge = Math.round(Math.random() * 7);
  switch(chosen_challenge) {
    case 0:
    //Sqaure of a number ending with 5
    challenge_question = Math.round(Math.random() * 9) * 10 + 5;
    var first_digit = Math.floor(challenge_question/10);

    challenge_question_txt.setText('( ' + challenge_question + ' )²');
    break;

    case 1:
    //Square of numbers just below 100
    challenge_question = getRandomInt(91, 96);

    challenge_question_txt.setText('( ' + challenge_question + ' )²');
    break;

    case 2:
    // multiply a number with 9
    challenge_question = getRandomInt(10, 99);
    var first_digit = Math.floor(challenge_question/10);
    var second_digit = Math.floor(challenge_question%10);

    challenge_question_txt.setText('( ' + challenge_question + ' ) * 9');
    break;

    case 3:
    // sqaure of number just above 100
    challenge_question = getRandomInt(104, 109);

    challenge_question_txt.setText('( ' + challenge_question + ' )²');
    break;

    case 4:
    // square of any three digit number with a zero in between
    challenge_question = getRandomInt(101, 109) + Math.round((Math.random() * 5)) * 100;
    var first_digit = Math.floor(challenge_question/100);
    var last_digit = Math.floor(challenge_question%10);

    challenge_question_txt.setText('( ' + challenge_question + ' )²'); 
    break;

    case 5:
    // multiply any number with 5
    challenge_question = getRandomInt(10, 49) * 2;

    challenge_question_txt.setText('( ' + challenge_question + ' ) * 5'); 
    break;

    case 6:
    // multiply a two digit number with 11  
    while(true) {
      challenge_question = getRandomInt(10, 99);
      if((Math.floor(challenge_question/10) + Math.floor(challenge_question%10) ) < 10)
      break;
    }
    var first_digit = Math.floor(challenge_question/10);
    var second_digit = Math.floor(challenge_question%10);

    challenge_question_txt.setText('( ' + challenge_question + ' ) * 11'); 
    break;

    case 7:
    // multiply two digits when the sum of the one's digit is 10
    challenge_question = getRandomInt(20, 99);
    var first_digit = Math.floor(challenge_question/10);
    var question_num_one = challenge_question;
    var question_num_two = challenge_question + ((10 - Math.floor(challenge_question%10)) - Math.floor(challenge_question%10));

    challenge_question_txt.setText('( ' + question_num_one + ' * '+ question_num_two +' )'); 

    challenge_question = [question_num_one, question_num_two];
    break;

    case 8:
    break;

    case 9:
    break;

    default:
    break;
  }

  challenge_timer.start();
  challenge_set = true;
}

function prepareNextChallenge() {
  if(challenge_attempt_count >= 10) {
    game.state.start('end');
  }
  else {
    challenge_attempt_count += 1;
    challenge_input.destroy();
    setInputFieldForChallenge();
    challenge_timer.stop();
    seconds_left = Math.round(Math.random() * 5) + 10;
    challenge_timer.loop(1000, updateChallengeCounter, this);
    challenge_timer.start();
  
    getChallengeQuestion();
    challenge_input.focus();
  }
}

function updateChallengeCounter() {
  if(seconds_left > 0) {
    seconds_left--;
  }
  else {

    challenge_timer.stop();
    prepareNextChallenge();
  }  
}

function getFocusOnCanvasElement() {
  if(typeof(challenge_input) != 'undefined'){
    challenge_input.focus();
  }
}


