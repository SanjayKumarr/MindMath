var current_step_index = 0;

var explanation_steps = [];
var explanation_text, explanation_text_full;
var line = '';

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

      navigate_button = game.add.button(game.world.centerX ,game.world.centerY + 250, 'text_button', showNext);
      navigate_button.anchor.setTo(0.5);
      navigate_button_text = game.add.text(game.world.centerX ,game.world.centerY + 250, 'Next Step', {fill: '#fff', font: "20px"});
      navigate_button_text.anchor.setTo(0.5);
      getExplanationSteps();
      //navigate_button.visible = false;

      explanation_text = game.add.text(game.world.centerX ,game.world.centerY, 'SomeThing', { font: "15pt Courier", fill: "#fff", stroke: "#119f4e", strokeThickness: 2 });
      explanation_text.anchor.setTo(0.5);

      explanation_text_full = game.add.text(game.world.centerX - 300 ,game.world.centerY - 130, '', { font: "10pt Courier", fill: "#fff", stroke: "#119f4e", strokeThickness: 2 });
      explanation_text_full.anchor.y = 0.5
      showNextLine();
    }
};

function getExplanationSteps() {
  var all_explanation_steps = {
    0: [
      'Consider (ax + b)² = a² . x²+ 2abx + b²',
      'For any number ending with 5, x = 10 & b = 5',
      '(10a + 5)² = a² . 10²+ 2. 10a . 5 + 5²',
      '= a² . 10² + a.10²+ 5²',
      '= (a² + a ) . 10² +5²',
      '= a (a + 1) . 10² + 25',
      'So, a (a + 1) | 25 is the answer!'
    ],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: []
  }

  explanation_steps = all_explanation_steps[0];
}

function moveToLearnTrick() {
  console.log('I am here!')
  game.state.start('learnTrick');
  moving_back = true;
  current_step = -1;
}

function showNext() {
  if (current_step_index < explanation_steps.length ) {
    game.time.events.add(Phaser.Timer.SECOND, showNextLine, this);
  }

  if(explanation_steps[current_step_index] != undefined) {
    explanation_text_full.setText(explanation_text_full.text +'\n'+ explanation_steps[current_step_index]);
  }
  else {
    navigate_button_text.setText('Finish');
  }

  //navigate_button.visible = false;
}

function updateNextLine() {

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

function showNextLine() {

    current_step_index++;

    if (current_step_index < explanation_steps.length)
    {
        line = '';
        game.time.events.repeat(80, explanation_steps[current_step_index].length + 1, updateNextLine, this);
    }
  
  //navigate_button.visible = true;
}

