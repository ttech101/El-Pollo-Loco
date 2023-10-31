class ChickenSmall extends MovableObject {

    height = 50;
    width = 40;
    y = 380;
    chickenDead = false;
    acceleration = 1;
    gravityEnd = 380;
    speedY = 0.001;
    acceleration = 5;
    jumpTime;
    chicken = 'small';

    offset = {
        top: 0,
        left: 5,
        right: 5,
        bottom: 0
    }

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.x = 500 + Math.random() * 3500;//2000
        this.speed = 0.15 + Math.random() * 0.5;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity();
        this.animate();
    }

    animate() {
        this.jumpTime = 1000 + Math.random() * 2000;//2000
        setInterval(() => {
            if (!stopGame) {
                if (this.chickenDead) {
                    this.speed = 0;
                    this.playAnimation(this.IMAGES_DEAD);
                } else {
                    this.playAnimation(this.IMAGES_WALKING);
                }
            }
        }, 150);

        setInterval(() => {
            if (!stopGame) {
                if (!this.isAboveGround() && !this.chickenDead) {

                    this.jump();
                }
            }
        }, this.jumpTime);

        setInterval(() => {
            if (!stopGame) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (!stopGame) {
                for (let i = 0; i < world.level.enemies.length; i++) {
                    const element = world.level.enemies[i];
                    if (element.chickenDead) {
                        world.level.enemies.splice(i, 1);
                        console.log('letzt Löschung')
                    }
                }
            }
        }, 1000);

    }
}
