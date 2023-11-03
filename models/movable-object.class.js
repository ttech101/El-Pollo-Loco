class MovableObject extends DrawableObject {
    speed = 0.1;                //speed
    otherDirection = false;     //direction left or right
    speedY = 0;                 //speed
    acceleration;               //acceleration
    energy = 100;               //energy
    lastHit = 0;                //last hit counter
    lastHitBoss = 0;            // last hit counter boss
    hit_ture = true;            //hit
    hitBoss = false;            //hit boss
    brokebottle = 5;            // bottle broke
    gravityEnd;                 //gravity end


    /**
     * This function creates the graphitation
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * This function checks whether the object is in the air
     * @returns Depending on which value comes, there is a right or wrong answer
     */
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

    /**
     * This function checks the collision and returns a true or false
     * 
     * @param {object} mo The object that is being checked
     * @returns ture or false
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * This function creates a meeting of the character
     */
    hit() {
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

    /**
     * This function checks how long ago the last hit was and returns false as soon as the time has expired
     * 
     * @returns ture or false
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        if (timepassed > 0.5) {
            this.hit_ture = true;
            this.hitBoss = false;
        }
        return timepassed < 0.5;
    }

    /**
     * This function checks whether the energy is zero and then returns true
     * 
     * @returns true
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * this function animates the objects
     * 
     * @param {objects} images img path 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * this function animates the jump objects
     * 
     * @param {objects} images img path 
     */
    playAnimationJump(images) {
        let i = this.currentImage % images.length;
        if (this.currentImage == images.length) {
            i = 0
        }
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * This function makes the objects move to the right
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * This function makes the objects move to the left
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * This function makes the objects jumping
     */
    jump() {
        this.speedY = 20;
    }
}