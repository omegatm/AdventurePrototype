class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "On a Hill, with a path heading beside a lake, You wonder how you got here...");
    }
    preload()
    {
        this.load.path = './assets/';
        this.load.image('background','P1.png');
    }

    onEnter() {

        this.add.image(0,0,"background").setDisplaySize(2800,2150);


        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "Lake")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Jump in?"))
            .on('pointerdown', () => {
                 this.showMessage("Here we Go");
                 this.tweens.add({
                    targets: clip,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => clip.destroy()
                 });
                    this.gotoScene('underlake');

                 
                // this.gainItem('paperclip');
                // this.tweens.add({
                //     targets: clip,
                //     x: '+=' + this.s,
                //     repeat: 2,
                //     yoyo: true,
                //     ease: 'Sine.inOut',
                //     duration: 100
                // });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}
class underlake extends AdventureScene {
    constructor() {
        super('underlake', "Under the water... Look out!");

    }
    preload()
    {

        this.load.image('sprite', './assets/C1.png');
    }


    onEnter() {
        let angle=0;
        let speed=2;
        let scale=.3;
        let sprite = this.add.sprite(400, 300, 'sprite');

        // this.cameras.main.setBackgroundColor('#add8e6');
        
    }
    update() {
        angle += speed * 0.01;
        scale += 0.01;
        sprite.setPosition(400 + Math.cos(angle) * 200, 300 + Math.sin(angle) * 200);
        sprite.setScale(scale);
        sprite.angle += 1;
    }

}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        let text=this.add.text(1920/2-250,540, "Click to start").setFontSize(60).setInteractive();
        //var text = this.add.bitMaptext(400, 300, 'Hover over me!').setOrigin(0.5);
    
            text.on('pointerover', ()=> {
                // Tween the text to a smaller size
                this.tweens.add({
                    targets: text,
                    scaleX: 0.8,
                    scaleY: 0.6,
                    duration: 100,
                    yoyo: true,
                    ease: 'Sine.easeInOut'
                });
            });
            
            // Add event listener for mouseout event
            text.on('pointerout', function() {
                // Tween the text back to its original size
                this.tweens.add({
                    targets: text,
                    scaleX: 1,
                    scaleY: 1,
                    duration: 100,
                    yoyo: true,
                    ease: 'Sine.easeInOut'
                });
            });
        
        this.input.on('pointerdown', () => {
                // Tween the text to a smaller size
                this.tweens.add({
                    targets: text,
                    scaleX: 0.8,
                    scaleY: 0.6,
                    duration: 50,
                    yoyo: true,
                    ease: 'Sine.easeInOut'
                });
            
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Demo1, Demo2, Outro],
    title: "Adventure Game",
});

