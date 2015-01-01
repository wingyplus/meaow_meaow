class StartState {
    constructor(game) {
        this.commandForm = document.getElementById('command-form');
    }

    preload() {
        this.load.spritesheet('meaow', 'assets/images/cat.png', 40, 40, 4);
    }

    create() {
        this.cat = this.add.sprite(0, 0, 'meaow');

        this.cat.animations.add('turnUp',   [0], 6, true);
        this.cat.animations.add('turnDown', [1], 6, true);
        this.cat.animations.add('turnLeft', [2], 6, true);
        this.cat.animations.add('turnRight', [3], 6, true);

        this.commandForm.addEventListener('submit', event => {
            event.preventDefault();
            let command = document.querySelector('#command-form > input[name=command]').value;

            if (command === 'left') {
                this.cat.animations.play('turnLeft');
                this.cat.x -= 40;
            }
            if (command === 'right') {
                this.cat.animations.play('turnRight');
                this.cat.x += 40;
            }
            if (command === 'up') {
                this.cat.animations.play('turnUp');
                this.cat.y -= 40;
            }
            if (command === 'down') {
                this.cat.animations.play('turnDown');
                this.cat.y += 40;
            }
            document.querySelector('#command-form > input[name=command]').value = '';
        });

        this.cat.animations.play('turnRight');
    }
}

class MeaowGame extends Phaser.Game {
    constructor() {
        super(400, 300, Phaser.AUTO, 'meaow');

        this.state.add('startgame', StartState);
        this.state.start('startgame');
    }
}

new MeaowGame();
