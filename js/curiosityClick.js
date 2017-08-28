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
      'We will just recollect our algebraic skills. \n (ax + b)² = a² . x² + 2 * a * b * x + b²',
      'Now, take 25 for example. In the above form.',
	    '25 is twice of 10 + 5. (10*2 + 5)',
	    'Likewise for any number ending with 5, \nit will be (a * 10 + 5)',
      'Back to algebra!, \n(10a + 5)² = a² * 10²+ 2 * 10 * a * 5 + 5²',
      '= a² . 10² + a * 10²+ 5²',
      '= a * (a + 1) * 10² + 25',
      'To add a 2 digits number with 100, replace 0s',
      'So, a * (a + 1) | 25 is the answer!',
      'For 25, 2 * (2 + 1) | 25.'
    ],
    1: [
      'So let’s look at the math behind finding\nthe square of a number just below 100?',
      'Say for example, we shall take 96.',
      'Is that OK to write 96 as (100 - 4)?',
      'To find 96², we will find (100 - 4)²',
      'Cool, Now recollect your algebraic skills!\n (a-b)² = a² - 2 * a * b + b²',
      'Now,In the decimal system, \n100 * 100 is 100 shifted to the left two places',
      'That is 100² + 4²  = 10016 \njust from the place values',
      'The trick here is to subtract 8 * 100. \nThat accounts a * (b * 2)',
      'However, by place value this is subtracting \n8 from 100.  (100 - 8) = 92',
      'So we get (96 - 4) or (100 - 8) | 4²',
      'Simply is (Number - difference) | difference²'
 
    ],
    2: [
      'Than a proof, we will see a quick intuitive \nway to multiply a number xy with 9.',
      'Say for example, we will take 68. \nHere x is 6 and y is 8. To find 68 * 9,',
      'We can find ( 68 * 10 ) - 68',
      'Since the 6 in 68 represents 60 it \ndoesn\'t change the 1s place of the product.',
      'It is determined by 9 * y. That is 9 * 8.',
      'As y increases by 1, the 1s place decreases \nby 1 and so we need to subtract.',
      'And hence, shortly we see it as,',
      '(68 - 7) | (10 - 8).'
      
    ],
    3: [
      'So let’s look at the math behind finding \nthe square of a number just above 100?',
      'Say for example, we shall take 104.',
      'Is that OK to write 104 as (100 + 4)?',
      'To find 104², we will find (100 + 4)²',
      'Cool, Now recollect your algebraic skills! \n(a+b)² = a² + 2 * a * b + b²',
      'Now, In the decimal system, \n100 * 100 is 100 shifted to the left two places',
      'That is 100² + 4²  = 10016 \njust from the place values',
      'The trick here is to add 8 * 100. \nThat accounts a * (b * 2)',
      'However, by place value this is just \nadding 8 to 100.  (100 + 8) = 108',
      'So we get (104 + 4) or (100 + 8) | 4²',
      'Simply is (Number + surplus) | surplus²'
    ],
    4: [
      'Does it look intimidating?! It’s so simple.' ,
      'Recollect your algebraic skills! \n(a+b)² = a² + 2 * a * b + b²',
      'Now take an example, (504)².',
      'That is, (5 * 100 + 4 * 1)² \n= 5 * 5 * 100 * 100 + 40 * 100 + 16',
      'And to our rescue, we just use \nthe position value of the numbers',
      'Simply, num * 100 is moving to the left, \ntwo digits.',
      'Likewise, num * 100 * 100 is moving \nto the left, four digits.',
      'And so we get 254016.'
    
    ],
    5: [
      'This is a good example of Halving and doubling, \nan ancient means of multiplication.', 
      'For example, 64 * 5 = 32 * 10. \nWhere 32 is half of 64.',
      'But as odd numbers have their \ndecimals while halved, be careful.',
      'We just need to include them.',
      'In terms of the trick, \n63 * 5 = (31 * 10) + 5 = 315',
    ],
    6: [
      'Say for example, you take 43 * 11',
      'We write 11 as 10 + 1 and mutliply 43 with it.',
      '43 * (10 + 1) = 43 * 10 + 43',
      'Where, 430 is (4 * 100 + 3 * 10)\nAnd 43 is (4 * 10 + 3)',
      '= 4 * 100 + 3 * 10 + 4 * 10 + 3',
      'Surprise!,  4+3 goes in the 10s place\nwhile we group the 10s',
      'And simply add numbers by place value.',
      'It is x | x+y | y which is 4 | (7) | 1.'
    ],
    7: [
      'We shall take an example, 43 * 47.',
      'We can write it as (40 + 3) * 47 and on expanding,',
      '43 * 47 = 40 * 47 + 3 * 47',
      '= 40 * (40+7) + 3 * (40+7)',
      '= 40² + 40 * 7 + 40 * 3 + 3 * 7',
      '= 16 * 100 + 40 * (7+3) + 21',
      '= 16 * 100 + 4 * 100 + 40 * 10 +21',
      '= 20 * 100 + 2 * 10 + 1',
      'So the requirement that the numbers in \nthe 10s place be the same is to create a square.',
      'And the 7 + 3 = 10 to move the result \nleft one place.'
    
    ],

    /*
    - Add a new key-value pair for the new trick.
    - Key: Corresponding array index in the homework_questions and tricksList array
    - Value: An array with detailed steps as string entries
    [
      'Please take care of the number of characters in a single line.',
      'If its too much, add a "\n" to it wherever necessary'
    ]
    */
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

  if(explanation_steps[current_step_index + 1] != undefined) {
    explanation_text_full.setText(explanation_text_full.text +'\n >  '+ explanation_steps[current_step_index]);
  }
  else {
    navigate_button_text.setText('Done!');
    navigate_button.alpha = 0.5;
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

