class BackgroundObject extends MovableObject {
    width = 720;    //widht of the png
    height = 480;   //height of the png

    /**
     * This constructor sets the settings for the background objects
     * 
     * @param {array} imagePath Path for background objects
     * @param {number} x        Gives the X coordinates for the background objects
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height;
    }
}