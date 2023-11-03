class Keyboard {
    LEFT = false;       //set left false
    RIGHT = false;      //set right false
    UP = false;         //set up false
    SPACE = false;      //set space false

    /**
    * This constructor sets the settings for the touch keys
    */
    constructor() {
        this.touchButtonPress();
    }

    /**
     * This function controls all buttons for the touch function
     */
    touchButtonPress() {
        setTimeout(() => {
            this.touchLeft();
            this.touchRight();
            this.touchUp();
            this.touchTrow();
        }, 1500);
    }

    /**
     * This function controls the touch function with a spartphone for the left button
     */
    touchLeft() {
        document.getElementById('btnleft').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.LEFT = true;
        });
        document.getElementById('btnleft').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.LEFT = false;
        });
    }

    /**
     * This function controls the touch function with a spartphone for the right button
     */
    touchRight() {
        document.getElementById('btnright').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.RIGHT = true;
        });
        document.getElementById('btnright').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.RIGHT = false;
        });
    }

    /**
     * This function controls the touch function with a spartphone for the up button
     */
    touchUp() {
        document.getElementById('btnup').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.UP = true;
        });
        document.getElementById('btnup').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.UP = false;
        });
    }

    /**
     * This function controls the touch function with a spartphone for the trow button
     */
    touchTrow() {
        document.getElementById('btntrow').addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.SPACE = true;
        });
        document.getElementById('btntrow').addEventListener('touchend', (e) => {
            e.preventDefault();
            this.SPACE = false;
        });
    }
}
