class RacingPlatform extends Phaser.GameObjectFactory {
    constructor(game, bear) {
        super(game);

        this.game.time.events.loop(120, this.update, this).timer.start();

        this.bear = bear;
        this.cursors = game.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursors.left.isDown) {
            console.log('left');
        }
        if (this.cursors.right.isDown) {
            console.log('right');
        }
    }
}

export default RacingPlatform;
