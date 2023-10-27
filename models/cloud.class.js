class Cloud extends MovableObject {
    y = -20;
    width = 500;
    height = 300;

    IMAGES = [
        'img/5_background/layers/4_clouds/1.png',
        'img/5_background/layers/4_clouds/2.png'
    ]


    constructor(x) {
        const randomIndex = Math.random() < 0.5 ? 0 : 1; // choosing ranom between 0 and 1
        super().loadImage(this.IMAGES[randomIndex]);
        this.x = x;
        this.y = this.y + Math.random() * 100;
        this.animate();
    }
    animate() {
        setInterval(() => {
            if (!stopGame) {
            this.x -= 0.15;
            }
        }, 1000 / 60);

    }




}