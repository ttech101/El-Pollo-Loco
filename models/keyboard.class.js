class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;

    constructor() {

        this.touchButtonPress();

    }



    touchButtonPress() {
        setTimeout(() => {
            document.getElementById('btnleft').addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.LEFT = true;
            });

            document.getElementById('btnleft').addEventListener('touchend', (e) => {
                e.preventDefault();
                this.LEFT = false;
            });
            document.getElementById('btnright').addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.RIGHT = true;
            });

            document.getElementById('btnright').addEventListener('touchend', (e) => {
                e.preventDefault();
                this.RIGHT = false;
            });

            document.getElementById('btnup').addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.UP = true;
            });

            document.getElementById('btnup').addEventListener('touchend', (e) => {
                e.preventDefault();
                this.UP = false;
            });

            document.getElementById('btntrow').addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.SPACE = true;
            });

            document.getElementById('btntrow').addEventListener('touchend', (e) => {
                e.preventDefault();
                this.SPACE = false;
            });

        }, 1500);

    }

}
