class CoinBar extends DrawableObject {
    height = 50;    //height of the png
    width = 50;     //widht of the png
    x = 350;        //x value of the image 
    y = 0;          //y value of the image 

    IMAGES = [
        'img/7_statusbars/3_icons/icon_coin.png'
    ];

    /**
    * This constructor sets the coinbar
    */
    constructor() {
        super();
        this.loadImage(this.IMAGES);

    }
}