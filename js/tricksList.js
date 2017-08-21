var tricksList = [
      'Sqaure of a number ending with 5',
      'Sqaure of a number just below 100',
      'Multiplication with 9',
      'Sqaure of a number just below 100',
      "Square of any 3 digit number with 0 in ten's place",
      'Multiplication with 5',
      'Multiplication with 11',
      "Multiply two numbers when sum of 1's digit is 10"
    ];

var tricksListState = {

    create: function () {
      game.add.image(0, 0, 'background_1200_900');

      var back_button = game.add.button(game.world.centerX - 550 ,100, 'back_button', this.moveBack);
      back_button.anchor.setTo(0.5)
      back_button.scale.setTo(0.40, 0.40);
      var back_button_txt = game.add.text(game.world.centerX - 550 ,130, "Back", {fill: '#ccc', font: "bold 15px"});
      back_button_txt.anchor.setTo(0.5);

      var trick_list_board = game.add.image(game.world.centerX,game.world.centerY - 100, 'homework_green_board');
      trick_list_board.anchor.setTo(0.5);
      trick_list_board.scale.setTo(0.80, 0.80);

      trick_text = game.add.text(game.world.centerX,game.world.centerY - 100, tricksList[0], {fill: '#fff', font: "20px"});
      trick_text.anchor.setTo(0.5);

      var previous_trick = game.add.button(game.world.centerX - 340 ,game.world.centerY - 100, 'back_button', this.showPreviousTrick);
      previous_trick.anchor.setTo(0.5)
      previous_trick.scale.setTo(0.50, 0.50);
      var next_trick = game.add.button(game.world.centerX + 340 ,game.world.centerY - 100, 'back_button', this.showNextTrick);
      next_trick.anchor.setTo(0.5)
      next_trick.scale.setTo(-0.50, 0.50);

      var btn_text_style = {fill: '#fff', font: "20px"};

      var play_chosen_trick = game.add.button(game.world.centerX, 500, 'text_button', this.playThis);
      play_chosen_trick.anchor.setTo(0.5);
      play_chosen_trick.scale.setTo(0.80, 0.80);
      var play_chosen_trick_txt = game.add.text(game.world.centerX, 500, 'Learn Now!', btn_text_style);
      play_chosen_trick_txt.anchor.setTo(0.5);

    },

    moveBack: function() {
      game.state.start('menu');
    },

    playThis: function() {
      is_user_selecting_question = true;
      game.state.start('questionDisplay');
    },

    showNextTrick: function() {
      if (user_selected_question < tricksList.length-1) {
        user_selected_question += 1;
      }
      trick_text.setText(tricksList[user_selected_question]);
    },

    showPreviousTrick: function() {
    if (user_selected_question > 0) {
        user_selected_question -= 1;
      }
      trick_text.setText(tricksList[user_selected_question]);
    }

};
