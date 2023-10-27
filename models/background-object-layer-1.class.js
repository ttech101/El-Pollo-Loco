class BackgroundObjectLayer1 extends MovableObject {
    speed = 0.8;
    width = 720;
    height = 480;
    x;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x ;
        this.y = 480 - this.height;
        this.animation();
    }


    animation() {

        setInterval(() => {
            if (keyboard.RIGHT && world.character.x < world.level.level_end_x-500 ) {
                this.moveRight();
            }
            if (keyboard.LEFT && world.character.x > -600 ) {
                this.moveLeft();
            }
        }, 1000/60);
    }
}