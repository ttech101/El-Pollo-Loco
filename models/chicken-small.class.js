class ChickenSmall extends MovableObject {
    height = 50;            //height of the png
    width = 40;             //widht of the png
    y = 380;                //y value of the image 
    chickenDead = false;    //variable whether the chicken is dead
    acceleration = 1;       //acceleration
    gravityEnd = 380;       //graphite end
    speedY = 0.001;         //speed
    acceleration = 5;       //acceleration
    jumpTime;               //jump time
    chicken = 'small';      //chickens type

    offset = {              //offset png damage
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

    /**
    * This constructor sets the settings for the small chicken
    */
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.x = 500 + Math.random() * 3500;//random x coordinate for appearing (2000)
        this.speed = 0.15 + Math.random() * 0.5;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity();
        this.animate();
    }

    /**
    * This function animates the small chicken
    */
    animate() {
        this.jumpTime = 1000 + Math.random() * 2000; //random jump time (2000)
        this.animateWalkDead();
        this.randomJump();
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
     * This function makes the chicken jump according to a random number
     */
    randomJump() {
        setInterval(() => {
            this.chickenJump();
        }, this.jumpTime);
    }

    /**
     * This function makes the chicken jump
     */
    chickenJump() {
        if (!stopGame) {
            if (!this.isAboveGround() && !this.chickenDead) {
                this.jump();
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
            if (this.x > -500 && world.character.x < this.x) {
                this.moveLeft();
                this.otherDirection = false;
            }
            if (this.x < 4000 && world.character.x > this.x) {
                this.moveRight();
                this.otherDirection = true;
            }
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
