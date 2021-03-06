var current_step = -1;

var tutorial_steps = [];
var example_steps = [];

var text;
var example_text;
var example_text_full;

var tutorial_line = '';
var example_line = '';

var learnTrickState = {

  create: function () {
    game.add.image(0, 0, 'background_1200_900');

    var back_button = game.add.button(game.world.centerX - 550 ,100, 'back_button', moveToQuestionDisplay);
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

    game.add.text(game.world.centerX, game.world.centerY + 110, 'To learn a step again, We recommend to start over as it helps you learn it meaningfully!', {fill: "#fff", font: "13px"}).anchor.setTo(0.5);
    

    getSteps();

    text = game.add.text(game.world.centerX ,game.world.centerY - 250, '', { font: "10pt Courier", fill: "#fff", stroke: "#119f4e", strokeThickness: 2 });
    text.anchor.setTo(0.5);

    example_text = game.add.text(game.world.centerX ,game.world.centerY + 50, '', { font: "20pt Courier", fill: "#fff", stroke: "#119f4e", strokeThickness: 2 });
    example_text.anchor.setTo(0.5);

    example_text_full = game.add.text(game.world.centerX - 250 ,game.world.centerY - 130, '', { font: "10pt Courier", fill: "#fff", stroke: "#119f4e", strokeThickness: 2 });
    example_text_full.anchor.y = 0.5

    nextLine();

    navigate_button_nxt = game.add.button(game.world.centerX ,game.world.centerY + 230, 'text_button', showNextStep);
    navigate_button_nxt.anchor.setTo(0.5);
    navigate_button_nxt.scale.setTo(0.70, 0.70);
    navigate_button_nxt_txt = game.add.text(game.world.centerX,game.world.centerY + 230, 'Next step', {fill: '#fff', font: "17px"});
    navigate_button_nxt_txt.anchor.setTo(0.5);
    navigate_button_nxt.visible = false;

    navigate_button_prv = game.add.button(game.world.centerX ,game.world.centerY + 300, 'text_button', startOverLearning);
    navigate_button_prv.anchor.setTo(0.5);
    navigate_button_prv.scale.setTo(0.70, 0.70);
    navigate_button_prv_txt = game.add.text(game.world.centerX,game.world.centerY + 300, '↺ Start over', {fill: '#fff', font: "17px"});
    navigate_button_prv_txt.anchor.setTo(0.5);
    navigate_button_prv.visible = false;

    var curious_kid_button = game.add.button(game.world.centerX ,game.world.centerY + 370, 'text_button', moveToCuriousClickState);
    curious_kid_button.anchor.setTo(0.5);
    curious_kid_button.scale.setTo(0.70, 0.70);
    var curious_kid_button = game.add.text(game.world.centerX ,game.world.centerY + 370, 'Curiousity clicks!', {fill: '#fff', font: "15px"});
    curious_kid_button.anchor.setTo(0.5);
    // var reg = {};
    // reg.track = game.add.audio('track');

    // var typewriter = new Typewriter();
    // typewriter.init(game, {
    //   x: 200,
    //   y: 40,

    //   maxWidth: 300,
    //   sound: reg.track,
    //   text: "qw",
    // });
    // typewriter.start();

  },

  update: function () {

  }
};

function moveToQuestionDisplay() {
  game.state.start('questionDisplay');
  moving_back = true;
}

