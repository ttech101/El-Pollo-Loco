class DrawableObject {
    x = 120;            //x value of the image
    y = 280;            //y value of the image
    height = 150;       //height of the png
    width = 100;        //widht of the png
    img;                //img path
    imageCache = {};    //img cache path
    currentImage = 0;   //img counter

    /**
     * This function loads an image array
     * 
     * @param {array} path path of the img images
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * This function draws the image to the given coordinates
     * 
     * @param {img} ctx the img
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * This function loads the img array
     * 
     * @param {array} arr img array 
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * This function draws a blue box in the image
     */
    //drawFrame(ctx) {
    // if (this instanceof Character || this instanceof Chicken || this instanceof ThrowableObject || this instanceof Bottle || this instanceof Coin || this instanceof ChickenSmall || this instanceof Endboss) {
    //     ctx.beginPath();
    //     ctx.lineWidth = '2';
    //     ctx.strokeStyle = 'blue';
    //     ctx.rect(this.x, this.y, this.width, this.height);
    //     ctx.stroke();
    // }
    //}

    /**
     * This function draws a red box around the image and takes the offset into account
     */
    // drawFrameHitBox(ctx) {
    //  if (this instanceof Character || this instanceof Chicken || this instanceof ChickenSmall || this instanceof Coin || this instanceof Bottle || this instanceof Endboss || this instanceof ThrowableObject) {
    //      ctx.beginPath();
    //      ctx.lineWidth = '2';
    //      ctx.strokeStyle = 'red';
    //      ctx.rect(this.x + this.offset.left, this.y + this.offset.top,this.width -this.offset.right - this.offset.left , this.height - this.offset.bottom -this.offset.top);
    //      ctx.stroke();
    //  }
    // }
}