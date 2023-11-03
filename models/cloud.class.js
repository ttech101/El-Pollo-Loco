class Cloud extends MovableObject {
    y = -20;        //y value of the image
    width = 500;    //widht of the png
    height = 300;   //height of the png

    IMAGES = [
        'img/5_background/layers/4_clouds/1.png',
        'img/5_background/layers/4_clouds/2.png'
    ]

    /**
     * This constructor sets the settings for the clouds
     * 
     * @param {number} x Gives the X coordinates of the clouds
     */
    constructor(x) {
        const randomIndex = Math.random() < 0.5 ? 0 : 1; // choosing ranom between 0 and 1
        super().loadImage(this.IMAGES[randomIndex]);
        this.x = x;
        this.y = this.y + Math.random() * 100;
        this.animate();
    }

    /**
     * This function animates the clouds
     */
    animate() {
        setInterval(() => {
            if (!stopGame) {
                this.x -= 0.15;
            }
        }, 1000 / 60);
    }
}