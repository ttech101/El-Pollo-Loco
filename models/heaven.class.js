class Heaven extends DrawableObject {
    
    height = 480;
    width = 720*2;
    x = 0;
    y = 0;

    IMAGES = [
        'img/5_background/layers/air.png'
    ];

    constructor() {
        super();
        this.loadImage(this.IMAGES);
    
    }
}