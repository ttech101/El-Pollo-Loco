class BottleBar extends DrawableObject {
    height = 50;    //height of the png
    width = 50;     //widht of the png
    x = 500;        //x value of the image 
    y = 0;          //y value of the image 

    IMAGES = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png'
    ];

    /**
     * This constructor sets the settings for the bottlebar
     */
    constructor() {
        super();
        this.loadImage(this.IMAGES);

    }
}