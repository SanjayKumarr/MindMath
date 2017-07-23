var loadState = {

    preload: function () {

        /*
        Place to load all assets and show loading screen on loading.
        */
        game.stage.backgroundColor = "#8BC34A";

        var game_label = game.add.text(game.world.centerX, game.world.centerY + 50, 'Mind Math', {font: '60px Courier', fill: '#fff'});
        game_label.anchor.setTo(0.5);
        game_label.alpha = 0.1;
        game.add.tween(game_label).to( { alpha: 1 }, 5000, "Linear", true).loop();

        var loading_txt = game.add.text(game.world.centerX, game.world.centerY + 100, '..(^_^)..', {font: '30px Courier', fill: '#fff'});
        loading_txt.anchor.setTo(0.5);
        game.add.tween(loading_txt).to( { y: game.world.centerY + 150 }, 2400, Phaser.Easing.Bounce.Out, true).loop();
        
        

        //Load your images, spritesheets, bitmaps...
        //Example: game.load.image('boiler-logo', 'assets/img/boilerplate-logo.png');
        game.load.image('background_1200_900', 'assets/img/background_1200_900.gif');
        game.load.image('homework_green_board', 'assets/img/homework_green_board.gif');
        game.load.image('text_button', 'assets/img/text_button.gif');
        game.load.image('penguin_notepad', 'assets/img/penguin_with_notepad_pencil.png');
        game.load.image('timer_board', 'assets/img/timer_board.gif');
        game.load.image('homework_template', 'assets/img/homework_template_3.gif');
        game.load.image('penguin_helper', 'assets/img/penguin_with_books.png');
        game.load.image('back_button', 'assets/img/back_button.png');
        game.load.image('board', 'assets/img/board.jpg');
        //game.load.audio('chalk_track', ['assets/track/pencilsketching.mp3']);

        //Load your sounds, efx, music...
        //Example: game.load.audio('rockas', 'assets/snd/rockas.wav');

        //Load your data, JSON, Querys...
        //Example: game.load.json('version', 'http://phaser.io/version.json');
        game.add.plugin(PhaserInput.Plugin);
    },

    create: function () {

        //game.stage.setBackgroundColor('#000');
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        //game.state.start('curiosityClick');
        game.state.start('menu');
    }
};
