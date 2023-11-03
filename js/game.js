let canvas;                         //creates the variable of the canvas
let world;                          //creates the variable of the world
let ctx;                            //creates the variable of the ctx
let keyboard = new Keyboard();      //creates a new keyboard
let startNewGame = false;           //creates the variable startNewGame
let menuInterval;                   //creates the variable menuIntervall to reset it
scale = false;                      //creates the variable scale for a better resolution of the game

/**
 * This function initializes the touch buttons
 */
function initGame() {
    window.addEventListener("resize", checkScreenWidth);
}

/**
 * This function initializes the game and sets the interval and other variables to start
 */
function startGameInit() {
    checkScreenWidth();
    playedSounds();
    initLevel();
    clearInterval(menuInterval);
    gameSound.currentTime = 0.3;
    snore_sound.pause();
    gameStart = true;
    stopGame = false;
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

/**
 * This function resets the intervals
 */
function clearAllIntervals() {
    let maxIntervalCount = setInterval(() => ';');
    for (let i = 0; i < maxIntervalCount + 1; i++) {
        clearInterval(i);
    }
}


/**
 * This function starts the game and loads the canvas 
 */
function startGame() {
    startGameInit();
    startNewGame = true;
    document.getElementById('canvas').classList.remove('dn');
    document.getElementById('main-menu').classList.add('dn');
    document.getElementById('menu-start-button').classList.add('dn');
    document.getElementById('back-to-menu-button').classList.add('dn');
}

/**
 * This event listener checks the input of the keyboard
 */
window.addEventListener('keydown', (e) => {
    if (e.keyCode == 39 || e.keyCode == 68) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37 || e.keyCode == 65) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 38 || e.keyCode == 87) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40 || e.keyCode == 83) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

});

/**
 * This event listener checks the input of the keyboard
 */
window.addEventListener('keyup', (e) => {
    if (e.keyCode == 39 || e.keyCode == 68) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37 || e.keyCode == 65) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38 || e.keyCode == 87) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40 || e.keyCode == 83) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

});



