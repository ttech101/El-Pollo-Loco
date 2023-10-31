class ThrowableObject extends MovableObject {

    broke = false;
    gravityEnd = 140;
    acceleration = 1;

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

    trow() {
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
            if (this.y <= 360) {
                this.x += 10;
            }
            if (this.y >= 360) {
                this.x = this.x;
                this.y = 370;
                // this.acceleration = 0;
                this.speedY = 0;
            }
        }, 50);
    }

    animateBottle() {
        this.broke = true;
        this.splashsound = true;
        if (!muteFX) {
            throw_bottle.play();
        }


        setInterval(() => {

            if (this.y <= 365) {
                this.playAnimation(this.IMAGES_BOTTLE);
            }
            if (this.y >= 365) {
                console.log(world.endboss.hitBoss)
                this.playAnimation(this.IMAGES_SPLASH);
                if (this.splashsound && this.broke) {
                    this.splashsound = false;
                    console.log('test')
                    if (!muteFX) {
                        this.playSounds();
                    }
                }
            } else if (world.endboss.hitBoss) {
                this.playAnimation(this.IMAGES_SPLASH);
                if (this.broke) {
                    this.broke = false;
                    let removebottle = setTimeout(() => {
                        world.throwableObject.splice(0, 1);
                        clearTimeout(removebottle);
                        clearTimeout(bottombreak);
                        world.endboss.hitBoss = false;
                    }, 50)

                }
            }
        }, 50);

        let Y_add = 420 - this.y;
        let bottombreak = setTimeout(() => {

            world.throwableObject.splice(0, 1);
        }, 1700 + Y_add);

    }
    playSounds() {
        splash_bottle.pause();
        splash_bottle.currentTime = 0.3;
        splash_bottle.play()
    }
}