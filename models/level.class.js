class Level {
    enemies;
    clouds;
    backgroundOjects;
    backgroundOjectsLayer1;
    backgroundOjectsLayer2;
    bottle;
    coins;
    //endboss;
    level_end_x = 4300;

    constructor(enemies, clouds, backgroundOjects, backgroundOjectsLayer1, backgroundOjectsLayer2, bottle, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundOjectsLayer1 = backgroundOjectsLayer1;
        this.backgroundOjectsLayer2 = backgroundOjectsLayer2;
        this.backgroundOjects = backgroundOjects;
        this.bottle = bottle;
        this.coins = coins;
        //this.endboss = endboss;

    }
}