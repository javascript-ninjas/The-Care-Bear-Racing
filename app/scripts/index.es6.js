import Menu from './states/MenuState';

class Game extends Phaser.Game {

	constructor() {
		super(800, 600, Phaser.AUTO, 'content', null);
		this.state.add('MenuState', Menu);
		this.state.start('MenuState');
	}

}

new Game();
