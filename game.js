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
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Jump in?"))
            .on('pointerdown', () => {
                if(this.hasItem("Poison Bait"))
                {
                    this.showMessage("You throw the bait in the water, sure enough the fish gobbles it up, a few seconds later it floats dead to the top and you take the sword from it's back");
                    this.tweens.add({
                    targets: clip,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => clip.destroy()
                    
                 });
                 this.gainItem("Sword");
                }
                else{
                 this.showMessage("Here we Go");
                 this.tweens.add({
                    targets: clip,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => clip.destroy()
                 });
                    this.gotoScene('underlake');
                }

                 
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

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "Go into the forest")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("The trees get denser")
            })
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
                this.gotoScene('demo2');
            })

        // let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         if (this.hasItem("key")) {
        //             this.showMessage("You've got the key for this door.");
        //         } else {
        //             this.showMessage("It's locked. Can you find a key?");
        //         }
        //     })
        //     .on('pointerdown', () => {
        //         if (this.hasItem("key")) {
        //             this.loseItem("key");
        //             this.showMessage("*squeak*");
        //             door.setText("🚪 unlocked door");
        //             this.gotoScene('demo2');
        //         }
        //     })

    }
}

class innerforest extends AdventureScene {
    constructor() {
        super("demo2", "You find yourself deeper in the forest");
    }
    preload()
    {
        this.load.path = './assets/';
        this.load.image('background1','P3.png');
    }
    onEnter() {
        this.add.image(0,0,"background1").setOrigin(0,0).setDisplaySize(this.w*.75,this.h);
        let back=this.add.text(this.w * 0.3, this.h * 0.8, "Go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("The lake is still out there...");
            })
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: back,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => back.destroy()
                });
                this.gotoScene('demo1');
            });
            let deep=this.add.text(this.w * 0.35, this.h * 0.3, "Go Even Deeper...")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("What Could Await you here?");
            })
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: deep,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => deep.destroy()
                });
                this.gotoScene('heart');
            });
            if(!this.hasItem('Poison Mushroom'))
            {
                let mush=this.add.text(this.w * 0.2, this.h * 0.83, "🍄Mushroom")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("A mushroom, looks like it's poisonous");
                })
                .on('pointerdown', () => {
                    this.tweens.add({
                        targets: mush,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => mush.destroy()
                    });
                    this.gainItem('Poison Mushroom');
                });
            }
            if(!this.hasItem('Worm'))
            {
                let worm=this.add.text(this.w * 0.45, this.h * 0.83, "🪱Worm")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("An earthworm, Fish like to eat these right?");
                })
                .on('pointerdown', () => {
                    this.tweens.add({
                        targets: worm,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => worm.destroy()
                    });
                    this.gainItem('Worm');
                });
            }

            let left=this.add.text(this.w * 0.1, this.h * 0.75, "Go Left")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You see a structure this way");
            })
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: left,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => left.destroy()
                });
                this.gotoScene("castle");
            });


        // let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage('*giggles*');
        //         this.tweens.add({
        //             targets: finish,
        //             x: this.s + (this.h - 2 * this.s) * Math.random(),
        //             y: this.s + (this.h - 2 * this.s) * Math.random(),
        //             ease: 'Sine.inOut',
        //             duration: 500
        //         });
        //     })
        //     .on('pointerdown', () => this.gotoScene('outro'));
    }
}
class heart extends AdventureScene {
    constructor() {
        super("heart", "A terrifying (plant?) stands before you... the pounding noise...");
    }
    preload()
    {
        this.load.path = './assets/';
        this.load.image('background3','P2.png');
        this.load.image('hart','Heart1.png');
    }
    onEnter() {
        this.add.image(0,0,"background3").setOrigin(0,0).setDisplaySize(this.w*.75,this.h);
        let Heart=this.add.sprite(this.w/2-100, this.h/2, 'hart').setOrigin(.5,.5).setInteractive().setScale(2).on('pointerover',()=>{this.showMessage("'Bump-bump'")});
        let lback=this.add.text(this.w * 0.4, this.h * 0.8, "Go Back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("go back to the forest?");
            })
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: lback,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => lback.destroy()
                });
                this.gotoScene("demo2");
            });
            if(!this.hasItem)
            {
                let cheese=this.add.text(this.w * 0.2, this.h * 0.9, "🧀Cheese!")
                .setFontSize(this.s * 2)
                .setInteractive()
                .on('pointerover', () => {
                    this.showMessage("A delicious vril filled snack");
                })
                .on('pointerdown', () => {
                    this.tweens.add({
                        targets: cheese,
                        y: `-=${2 * this.s}`,
                        alpha: { from: 1, to: 0 },
                        duration: 500,
                        onComplete: () => cheese.destroy()
                    });
                    this.gainItem("cheese")
                });
            }
            Heart.on('pointerdown',()=>{
                if(this.hasItem("Sword")&&this.hasItem("Shield"))
                {
                    this.showMessage("Its no match!!")
                    this.tweens.add({
                        targets: Heart,
                        x: '-=10',
                        yoyo: true,
                        repeat: 5,
                        duration: 50,
                        onComplete: () => {
                          this.tweens.add({
                            targets: Heart,
                            alpha: 0,
                            duration: 500,
                            onComplete: () => {
                              Heart.destroy();
                            }
                          });
                        }
                      });
                    this.gotoScene("outro");

                }
                else if(this.hasItem("Sword"))
                {
                    this.showMessage("You seemed to hurt it, but it's attacks flung you back");
                }
                else if(this.hasItem("Shield"))
                {
                    this.showMessage("You're safe from it's assault but your attacks have no effect");
                }
                else{
                    this.showMessage("You can't seem to harm it and it's attacks are too much for you to defend from!");
                }
            });

    }
}
class castle extends AdventureScene {
    constructor() {
        super("castle", "'Welcome to my abode outlander, I am the mad god Sheol'");
    }
    preload()
    {
        this.load.path = './assets/';
        this.load.image('background2','P4.png');
        this.load.image('sheol','SHEOGORATH.png');
    }
    onEnter() {
        this.add.image(0,0,"background2").setOrigin(0,0).setDisplaySize(this.w*.75,this.h);
        this.add.sprite(this.w/2-100, this.h/2, 'sheol').setOrigin(.5,.5).setInteractive().setScale(2).on('pointerover',()=>{this.showMessage("'I heard you can escape this realm if you kill the heart of the forest'")});
        let shield=this.add.text(this.w * 0.2, this.h * 0.6, "🛡️Shield")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("'My shield? I'll part with it if you give me my favorite snack'");
            })
            .on('pointerdown', () => {
                if(this.hasItem('cheese'))
                {
                this.tweens.add({
                    targets: shield,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => shield.destroy()
                });
                this.gainItem('Shield');
                this.loseItem('cheese');
                this.showMessage("Ooh Cheese! Good luck stranger!")
            }
            });
            let gback=this.add.text(this.w * 0.4, this.h * 0.8, "Go Back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("go back to the forest?");
            })
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: gback,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => gback.destroy()
                });
                this.gotoScene("demo2");
            });


    }
}
class underlake extends AdventureScene {
    constructor() {
        super('underlake', "Under the water... Look out!");
        // this.angle = 0;
        // this.speed = 2;
        // this.scale = 0.3;
        this.sprite = null;
    }

