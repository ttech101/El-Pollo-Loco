class Chicken extends MovableObject {
    height = 100;           //height of the png
    width = 80;             //widht of the png
    y = 330;                //y value of the image 
    chickenDead = false;    //variable whether the chicken is dead

    offset = {              //offset png damage
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

    /**
    * This constructor sets the settings for the chicken
    */
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 1000 + Math.random() * 3500;//2500
        this.speed = 0.15 + Math.random() * 0.5;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }


    /**
    * This function animates the chicken
    */
    animate() {
        this.animateWalkDead();
        this.chickenAnimatetLeft();
        this.spliceDeadEnemy();
    }

    /**
    * This function animates the chicken to run and die
    */
    animateWalkDead() {
        setInterval(() => {
            this.walkAndDead();
        }, 150);
    }

    /**
     * This function causes the chicken to run and die
     */
    walkAndDead() {
        if (!stopGame) {
            if (this.chickenDead) {
                this.speed = 0;
                this.playAnimation(this.IMAGES_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }
    }

    /**
      * This function animates the chicken
      */
    chickenAnimatetLeft() {
        setInterval(() => {
            this.chickenMoveLeft()
        }, 1000 / 60);
    }

    /**
     * This function moves the chicken to the left and checks whether the game is stopped
     */
    chickenMoveLeft() {
        if (!stopGame) {
            this.moveLeft();
        }
    }

    /**
    * This function animiert records whether the chocken is dead
    */
    spliceDeadEnemy() {
        setInterval(() => {
            this.spliceEnemy();
        }, 1000);
    }

    /**
     * This function deletes the killed chicken
     */
    spliceEnemy() {
        if (!stopGame) {
            for (let i = 0; i < world.level.enemies.length; i++) {
                const element = world.level.enemies[i];
                if (element.chickenDead) {
                    world.level.enemies.splice(i, 1);
                }
            }
        }
    }
}
