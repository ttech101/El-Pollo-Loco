class Coin extends MovableObject {
    height = 120;
    width = 120;
    y = 300;

    offset = {
        top:40,
        left: 40,
        right: 40,  
        bottom: 40
    }

    IMAGE_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];

    constructor() {
        super().loadImage('img/8_coin/coin_1.png'); 
        this.loadImages(this.IMAGE_COIN);
        this.x = 500 + Math.random() * 3500;//3000
        this.y = this.y - Math.random() * 200;
        this.animate();
    }
    
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGE_COIN);
        }, 150);
    }
}

