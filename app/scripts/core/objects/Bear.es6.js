class Bear extends Phaser.Sprite {
    constructor(game, bearID) {
        super(game, 0, 0, bearID);

        game.load.image('bear' + bearID, 'assets/images/bear/bear1.png');

        this.game = game;
        this.add(bearID);
    }

    add(bearID) {
        // game.load.image(bearID, 'assets/images/bear' + bearID + '.png');
        this.game.add.sprite(0, 0, 'bear' + bearID);
    }
}

export default Bear;
