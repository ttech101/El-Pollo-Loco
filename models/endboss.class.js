class Endboss extends MovableObject {
    height = 400;       //height of the png
    width = 250;        //widht of the png
    y = 0;              //y value of the image 
    gravityEnd = 50;    //graphite end
    speedY = 0.001;     //speedY
    acceleration = 8;   //acceleration
    walk;               //its walking

    offset = {          //offset png damage
        top: 1,
        left: 1,
        right: 1,
        bottom: 1
    }

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    IMAGES_WALK = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
    ];
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G21.png'
    ];
    IMAGES_DEAD = [
        ' img/4_enemie_boss_chicken/5_dead/G24.png',
        ' img/4_enemie_boss_chicken/5_dead/G25.png',
        ' img/4_enemie_boss_chicken/5_dead/G26.png'
    ]

    /**
     * This constructor sets the settings for the end boss
     */
    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 4400; //4400
        this.y = 0;
        this.animate();
        this.applyGravity();
        this.animateAttack();
    }

    /**
     * Entire animation of the boss
     */
    animate() {
        this.bossAnimationIntervall();
        this.bossEndMapIntervall();
        this.bossFight();
    }

    /**
     * This function sets the interval for the boss animation
     */
    bossAnimationIntervall() {
        setInterval(() => {
            this.bossAnimation();
        }, 150);
    }

    /**
     * This function animates the boss and checks whether the game is in break or is over
     */
    bossAnimation() {
        if (!stopGame) {
            if (!this.gameover) {
                if (this.isDead()) {
                    this.bossDead();
                } else if (this.isHurt()) {
                    this.bossHurt();
                } else if (world.bossFightRun && !this.isHurt() && this.x > -500 && !this.isAboveGround()) {
                    this.bossWalkJumpAnimation();
                } else if (world.bossFight) {
                    this.playAnimation(this.IMAGES_ALERT);
                }
            } else {
                this.loadImage('img/4_enemie_boss_chicken/5_dead/G26.png')
            }
        }
    }

    /**
     * This function checks whether the boss is dead
     */
    bossDead() {
        this.speed = 0;
        this.playAnimation(this.IMAGES_DEAD);
        this.timer = 0;
        setTimeout(() => {
            this.gameover = true;
            if (!muteFX) {
                bossFight_sound.pause();
                bossDead_Sound.play()
            }
            gameOver();
        }, 500);
        clearTimeout(this.walk);
    }

    /**
     * This function checked whether the boss was injured
     */
    bossHurt() {
        this.speed = 0;
        this.playAnimation(this.IMAGES_HURT);
        world.endboss.hitBoss == false;
        clearTimeout(this.walk);
        this.height = this.height - 20;
        this.width = this.width - 10;
        this.gravityEnd = this.gravityEnd + 18;
    }

    /**
     * This function animates the running and jumping movement of the boss
     */
    bossWalkJumpAnimation() {
        this.playAnimation(this.IMAGES_WALK);
        this.speed = 2.5;
        if (!this.isAboveGround() && !this.isHurt()) {
            this.walk = setTimeout(() => {
                this.speed = 10.5;
                this.jump();
                this.playAnimation(this.IMAGES_ATTACK);
                clearTimeout(this.walk);
            }, 750)
        }
    }

    /**
     * This function checks boss end map
     */
    bossEndMapIntervall() {
        setInterval(() => {
            this.bossEndMap();
        }, 1000 / 15);
    }

    /**
     * This function checks whether the end boss is at the end of the map
     */
    bossEndMap() {
        if (!stopGame) {
            if (world.bossFightRun && !this.isHurt() && this.x > -500 && !this.gameover && world.character.x < this.x) {
                this.moveLeft();
                this.otherDirection = false;
            }
            if (world.bossFightRun && !this.isHurt() && this.x < 4000 && !this.gameover && world.character.x > this.x) {
                this.moveRight();
                this.otherDirection = true;
            }
        }
    }

    /**
    * This function starts interval for the boss fight sound
    */
    bossFight() {
        setInterval(() => {
            this.bossFightSound();
        }, 250);
    }

    /**
     * This function starts the boss fight sound
     */
    bossFightSound() {
        if (world.bossFightRun && !stopGame && !this.gameover) {
            if (!muteSound) {
                gameSound.pause();
                bossFight_sound.play();
            }
        } else {
            bossFight_sound.pause();
        }
    }


    /**
     * This function animates the final boss's saying
     */
    animateAttack() {
        this.jump();
    }
}