class BackgroundObjectLayer2 extends MovableObject {
    speed = 0.5;    //speed
    width = 720;    //widht of the png
    height = 480;   //height of the png


    /**
     * This constructor sets the settings for the background layer 2
     * 
     * @param {array} imagePath Path for background Layer 2
     * @param {number} x        Gives the X coordinates for the background Layer 2
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
        this.animation();
    }


    /**
       * This function animates the background layer 2
       */
    animation() {
        setInterval(() => {
            if (keyboard.RIGHT && world.character.x < world.level.level_end_x - 500 && !stopGame) {
                this.moveRight();
            }
            if (keyboard.LEFT && world.character.x > -600 && !stopGame) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }
}