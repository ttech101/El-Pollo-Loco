class Coin extends MovableObject {
    height = 120;   //height of the png
    width = 120;    //widht of the png
    y = 300;        //y value of the image 

    offset = {      //offset png damage
        top: 40,
        left: 40,
        right: 40,
        bottom: 40
    }

    IMAGE_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];

    /**
    * This constructor sets the coins
    */
    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.IMAGE_COIN);
        this.x = 500 + Math.random() * 3500;    //random x coordinate for appearing (3000) 
        this.y = this.y - Math.random() * 200;  //random y coordinate for appearing
        this.animate();
    }

    /**
     * This animation function animates the coins
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGE_COIN);
        }, 150);
    }
}

