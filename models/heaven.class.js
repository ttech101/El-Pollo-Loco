class Heaven extends DrawableObject {
    height = 480;   //height of the png
    width = 720 * 2;  //widht of the png
    x = 0;          //x value of the image
    y = 0;          //y value of the image

    IMAGES = [
        'img/5_background/layers/air.png'
    ];

    /**
    * This constructor sets the heaven
    */
    constructor() {
        super();
        this.loadImage(this.IMAGES);

    }
}