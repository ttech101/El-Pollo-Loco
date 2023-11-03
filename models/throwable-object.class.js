class ThrowableObject extends MovableObject {
    broke = false;      //bottle broke
    gravityEnd = 140;   //graphite end
    acceleration = 1;   //acceleration
    bottombreak;        //bottle broking

    offset = {
        top: 20,
        left: 20,
        right: 20,
        bottom: 10
    }

    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    IMAGES_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ]


    /**
    * 
    * This constructor sets the settings for the throwable objects 
    *
    * @param {number} x position
    * @param {number} y position
    */
    constructor(x, y) {
        super().loadImage('img/6_salsa_bottle/salsa_bottle.png');
        this.loadImages(this.IMAGES_BOTTLE);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 100;
        this.widht = 50;
        this.trow();
        this.animateBottle();
        this.hit = true;
    }

    /**
     * This function checks whether the flat is broken
     */
    trow() {
        if (!world.character.otherDirection) {
            this.trowRight();
        } else {
            this.trowLeft();
        }
    }

    /**
     * This function throws the bottle to the left side
     */
    trowLeft() {
        this.x = this.x - 100;
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            if (this.y <= 360) {
                this.x -= 10;
            } else
            if (this.y >= 360) {
                this.x = this.x;
                this.y = 370;
                this.speedY = 0;
            }
        }, 50);
    }

    /**
     * This function throws the bottle to the right side
     */
    trowRight() {
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            if (this.y <= 360) {
                this.x += 10;
            } else
            if (this.y >= 360) {
                this.x = this.x;
                this.y = 370;
                this.speedY = 0;
            }
        }, 50);
    }

    /**
    * This function animates the bottle
    */
    animateBottle() {
        this.broke = true;
        this.splashsound = true;
        if (!muteFX) {
            throw_bottle.play();
        }
        setInterval(() => {
            this.bottleAnimation();

        }, 50);
        let Y_add = 420 - this.y;
        this.bottombreak = setTimeout(() => {
            world.throwableObject.splice(0, 1);
        }, 1700 + Y_add);
    }

    /**
     * This function animates the bottle with broker
     */
    bottleAnimation() {
        if (this.y <= 365) {
            this.playAnimation(this.IMAGES_BOTTLE);
        }
        if (this.y >= 365) {
            this.playAnimation(this.IMAGES_SPLASH);
            if (this.splashsound && this.broke) {
                this.splashsound = false;
                if (!muteFX) {
                    this.playSounds();
                }
            }
        } else if (world.endboss.hitBoss) {
            this.playAnimation(this.IMAGES_SPLASH);
            this.bottleBroke();
        }
    }

    /**
     * This function checks whether the bottle has already been destroyed before
     */
    bottleBroke() {
        if (this.broke) {
            this.broke = false;
            let removebottle = setTimeout(() => {
                world.throwableObject.splice(0, 1);
                clearTimeout(removebottle);
                clearTimeout(this.bottombreak);
                world.endboss.hitBoss = false;
            }, 50)
        }
    }

    /**
     * This function starts the sound for the bottles destruction
     */
    playSounds() {
        splash_bottle.pause();
        splash_bottle.currentTime = 0.3;
        splash_bottle.play()
    }
}