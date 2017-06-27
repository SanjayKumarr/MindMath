var loadState = {

    preload: function () {

        /*
        Place to load all assets and show loading screen on loading.
        */

        var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#fff'});

        //Load your images, spritesheets, bitmaps...
        //Example: game.load.image('boiler-logo', 'assets/img/boilerplate-logo.png');
        game.load.image('background_1200_900', 'assets/img/background_1200_900.gif');
        game.load.image('homework_green_board', 'assets/img/homework_green_board.gif');
        game.load.image('text_button', 'assets/img/text_button.gif');
        game.load.image('penguin_notepad', 'assets/img/penguin_with_notepad_pencil.png');
        game.load.image('timer_board', 'assets/img/timer_board.gif');
        game.load.image('homework_template', 'assets/img/homework_template_3.gif');
        game.load.image('penguin_helper', 'assets/img/penguin_with_books.png');

        //Load your sounds, efx, music...
        //Example: game.load.audio('rockas', 'assets/snd/rockas.wav');

        //Load your data, JSON, Querys...
        //Example: game.load.json('version', 'http://phaser.io/version.json');
        game.add.plugin(PhaserInput.Plugin);
    },

    create: function () {

        game.stage.setBackgroundColor('#000');
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.state.start('menu');
    }
};
