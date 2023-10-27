class MovableObject extends DrawableObject {
    speed = 0.1;
    otherDirection = false;
    speedY = 0;
    acceleration;
    energy = 100;
    lastHit = 0;
    lastHitBoss = 0;
    hit_ture = true;
    hitBoss = false;
    brokebottle = 5;
    gravityEnd;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            if (this.y > this.gravityEnd) {
                this.y = this.gravityEnd;
            }
            return this.y < this.gravityEnd;
        }
    }


    //  isColliding(obj) {
    //      return (this.X + this.width) >= obj.X && this.X <= (obj.X + obj.width) &&
    //          (this.Y + this.offsetY + this.height) >= obj.Y &&
    //          (this.Y + this.offsetY) <= (obj.Y + obj.height) &&
    //          obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    //
    //  }

    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }


    //  isColliding(mo) {
    //      return this.x + this.width > mo.x &&
    //          this.y + this.height > mo.y &&
    //          this.x < mo.x + mo.width &&
    //          this.y < mo.y + mo.height
    //  }


    hit() {
        //console.log(this.energy)
        if (this.hit_ture) {
            this.energy -= 20;
            if (this.energy < 0) {
                this.energy = 0;
            } else {
                this.lastHit = new Date().getTime();
                this.hit_ture = false;
                this.hitBoss = true
            }
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        if (timepassed > 1) {
            this.hit_ture = true;
            this.hitBoss = false;
        }
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    playAnimationJump(images) {
        let i = this.currentImage % images.length;
        if (this.currentImage == images.length) {
            i = 0
        }
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 20;
    }
   // test() {
   //     this.brokebottle++;
   // }


}