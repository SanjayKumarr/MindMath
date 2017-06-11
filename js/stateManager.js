var w = 1200,
    h = 900;

/*
For Fullscreen,

var w = window.innerWidth * window.devicePixelRatio,
    h = window.innerHeight * window.devicePixelRatio;
*/

var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

game.state.start('boot');


// var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer', { preload: preload, create: create, update: update });
// function preload() {
//     game.load.image('background_1200_900', 'assets/img/background_1200_900.png');

// }
// function create() {
// 	game.add.image(0, 0, 'background_1200_900');
// }
// function update() {
// }
