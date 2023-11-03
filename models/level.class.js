class Level {
    enemies;                    //set enemies
    clouds;                     //set clouds
    backgroundOjects;           //set background objects
    backgroundOjectsLayer1;     //set background objects layer 1
    backgroundOjectsLayer2;     //set background objects layer 2
    bottle;                     //set bottle
    coins;                      //set coin
    level_end_x = 4200;         //set level end

    /**
     * This constructor sets the settings for the level
     * 
     * @param {array} enemies                   //set enemies
     * @param {array} clouds                    //set clouds
     * @param {array} backgroundOjects          //set background objects
     * @param {array} backgroundOjectsLayer1    //set background objects layer 1
     * @param {array} backgroundOjectsLayer2    //set background objects layer 2
     * @param {array} bottle                    //set bottle
     * @param {array} coins                     //set coin
     */
    constructor(enemies, clouds, backgroundOjects, backgroundOjectsLayer1, backgroundOjectsLayer2, bottle, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundOjectsLayer1 = backgroundOjectsLayer1;
        this.backgroundOjectsLayer2 = backgroundOjectsLayer2;
        this.backgroundOjects = backgroundOjects;
        this.bottle = bottle;
        this.coins = coins;
    }
}