class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 0;
    gravityEnd = 50;
    speedY = 0.001;
    acceleration = 8;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
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

    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 4500; //4500
        this.y = 0;
        this.animate();
        this.applyGravity();
        this.animateAttack();
    }

    animate() {
        let walk;
        setInterval(() => {
            if (!stopGame) {
                if (!this.gameover) {
                    if (this.isDead()) {
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
                        clearTimeout(walk);
                    } else if (this.isHurt()) {
                        this.speed = 0;
                        this.playAnimation(this.IMAGES_HURT);
                        world.endboss.hitBoss == false;
                        clearTimeout(walk);
                        this.height = this.height - 20;
                        this.width = this.width - 10;
                        this.gravityEnd = this.gravityEnd + 18;


                    } else if (world.bossFightRun && !this.isHurt() && this.x > -500 && !this.isAboveGround()) {
                        this.playAnimation(this.IMAGES_WALK);
                        this.speed = 2.5;
                        if (!this.isAboveGround() && !this.isHurt()) {
                            walk = setTimeout(() => {
                                this.speed = 10.5;
                                this.jump();
                                this.playAnimation(this.IMAGES_ATTACK);
                                clearTimeout(walk);
                            }, 750)
                        }
                    } else if (world.bossFight) {
                        this.playAnimation(this.IMAGES_ALERT);
                    }
                } else {
                    this.loadImage('img/4_enemie_boss_chicken/5_dead/G26.png')
                }
            }
        }, 150);
        setInterval(() => {
            if (!stopGame) {
                if (world.bossFightRun && !this.isHurt() && this.x > -500 && !this.gameover) {
                    this.moveLeft();
                }
            }
        }, 1000 / 25);
        setInterval(() => {
            if (world.bossFightRun && !stopGame && !this.gameover) {
                if (!muteSound) {
                    gameSound.pause();
                    bossFight_sound.play();
                }
            } else {
                bossFight_sound.pause();
            }
        }, 250);
    }


    animateAttack() {
        this.jump();
    }
}