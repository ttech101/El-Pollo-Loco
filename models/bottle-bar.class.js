class BottleBar extends DrawableObject {
    
    height = 50;
    width = 50;
    x = 500;
    y = -10;

    IMAGES = [
        'img/7_statusbars/3_icons/icon_salsa_bottle.png'
    ];

    constructor() {
        super();
        this.loadImage(this.IMAGES);
    
    }
}