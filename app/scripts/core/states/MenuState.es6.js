class MenuState extends Phaser.State {
    preload() {
        this.load.image('bg-stars', 'assets/images/starfield.jpg');
        this.load.image('button-play', 'assets/images/buttons/play.png');
    }

    create() {
        this.add.tileSprite(0, -100, 800, 400, 'bg-stars');
        let style = {
            font: '32px Arial',
            fill: '#ff0044'
        };
        let text = this.add.text(400, 170, 'Play GEJM', style);
        text.anchor.set(0.5, 0.5);

        // Button: Start
        let button = this.add.button(400, 250, 'button-play', this._playGame);
        button.anchor.set(0.5, 0.5);
    }

    _playGame() {
        this.game.state.start('GameState');
    }
}

export default MenuState;
