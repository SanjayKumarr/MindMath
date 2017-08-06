var current_step_index = 0;

var explanation_steps = [];
var explanation_text, explanation_text_full;
var line = '';
var navigate_button;

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

      warning_user_text = game.add.text(game.world.centerX, game.world.centerY, 'Please hold on dear! You crashed me!\n   Press back and help me recover.', {fill: "#fff", font: "20px"});
      warning_user_text.anchor.setTo(0.5);
      warning_user_text.alpha = 0;

      navigate_button = game.add.button(game.world.centerX ,game.world.centerY + 250, 'text_button', showNext);
      navigate_button.anchor.setTo(0.5);
      navigate_button_text = game.add.text(game.world.centerX ,game.world.centerY + 250, 'Next Step', {fill: '#fff', font: "20px"});
      navigate_button_text.anchor.setTo(0.5);
      getExplanationSteps();
      navigate_button.visible = false;

      explanation_text = game.add.text(game.world.centerX ,game.world.centerY + 80, 'SomeThing', { font: "15pt Courier", fill: "#fff", stroke: "#119f4e", strokeThickness: 2 });
      explanation_text.anchor.setTo(0.5);

      explanation_text_full = game.add.text(game.world.centerX - 300 ,game.world.centerY - 130, '', { font: "10pt Courier", fill: "#fff", stroke: "#119f4e", strokeThickness: 2 });
      explanation_text_full.anchor.y = 0.5
      showNextLine();
    }
};

function getExplanationSteps() {
  var all_explanation_steps = {
    0: [
      'So let\'s look at the math behind finding \nthe square of a number ending with 5',
      'We will just recollect our algebraic skills. \n (ax + b)² = a² . x² + 2abx + b²',
      'Now, take 25 for example. In the above form.',
	    '25 is twice of 10 + 5. (10*2 + 5)',
	    'Likewise for any number ending with 5, \nit will be (a * 10 + 5)',
      'Back to algebra!, (10a + 5)² = a² . 10²+ 2. 10a . 5 + 5²',
      '= a² . 10² + a.10²+ 5²',
      '= a (a + 1) . 10² + 25',
      'To add a 2 digits number with 100, replace 0s',
      'So, a (a + 1) | 25 is the answer!',
      'For 25, 2 (2 + 1) | 25.'
    ],
    1: [
      "So let's look at the math behind finding the \nsquare of a number just below 100.",
      'Say for example, we shall take 96.',
      'Is that OK to write 96 as (100 - 4)?',
      'To find 96², we will find (100 - 4)²',
      'Cool, Now recollect your algebraic skills!\n(a-b)² = a² - 2ab + b²',
      'You can rewrite it as a(a-b-b) + b²',
      'Which is 100(100-4 - 4) + 4²',
      'To add a 2 digits number with 100, replace 0s',
      'So you get (96 - 4) | 4²',
      'Which is (Number - difference) | difference²'
    ],
    2: [
      'Than a proof, we will see a quick and \nintuitive way to multiply a number with 9.',
      'Say for example, we will take 68. To find 68 * 9,',
      'Ten times 68 subtracted with 68 \nWe can find ( 68 * 10 ) - 68',
      '(680 - 68). Quickly borrowing and subtracting or \nlike below,',
      'Next number to 6 is 7',
      'So, (68 - 7) | (10 - 8) is the answer'
    ],
    3: [
      "So let\'s look at the math behind \nfinding the square of a number just above 100",
      'Say for example, we shall take 104.',
      'Is that OK to write 104 as (100 + 4)?',
      'To find 104², we will find (100 + 4)²',
      'Cool, Now recollect your algebraic skills! \n(a+b)² = a² + 2ab + b²',
      'You can rewrite it as a(a+b+b) + b²',
      'Which is 100(100+4 + 4) + 4²',
      'To add a 2 digits number with 100, replace 0s',
      'So we get (104 + 4) | 4²',
      'Which is (Number + surplus) | surplus²'

    ],
    4: [
      'Sorry, We are drafting a good explanation\nfor two tricks of this kind.'
    ],
    5: [
      'Again, more than a proof, an intuitive way to think.',
      'To multiply any number with 5,',
      'Can we multiply the number with 10 \nand find the half of it?',
      'Or, Find the half of it and add zero to it.',
      'Both means the same thing!'
    ],
    6: [
      'So, here  we\'ll multiply any 2 digits number \n with 11 as we do it usually.',
      'Very simple, the number multiplied with 1 is \n the number itself.',
      'So, by means of multiplication xy * 11,',
      '= x(x+y)y. So simple, right!'

    ],
    7: [
      'Sorry, We are drafting a good explanation\nfor two tricks of this kind.'
    ]
  }

  explanation_steps = all_explanation_steps[chosen_question_number];
}

function moveToLearnTrick() {
  console.log('I am here!')
  game.state.start('learnTrick');
  moving_back = true;
  current_step = -1;
}

function showNext() {
  if (current_step_index < explanation_steps.length ) {
    navigate_button.visible = false;
    game.time.events.add(Phaser.Timer.SECOND, showNextLine, this);
  }

  if(explanation_steps[current_step_index] != undefined) {
    explanation_text_full.setText(explanation_text_full.text +'\n >  '+ explanation_steps[current_step_index]);
  }
  else {
    navigate_button_text.setText('Finish');
  }

}

function updateNextLine() {
  
  try {
   if (line.length < explanation_steps[current_step_index].length)
    {
        line = explanation_steps[current_step_index].substr(0, line.length + 1);
        // text.text = line;
        explanation_text.setText(line);
    }
    else
    {
        //  Wait 2 seconds then start a new line
    }
  }
  catch (e) {
    warning_user_text.alpha = 1
    console.log(e);
  }
}

function showNextLine() {

    current_step_index++;

    if (current_step_index < explanation_steps.length)
    {
        line = '';
        type_text_event = game.time.events.repeat(80, explanation_steps[current_step_index].length + 1, updateNextLine, this);
        game.time.events.onComplete.add(showNavigationButton, this);
    }
   
}

function showNavigationButton(){
  navigate_button.visible = true;
}

