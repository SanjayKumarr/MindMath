var endState = {

    create: function () {
      document.getElementById('canvas').style.visibility = "hidden";
      game.add.image(0, 0, 'background_1200_900');

      var board = game.add.image(game.world.centerX, game.world.centerY - 100, 'board');
      board.scale.setTo(0.75, 0.75);
      board.anchor.setTo(0.5);
      
      var greeting_text;
      if(lollipops_count/10 <= 2) {
        greeting_text = 'Hmmm..! \nYou answered ' + lollipops_count/10 + ' out of 10 \nBut cool down! It isn\'t a big deal to learn them.';
      }
      else if(lollipops_count/10 <= 6) {
        greeting_text = 'Well played..! \nYou quickly answered ' + lollipops_count/10 + ' out of 10 \nYou can also learn the other tricks to improve further!'
      }
      else {
        greeting_text = 'WhooHoo..! \nYou quickly answered ' + lollipops_count/10 + ' out of 10 \nGreat job! Also explore the other tricks!'
      }

      var timer_brief_text = (challenge_attempt_count > 0) ? '':'\nYou have taken ' + elapsed_seconds + ' seconds to complete this. \nYou can do it a lot faster!'

      var text = game.add.text(game.world.centerX ,game.world.centerY - 150, '' + greeting_text + '\n' + timer_brief_text , { font: "15pt Courier", fill: "#fff", stroke: "#119f4e", strokeThickness: 2 });
      text.anchor.setTo(0.5);

      var btn_text_style = {fill: '#fff', font: "20px"};

      var show_menu_btn = game.add.button(game.world.centerX, game.world.centerY + 250, 'text_button', this.showAllTricks);
      show_menu_btn.anchor.setTo(0.5);
      var show_menu_txt = game.add.text(game.world.centerX, game.world.centerY + 250, 'Play again!', btn_text_style);
      show_menu_txt.anchor.setTo(0.5);

    },

    showAllTricks: function() {
      game.state.start('tricksList');
    }
};