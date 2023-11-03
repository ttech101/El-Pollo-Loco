class Character extends MovableObject {
    height = 300;       //height of the png
    width = 150;        //widht of the png
    y = 140;            //y value of the image 
    speed = 5;          //speed
    timer = 0;          //timer for long idle
    gravityEnd = 140;   //graphite end
    acceleration = 2;   //acceleration
    hurtLeft = false;   //damage left site
    hurtRight = false;  //damage right site

    offset = {          //offset png damage
        top: 120,
        left: 30,
        right: 30,
        bottom: 10
    }

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'
    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];

    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    IMAGES_LONG_IDLE = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];

    /**
     * This constructor sets the settings for the character
     */
    constructor() {
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.applyGravity();
        this.animate();
    }

    /**
    * This function animates the character
    */
    animate() {
        this.moveLeftRightJump();
        this.runIdleDamageDead();
        this.walkIdle();
        this.knockbackAnimation();
    }

    /**
    * knockback animation
    */
    knockbackAnimation() {
        setInterval(() => {
            this.checkKnockback();
            this.knockback();
        }, 250 / 15);
    }

    /**
    * Walk or stand anmination
    */
    walkIdle() {
        setInterval(() => {
            if (!stopGame) {
                this.walkingOrIdle();
            }
        }, 90);
    }

    /**
    * Running standing damage and dead animation
    */
    runIdleDamageDead() {
        setInterval(() => {
            this.runOrIdle();
            this.longIdle();
            this.deadAnimation();
            this.jumpAnimation();
        }, 200);
    }

    /**
     * Move left or right and jump
    */
    moveLeftRightJump() {
        setInterval(() => {
            if (!stopGame) {
                this.moveLeftOrRight();
                this.jumpCharacter();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
    }

    /**
     * This function makes the character move left and right
     */
    moveLeftOrRight() {
        if (!this.isHurt()) {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > -600) {
                this.moveLeft();
                this.otherDirection = true;
            }
        }
    }

    /**
     * This function animates the jump
     */
    jumpCharacter() {
        if (this.world.keyboard.UP && !this.isAboveGround()) {
            this.acceleration = 1.5;
            this.jump();
            if (!muteFX) {
                jump_sound.play();
            }
        }
    }

    /**
     * This function checks whether the character is running or standing and then we add a sound for the respective animation when running
     */
    runOrIdle() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.isAboveGround() && !muteFX) {
            walking_sound.play();
        } else if (this.world.keyboard.LEFT && this.x > -600 && !this.isAboveGround() && !muteFX) {
            walking_sound.play();
        } else {
            walking_sound.pause();
        }
        if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && this.timer <= 20 && this.y == 140) {
            this.playAnimation(this.IMAGES_IDLE);
            this.timer++
        }
    }

    /**
     * This function checks whether the character is not moving for a long time and then turns off the sleeping animation with sound
     */
    longIdle() {
        if (!this.world.keyboard.RIGHT && !this.world.keyboard.LEFT && this.timer >= 20 && this.y == 140) {
            this.playAnimation(this.IMAGES_LONG_IDLE);
            if (!muteFX && !stopGame && gameStart) {
                snore_sound.play();
            } else {
                snore_sound.pause();
            }
        } else {
            snore_sound.pause();
        }
    }

    /**
     * This function checks whether the character is dead or has been damaged
     */
    deadAnimation() {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
            this.timer = 0;
            world.gameover = true;
        }
    }
    /**
     * This function checks at what height the character is and then shows the respective animation
     */
    jumpAnimation() {
        if (this.isAboveGround() && this.speedY >= 20 && !this.isHurt()) {
            this.loadImage('img/2_character_pepe/3_jump/J-33.png');
            this.timer = 0;
        } else if (this.isAboveGround() && this.speedY >= 5) {
            this.loadImage('img/2_character_pepe/3_jump/J-34.png');
            this.timer = 0;
        } else if (this.isAboveGround() && this.speedY >= 0) {
            this.loadImage('img/2_character_pepe/3_jump/J-35.png');
            this.timer = 0;
        } else if (this.isAboveGround() && this.speedY >= -5) {
            this.loadImage('img/2_character_pepe/3_jump/J-36.png');
            this.timer = 0;
        } else if (this.isAboveGround() && this.speedY >= -10) {
            this.loadImage('img/2_character_pepe/3_jump/J-37.png');
            this.timer = 0;
        } else if (this.isAboveGround() && this.speedY >= -15) {
            this.loadImage('img/2_character_pepe/3_jump/J-38.png');
            this.timer = 0;
        } else if (this.isAboveGround() && this.speedY >= -20) {
            this.loadImage('img/2_character_pepe/3_jump/J-38.png');
            this.timer = 0;
        } else if (this.isAboveGround() && this.speedY >= -25) {
            this.loadImage('img/2_character_pepe/3_jump/J-39.png');
            this.timer = 0;
        }
    }

    /**
     * This function checks and animates the character to walk or stand
     */
    walkingOrIdle() {
        if (this.world.keyboard.RIGHT && this.y >= 140 && this.y == 140 || this.world.keyboard.LEFT && this.y == 140) {
            this.playAnimation(this.IMAGES_WALKING);
            this.timer = 0;
        }
        if (this.world.keyboard.SPACE && !this.world.keyboard.RIGHT && !this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_IDLE);
            this.timer = 0;
        }
    }

    /**
     * This function checks in which direction the recoil must take place
     */
    checkKnockback() {
        if (this.isHurt() && !this.otherDirection  && !this.hurtLeft) { //this.world.keyboard.RIGHT
            this.moveLeft();
            this.acceleration = 10;
            this.speedY = 10;
            this.hurtLeft = true
        } else if (this.isHurt() && this.otherDirection && !this.hurtRight) {//his.world.keyboard.LEFT
            this.moveRight();
            this.acceleration = 10;
            this.speedY = 10;
            this.hurtRight = true;
        }
    }

    /**
     * This function controls the recoil
     */
    knockback() {
        if (this.energy >= 10) {
            this.knockbackHurt();
        }
        if (!this.isHurt()) {
            this.hurtLeft = false;
            this.hurtRight = false;
        }
    }

    /**
     * This function checks the knockback for energy and for it
     */
    knockbackHurt() {
        if (this.isHurt() && this.hurtLeft) {
            this.playAnimation(this.IMAGES_HURT);
            this.moveLeft();
            this.acceleration = 10;
            this.speedY = 10;
        }
        if (this.isHurt() && this.hurtRight) {
            this.playAnimation(this.IMAGES_HURT);
            this.moveRight();
            this.acceleration = 10;
            this.speedY = 10;
        }
    }
}