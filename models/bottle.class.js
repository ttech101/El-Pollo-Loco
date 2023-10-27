class Bottle extends MovableObject {
    height = 100;
    width = 100;
    y = 335;

    offset = {
        top: 20,
        left: 30,
        right: 30,
        bottom: 10
    }

    IMAGE_BOTTLEFLIP = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ]

    constructor() {
        const randomIndex = Math.random() < 0.5 ? 0 : 1; // choosing ranom between 0 and 1
        super().loadImage(this.IMAGE_BOTTLEFLIP[randomIndex]);
        this.x = 500 + Math.random() * 300;//3000
        this.y = this.y + Math.random() * 25;
    }
}