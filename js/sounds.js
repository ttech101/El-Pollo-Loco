let volumeSliderSound = document.getElementById("volumeSliderSound");
let volumeValueSound = document.getElementById("volumeValueSound");
let volumeSliderFX = document.getElementById("volumeSliderFX");
let volumeValueFX = document.getElementById("volumeValueFX");
let checkboxSound = document.getElementById("checkboxSound");
let checkboxFX = document.getElementById("checkboxFX");
let muteCheck = document.getElementById('mute');
let muteSound = false;
let muteFX = false;


const coinSound = new Audio('./audio/coin/scale-e6-14577.mp3');
const bottleSound = new Audio('audio/bottle/cork-85200.mp3');
const splashBottle = new Audio('audio/bottle/smashing-glass-6166.mp3');
const deadChickenSmall = new Audio('audio/small-chicken/squeaky-toy-1-6059.mp3');
const deadChicken = new Audio('audio/chicken/chicken-single-alarm-call-6056.mp3');
const throw_bottle = new Audio('audio/bottle/493224_10648717-lq.mp3');
const splash_bottle = new Audio('audio/bottle/smashing-glass-6166.mp3');
const walking_sound = new Audio('audio/character/107624_1656768-lq.mp3');
const jump_sound = new Audio('audio/character/456367_9498993-lq.mp3');
const damage_sound = new Audio('audio/character/486943_6142149-lq.mp3');

const menuSound = new Audio('./audio/the-surf-is-bad-tpdau-30152.mp3');
const gameSound = new Audio('./audio/chicken-pickin-country-4112.mp3');


// Funktion, die aufgerufen wird, wenn der Slider verschoben wird
volumeSliderSound.oninput = function () {
    console.log('lautstärke hier',this.value)
    volumeValueSound.innerHTML = this.value + ' %';
    menuSound.volume = this.value/100;
    // Hier kannst du die Lautstärke an deine Anforderungen anpassen oder die Lautstärke auf einer Webseite steuern.
}


// Funktion, die aufgerufen wird, wenn der Slider verschoben wird
volumeSliderFX.oninput = function () {
    console.log('lautstärke hier')
    volumeValueFX.innerHTML = this.value + ' %';
    // Hier kannst du die Lautstärke an deine Anforderungen anpassen oder die Lautstärke auf einer Webseite steuern.
}

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
