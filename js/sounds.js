var volumeSliderSound = document.getElementById("volumeSliderSound");
var volumeValueSound = document.getElementById("volumeValueSound");
var volumeSliderFX = document.getElementById("volumeSliderFX");
var volumeValueFX = document.getElementById("volumeValueFX");
checkboxSound = document.getElementById("checkboxSound");
checkboxFX = document.getElementById("checkboxFX");
muteCheck = document.getElementById('mute');
muteSound = false;
muteFX = false;


// Funktion, die aufgerufen wird, wenn der Slider verschoben wird
volumeSliderSound.oninput = function () {
    console.log('lautstärke hier')
    volumeValueSound.innerHTML = this.value+' %';
    // Hier kannst du die Lautstärke an deine Anforderungen anpassen oder die Lautstärke auf einer Webseite steuern.
}


// Funktion, die aufgerufen wird, wenn der Slider verschoben wird
volumeSliderFX.oninput = function () {
    console.log('lautstärke hier')
    volumeValueFX.innerHTML = this.value+' %';
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
