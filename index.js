var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};
//////////////////////////////////////////////////////////////////////////////////////////////
var game = new Phaser.Game(config);

function preload() {
    this.load.setBaseURL('https://labs.phaser.io');
    this.load.image('t1', 'tank1_p.png')
}

function create() {
    const circle = this.add.circle(100, 100, 90, 0xffffff)
    const text = this.add.text(150, 100, 'Tank Game', {
        font: '80px Arial',
        fill: '#FF4FFF'
    })
    this.add.image(200, 200, 't1')
}