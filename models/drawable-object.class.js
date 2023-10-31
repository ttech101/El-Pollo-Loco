class DrawableObject {
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    drawFrame(ctx) {
       // if (this instanceof Character || this instanceof Chicken || this instanceof ThrowableObject || this instanceof Bottle || this instanceof Coin || this instanceof ChickenSmall || this instanceof Endboss) {
       //     ctx.beginPath();
       //     ctx.lineWidth = '2';
       //     ctx.strokeStyle = 'blue';
       //     ctx.rect(this.x, this.y, this.width, this.height);
       //     ctx.stroke();
       // }
    }

    drawFrameHitBox(ctx) {
       // if (this instanceof Character || this instanceof Chicken || this instanceof ChickenSmall || this instanceof Coin || this instanceof Bottle || this instanceof Endboss || this instanceof ThrowableObject) {
       //     ctx.beginPath();
       //     ctx.lineWidth = '2';
       //     ctx.strokeStyle = 'red';
       //     ctx.rect(this.x + this.offset.left, this.y + this.offset.top,this.width -this.offset.right - this.offset.left , this.height - this.offset.bottom -this.offset.top);
       //     ctx.stroke();
       // }
    }

}