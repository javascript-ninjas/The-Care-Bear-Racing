class GameState extends Phaser.State {
    preload() {
        this.load.image('bear1', 'assets/images/bear/bear1.png');
        this.load.image('bg-stars', 'assets/images/starfield.jpg');
        this.load.spritesheet('rainbow', 'assets/images/rainbow.png', 40, 40);
        this.load.spritesheet('bg-main', 'assets/images/bg.png', 40, 40);
        this.load.tilemap('ground', 'assets/maps/map-1.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.audio('music', [
            'assets/audio/bodenstaendig_2000_in_rock_4bit.mp3',
            'assets/audio/bodenstaendig_2000_in_rock_4bit.ogg'
        ]);
    }

    create() {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.music = this.sound.play('music');

        this.starfield = this.add.tileSprite(0, 0, 2400, 2400, 'bg-stars');
        this.starfield.fixedToCamera = true;

        this.cursors = this.input.keyboard.createCursorKeys();

        let map = this.add.tilemap('ground');
        map.addTilesetImage('rainbow');
        map.addTilesetImage('bg-main');
        map.setCollisionBetween(0, 3600, true);
        map.fixedToCamera = true;

        this.world = map.createLayer('Tile Layer 1');
        this.world.resizeWorld();

        this.player = this.add.sprite(100, 100, 'bear1');
        this.player.anchor.setTo(0.5, 0.5);
        this.physics.arcade.enable(this.player, true);

        this.physics.arcade.collide(this.player, map);
        this.camera.follow(this.player);
    }

    update() {
        this.physics.arcade.collide(this.player, this.world, (o1, o2) => {
            if (o2.x >= 42 && o2.x <= 45 && o2.y >= 1 && o2.y <= 2) {
                this.music.stop();

                setTimeout(() => {
                    this.state.start('GameOverState');
                }, 0);
            }
        });

        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
        this.player.body.angularVelocity = 0;

        if (this.cursors.left.isDown) {
            this.player.body.angularVelocity = -150;
        }

        if (this.cursors.right.isDown) {
            this.player.body.angularVelocity = 150;
        }

        if (this.cursors.up.isDown) {
            this.physics.arcade.velocityFromAngle(this.player.angle, 300, this.player.body.velocity);
        }

        if (!this.camera.atLimit.x) {
            this.starfield.tilePosition.x -= ((this.player.body.velocity.x) * this.time.physicsElapsed);
        }

        if (!this.camera.atLimit.y) {
            this.starfield.tilePosition.y -= ((this.player.body.velocity.y) * this.time.physicsElapsed);
        }
    }
}

export default GameState;