function getSteps() {
  var all_tutorial_steps = {
    0: [
      'Let us find (x5)²',
      'Step 1: Think of the number next to x.',
      'Step 2: x * number next to x',
      'Step 3: Put 25 at the end of the answer.',
      'Answer = Step 2 | 25'
    ],

    1: [
      'Let us find (x)². X is just below 100.',
      'Step 1: Find the difference between 100 and this number.',
      'Step 2: Now, Subtract the difference from the number (x).',
      'Step 3: Find x²',
      'Answer = Step 2 | Step 3'
    ],

    2: [
      'Consider multiplying a two digit number with 9.',
      'Step 1: Think of next number to ten\'s digit.',
      'Step 2: Subtract it from the number',
      'Step 3: Find 10 - [one\'s digit]',
      'Answer = Step 2 | Step 3'
    ],

    3: [
      'Let us find (Y)². Y is just above 100.',
      'Step 1: Find the difference between the number and 100.',
      'Step 2: Now, Add the difference to the number (y).',
      'Step 3: Find y². Add ',
      'Answer = Step 2 | Step 3'
    ],

    4: [
      'Let us find (x0y)².           \nDigits are referred from left to right.',
      'Step 1: Square third digit (y)²',
      'Step 2: Multiply x with y and double the answer\n( x * y * 2 ).\nAdd zero in front, if it is in single digit.',
      'Step 3: Square first digit (x)²',
      'Answer = Step 3 | Step 2 | Step 1 \n = (x)² | ( x * y * 2 ) | (y)²'
    ],

    5: [
      'For now we will consider only the even numbers.',
      'Step 1: Find the half of the number (Number / 2)',
      'Step 2: Multiply by 10. (Add a zero in the end)',
      'Answer!'
    ],

    6: [
      'To multiply any two-digit number by 11',
      'Step 1: Add the digits',
      'Step 2: Place the sum in between the digits.',
      'Answer!'
    ],

    7: [
      'For any two numbers with the sum of their one’s digit = 10 and \n have the same number in the ten’s digit.',
      'Step 1: Think of the number (x) next to the number\nin ten’s digit (y)',
      'Step 2: Find x * y',
      'Step 3: Multiply both numbers’ one digit',
      'Answer = Step 2 | Step 3'
    ]
  }

  var all_example_steps = {
    0: [
      'Question: (45)²',
      'Next number to 4 is 5',
      '4 * 5 = 20',
      'Put 25 at the end of the answer',
      'Answer = 2025'
    ],

    1: [
      'Question: (96)²',
      'Difference is 4 (100 - 96 = 4)',
      '96 - 4 = 92',
      '(4)² = 16',
      'Answer = 9216'
    ],

    2: [
      'Question: 68 x 9',
      'Next number to 6 is 7',
      '68 - 7 = 61',
      '10 - 8 = 2',
      'Answer = 612'
    ],

    3: [
      'Question: (104)²',
      'Difference is 4 (104 - 100 = 4)',
      '104 + 4 = 108',
      '(4)² = 16',
      'Answer = 10816'
    ],

    4: [
      'Question: (504)²',
      '(4)² = 16',
      '5 * 4 * 2 = 40',
      '(5)² = 25',
      'Answer = 254016'
    ],

    5: [
      'Question: 64 x 5',
      'Half of 64 is 32',
      'Multiply 32 by 10. 32 * 10 = 320 \n(Simply add a zero in the end)',
      'Answer = 320'
    ],

    6: [
      'Question: 43 x 11',
      '4 + 3 = 7',
      'Place 7 in between 4 and 3',
      'Answer = 473'
    ],

    7: [
      'Question: 43 x 47 \nSum of one’s digit: 3 + 7 = 10 \nTen’s digit in both the numbers = 4',
      'Number next to 4 is 5',
      '4 * 5 = 20',
      '3 * 7 = 21',
      'Answer = 2021'
    ]
  }


  chosen_tutorial_steps = all_tutorial_steps[chosen_question_number];
  chosen_example_steps = all_example_steps[chosen_question_number];

  tutorial_steps = chosen_tutorial_steps;

  example_steps = [];
  example_steps = chosen_example_steps;
}

function showNextStep() {
  if (current_step < tutorial_steps.length || current_step < example_steps.length) {
    navigate_button_nxt.visible = false;
    game.time.events.add(Phaser.Timer.SECOND, nextLine, this);
  }

  if(example_steps[current_step + 1] != undefined) {
    example_text_full.setText(example_text_full.text +'\n >   '+ example_steps[current_step]);
  }
  else {
    navigate_button_nxt_txt.setText('Done!');
    navigate_button_nxt.alpha = 0.5;

  }

  
}

function updateLine() {
  try {
    if (tutorial_line.length< tutorial_steps[current_step].length || example_line.length < example_steps[current_step].length)
    {
        tutorial_line = tutorial_steps[current_step].substr(0, tutorial_line.length + 1);
        example_line = example_steps[current_step].substr(0, example_line.length + 1);
        // text.text = tutorial_line;
        text.setText(tutorial_line);
        example_text.setText(example_line);
    }
    else
    {
        //  Wait 2 seconds then start a new tutorial_line
        // game.time.events.add(Phaser.Timer.SECOND * 2, nextLine, this);
    }
  }
  catch(e) {
    warning_user_text.alpha = 1
    console.log(e);
  }
}

function nextLine() {

    current_step++;

    if (current_step < tutorial_steps.length || current_step < example_steps.length)
    {
        tutorial_line = '';
        example_line = '';
        game.time.events.repeat(85, tutorial_steps[current_step].length + 1, updateLine, this);
        game.time.events.repeat(85, example_steps[current_step].length + 1, updateLine, this);
        game.time.events.onComplete.add(showNavigationBtn, this);
    }

}

function showNavigationBtn() {
  navigate_button_nxt.visible = true;
  navigate_button_prv.visible = true;
}

function moveToCuriousClickState() {
  game.state.start('curiosityClick');
  current_step_index = -1;
}

function startOverLearning() {
  current_step = -1;
  nextLine();
  example_text_full.setText('');
  navigate_button_nxt_txt.setText('Next');
  navigate_button_nxt.alpha = 1;
  navigate_button_nxt.visible = false;
}

