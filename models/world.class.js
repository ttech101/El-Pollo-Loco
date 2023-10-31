class World {
    character = new Character();
    level = level1;
    enemies = level1.enemies;
    clouds = level1.clouds;
    bottle = level1.bottle;
    coins = level1.coins;
    endboss = new Endboss();
    keyboard;
    backgroundOjects = level1.backgroundOjects;
    backgroundOjectsLayer1 = level1.backgroundOjectsLayer1;
    backgroundOjectsLayer2 = level1.backgroundOjectsLayer2;
    canvas;
    ctx;
    keyboard_up = true;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarBoss = new StatusBarBoss();
    bottleBar = new BottleBar();
    coinBar = new CoinBar();
    heaven = new Heaven();
    throwableObject = [];
    bottleCounter = 50;
    throwBottle = true;
    coinCounter = 0;
    bossFight = false; // Positin des Boss
    bossFightRun = false;
    gameover = false;


    constructor(canvas, keyboard) {

        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        if (!scale) {
            this.ctx.scale(2, 2);
            scale = true;
        }
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();
        this.run();

    }

    setWorld() {
        this.character.world = this;
    }

    run() {

        setInterval(() => {
            this.checkThrowObjects();
        }, 10);
        setInterval(() => {
            this.checkCollisions();
        }, 10);
    }

    checkThrowObjects() {
        if (this.keyboard.SPACE && this.keyboard_up == true && this.bottleCounter >= 1 && this.throwBottle) {
            let bottle_fly = new ThrowableObject(this.character.x + 80, this.character.y + 100)
            this.throwableObject.push(bottle_fly);
            this.bottleCounter--;
             this.keyboard_up = false;   
             this.throwBottle = false;    
             this.waitThrowBottle();       
        }
        if (!this.keyboard.SPACE) {
                this.keyboard_up = true;
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.y + this.character.height >= enemy.y + enemy.height && !enemy.chickenDead) {
                this.character.hit();
                if (!muteFX) {
                    damage_sound.play();
                }
                this.statusBar.setPercentage(this.character.energy);
            }
        });


        if (this.character.isColliding(this.endboss) && this.character.y + this.character.height <= this.endboss.y + this.endboss.height && this.endboss.energy >= 10) {
            this.character.hit();
            if (!muteFX) {
                damage_sound.play();
            }
            this.statusBar.setPercentage(this.character.energy);
        }


        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy) && this.character.y + this.character.offset.bottom + this.character.height <= enemy.y + enemy.height && !enemy.chickenDead) {
                enemy.chickenDead = true;
                console.log(enemy)
                this.deadSoundEnimy(enemy);
                this.character.acceleration = 3.5;
                this.character.jump();
            }
        });

        this.level.enemies.forEach((enemy, index) => {
            this.throwableObject.forEach((throwableObject) => {
                if (throwableObject.isColliding(enemy)) {
                    this.deadSoundEnimy(enemy);
                    enemy.chickenDead = true;
                }
            });
        });


        this.throwableObject.forEach((throwableObject) => {
            if (throwableObject.isColliding(this.endboss)) {
                if (throwableObject.hit &&  this.endboss.energy != 0) {
                    this.endboss.hit();
                    if (!muteFX) {
                        splash_bottle.play()
                        bossHit_Sound.play();
                    }
                    splash_bottle.currentTime = 0.3;
                    this.statusBarBoss.setPercentage(this.endboss.energy);
                    this.endboss.hitBoss = true;
                    throwableObject.hit = false;
                }
            }
        });



        this.level.coins.forEach((coins, index) => {
            if (this.character.isColliding(coins)) {
                this.level.coins.splice(index, 1);
                if (!muteFX) {
                    coinSound.play();
                }
                this.coinCounter++;

            }
        });

        this.level.bottle.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottle.splice(index, 1);
                if (!muteFX) {
                    bottleSound.play();
                }
                this.bottleCounter++;
            }
        });
    }



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addToMap(this.heaven);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundOjectsLayer1);
        this.addObjectsToMap(this.level.backgroundOjectsLayer2);
        this.addObjectsToMap(this.level.backgroundOjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.endboss);
        this.addObjectsToMap(this.throwableObject);

        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.level.coins);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.coinBar);
        this.showBossBar();
        this.ctx.translate(this.camera_x, 0);



        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.counterText(this.bottleCounter, 480, 30);
        this.counterText(this.coinCounter, 400, 30);
        let self = this
        requestAnimationFrame(function () {
            self.draw();
        });

    }


    checkStopGame() {
        this.draw()
    }

    showBossBar() {
        if (this.camera_x <= -50 || this.bossFight) { //3780 -50
            this.addToMap(this.statusBarBoss);
            this.bossFight = true;
            setTimeout(() => {
                this.bossFightRun = true;
            }, 2000);
        }
    }

    counterText(counter, x, y) {
        this.ctx.font = "34px sans-serif";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(counter, x, y);


    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        mo.drawFrameHitBox(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    deadSoundEnimy(enemy) {
        if (!muteFX) {
            if (enemy.chicken == 'small') {
                deadChickenSmall.play();
            } else {
                deadChicken.play();
            }
        }
    }
    waitThrowBottle(){
        setTimeout(() => {
            this.throwBottle = true;
        }, 1000);
    }
}