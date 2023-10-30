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



// Funktion, die aufgerufen wird, wenn der Slider verschoben wird
volumeSliderSound.oninput = function () {
    console.log('lautstärke hier')
    volumeValueSound.innerHTML = this.value + ' %';
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
