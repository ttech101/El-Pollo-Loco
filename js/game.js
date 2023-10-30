let canvas;
let world;
let ctx;
let keyboard = new Keyboard();
let startNewGame = false;
let menuInterval;
scale = false;


function initGame() {

}

function startGameInit() {
    initLevel();
    clearInterval(menuInterval);
    menuSound.pause()
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function clearAllIntervals() {
    let maxIntervalCount = setInterval(() => ';');
    for (let i = 0; i < maxIntervalCount + 1; i++) {
        clearInterval(i);
    }
}

function startGame() {
    startGameInit();
    startNewGame = true;
    document.getElementById('canvas').classList.remove('dn');
    document.getElementById('main-menu').classList.add('dn');
    document.getElementById('menu-start-button').classList.add('dn');
}

function mainMenu() {
    document.getElementById('canvas').classList.add('dn');
    document.getElementById('main-menu').classList.remove('dn');
    document.getElementById('menu-start-button').classList.remove('dn');
    closeMenu();
}

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

