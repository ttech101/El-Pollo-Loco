class StatusBar extends DrawableObject {
    width = 210;        //widht of the png
    height = 50;        //height of the png
    x = 10;             //x value of the image 
    y = -10;            //y value of the image 
    percentage = 100;   ////percentage status

    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];

    /**
    * This constructor sets the settings for the character statusbar
    */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
    }

    /**
    * This function sets the percentage display of the status bar to the energy level
    * 
    * @param {number} percentage energy level 
    */
    setPercentage(percentage) {
        this.percentage = percentage;
        let Path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[Path];

    }

    /**
     * This function checks the energy level and then sets the correct path to the image
     * 
     * @returns number of energylevel
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage == 80) {
            return 4;
        } else if (this.percentage == 60) {
            return 3;
        } else if (this.percentage == 40) {
            return 2;
        } else if (this.percentage == 20) {
            return 1;
        } else {
            return 0;
        }
    }
}