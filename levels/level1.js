let level1; //level1 value


/**
 * This function initializes the level
 */
function initLevel() {

    level1 = new Level([

        new Chicken(),
        new Chicken(),
        new ChickenSmall(),
        new Chicken(),
        new ChickenSmall(),
        new Chicken(),
        new ChickenSmall(),
        new Chicken(),
        new ChickenSmall(),
        new Chicken(),
        new ChickenSmall(),
        new ChickenSmall()
    ],
        [
            new Cloud(-719),
            new Cloud(0),
            new Cloud(719),
            new Cloud(719 * 2),
            new Cloud(719 * 3),
            new Cloud(719 * 4),
            new Cloud(719 * 5),
            new Cloud(719 * 6),
            new Cloud(719 * 7)
        ],
        [
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', -719 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 7)
        ],
        [
            new BackgroundObjectLayer1('img/5_background/layers/3_third_layer/2.png', -719 * 2),
            new BackgroundObjectLayer1('img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObjectLayer1('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObjectLayer1('img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObjectLayer1('img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObjectLayer1('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObjectLayer1('img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new BackgroundObjectLayer1('img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObjectLayer1('img/5_background/layers/3_third_layer/1.png', 719 * 6),
            new BackgroundObjectLayer1('img/5_background/layers/3_third_layer/1.png', 719 * 7)
        ],

        [
            new BackgroundObjectLayer2('img/5_background/layers/2_second_layer/1.png', -719 * 2),
            new BackgroundObjectLayer2('img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObjectLayer2('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObjectLayer2('img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObjectLayer2('img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObjectLayer2('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObjectLayer2('img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new BackgroundObjectLayer2('img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObjectLayer2('img/5_background/layers/2_second_layer/1.png', 719 * 6),
            new BackgroundObjectLayer2('img/5_background/layers/2_second_layer/2.png', 719 * 7)

        ],
        [
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle()
        ],
        [
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin()
        ]
        , [
            //new Endboss()
        ]
    );
}