    preload() {
        this.load.image('sprite', './assets/C1.png');
    }

    onEnter() {
        this.cameras.main.setBackgroundColor('#ADD8E6');
        this.sprite = this.add.sprite(600, 500, 'sprite');
        // let timer = this.time.addEvent({
        //     delay: 3000, 
        //     callback: () => {
        //         this.showMessage("Aaaargh!!");
        //         this.gotoScene('demo1');
        //     }
        // });
        this.sprite.setInteractive().on('pointerover', () => {
            this.showMessage("Defend Yourself!");

        }).on('pointerdown',()=>{
            this.sprite.destroy();
            this.showMessage("You killed it! You got the Sword!")
            this.gainItem("Sword");
            this.gotoScene('demo1');
            
        });
        this.tweens.add({
            targets: this.sprite,
            x: this.cameras.main.centerX,
            y: this.cameras.main.centerY,
            scale: 4,
            angle:360,
            ease: 'Sine.inOut',
            duration: 2000
            //repeat: -1,
            //yoyo: true
        });
        this.time.addEvent({
            delay: 2000,
            callback: function() {
                this.showMessage('AAARGH!');
                this.gotoScene('demo1');
            },
            callbackScope: this
        });

        
    }

    update() {
      
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
    preload(){
        this.load.image('background4','./assets/P5.png');
    }
        

    create() {
        this.add.image(0, 0, "background4")
            .setOrigin(0, 0)
            .setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);
        this.add.text(50, 50, "You've escaped!").setFontSize(50);
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
    scene: [Intro, Demo1, Outro, underlake,innerforest,castle,heart],
    title: "Adventure Game",
});

