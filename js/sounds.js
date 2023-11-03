let volumeSliderSound = document.getElementById("volumeSliderSound");   //New variable for the sound slider
let volumeValueSound = document.getElementById("volumeValueSound");     //New variable for the sound slider
let volumeSliderFX = document.getElementById("volumeSliderFX");         //New variable for the sound slider
let volumeValueFX = document.getElementById("volumeValueFX");           //New variable for the sound slider
let checkboxSound = document.getElementById("checkboxSound");           //New variable for check box of sound
let checkboxFX = document.getElementById("checkboxFX");                 //New variable for check box of sound FX
let muteCheck = document.getElementById('mute');                        //New variable for check mute
let muteSound = false;                                                  //New variable for check of sound mute
let muteFX = false;                                                     //New variable for check of FX mute

//Sounds od the game

//World
const coinSound = new Audio('./audio/coin/scale-e6-14577.mp3');
const bottleSound = new Audio('audio/bottle/cork-85200.mp3');
const bossFight_sound = new Audio('audio/boss/random-boss-fight-music-65460.mp3');

//Chicken
const deadChickenSmall = new Audio('audio/small-chicken/squeaky-toy-1-6059.mp3');
const deadChicken = new Audio('audio/chicken/chicken-single-alarm-call-6056.mp3');

//Bottle
const throw_bottle = new Audio('audio/bottle/493224_10648717-lq.mp3');
const splash_bottle = new Audio('audio/bottle/smashing-glass-6166.mp3');

//Character
const walking_sound = new Audio('audio/character/107624_1656768-lq.mp3');
const jump_sound = new Audio('audio/character/456367_9498993-lq.mp3');
const damage_sound = new Audio('audio/character/486943_6142149-lq.mp3');
const snore_sound = new Audio ('audio/character/male-snore-1-29322.mp3');

//Boss

const bossHit_Sound = new Audio('audio/boss/cartoon-scream-1-6835.mp3');
const bossDead_Sound = new Audio('audio/boss/zombie-death-2-95167.mp3');

//Menu
const menuSound = new Audio('./audio/the-surf-is-bad-tpdau-30152.mp3');
const gameSound = new Audio('./audio/chicken-pickin-country-4112.mp3');
const clickSound = new Audio('./audio/menu/blip-131856.mp3');

//win or los
const win_sound = new Audio('audio/gameEnd/success-fanfare-trumpets-6185.mp3');
const lost_sound = new Audio('audio/character/080205_life-lost-game-over-89697.mp3');


/**
 * Function that is called when the music slider is moved
 */
volumeSliderSound.oninput = function () {
    volumeValueSound.innerHTML = this.value + ' %';
    songSounds(this.value / 100);
}


/**
 * Function called when the Slider FX is moved
 */
volumeSliderFX.oninput = function () {
    volumeValueFX.innerHTML = this.value + ' %';
    fxSounds(this.value / 100);
}

/**
 * This function checks whether the sound slider is moving
 */
checkboxSound.addEventListener("change", function () {
    var value = checkboxSound.checked ? checkboxSound.value : null;
    if (value) {
        muteSound = false
        muteToggle = false
        mute();
    } else {
        muteSound = true
        muteToggle = true
        mute();
    }
});

/**
 * This function checks whether the FX slider is moving
 */
checkboxFX.addEventListener("change", function () {
    var value = checkboxFX.checked ? checkboxFX.value : null;
    if (value) {
        muteFX = false;
        muteToggle = false
        mute();
    } else {
        muteToggle = true
        muteFX = true
        mute();
    }

});

/**
 * This function sets the volume to the FX category
 * 
 * @param {Number} value Volume of the variable
 */
function fxSounds(value) {
    coinSound.volume = value;
    bottleSound.volume = value;
    deadChickenSmall.volume = value;
    deadChicken.volume = value;
    throw_bottle.volume = value;
    splash_bottle.volume = value;
    walking_sound.volume = value;
    jump_sound.volume = value;
    damage_sound.volume = value;
    clickSound.volume = value;
    win_sound.volume = value;
    lost_sound.volume = value;
    bossDead_Sound.volume = value;
    bossHit_Sound.volume = value;
    snore_sound.volume = value;
}

/**
 * This function sets the volume to the Sounds category
 * 
 * @param {Number} value Volume of the variable
 */
function songSounds(value) {
    menuSound.volume = value;
    gameSound.volume = value;
    bossFight_sound.volume = value;
}

/**
 * This function checks whether the game is in mute
 */
function playedSounds() {
    setInterval(() => {
        if (muteSound) {
            menuSound.pause();
            gameSound.pause();
        }
        if (menu && !muteSound) {
            menuSound.play();
        } else {
            menuSound.pause();
        }
        if (!stopGame && !muteSound && gameStart && !world.bossFightRun) {
            gameSound.play();
        } else {
            gameSound.pause();
        }
    }, 250);
}

/**
 * This function starts the Cclick sound in the menu and on the buttons
 */
function playedClickSound() {
    if (!muteFX) {
        clickSound.play();
    }
}