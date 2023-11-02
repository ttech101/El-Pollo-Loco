class CoinBar extends DrawableObject {
    
    height = 50;
    width = 50;
    x = 350;
    y = 0;

    IMAGES = [
        'img/7_statusbars/3_icons/icon_coin.png'
    ];

    constructor() {
        super();
        this.loadImage(this.IMAGES);
    
    }
}