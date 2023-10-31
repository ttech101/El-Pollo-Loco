class Chicken extends MovableObject {

    height = 100;
    width = 80;
    y = 330;
    chickenDead = false;



    offset = {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10
    }

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'
    ];


    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 500 + Math.random() * 1000;//2500
        this.speed = 0.15 + Math.random() * 0.5;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();

    }



    animate() {

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
