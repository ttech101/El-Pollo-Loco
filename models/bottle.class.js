class Bottle extends MovableObject {
    height = 100;   //height of the png
    width = 100;    //widht of the png
    y = 335;        //y value of the image 

    offset = {      //offset png damage
        top: 20,
        left: 30,
        right: 30,
        bottom: 10
    }

    IMAGE_BOTTLEFLIP = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ]

    /**
     * This constructor sets the settings of the bottle
     */
    constructor() {
        const randomIndex = Math.random() < 0.5 ? 0 : 1; // choosing ranom between 0 and 1
        super().loadImage(this.IMAGE_BOTTLEFLIP[randomIndex]);
        this.x = 500 + Math.random() * 3500;//3000
        this.y = this.y + Math.random() * 25;
    }
}