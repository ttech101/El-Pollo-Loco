let muteToggle = false;
stopGame = false;


function showFullscreen() {
    var element = document.getElementById('full-box');
    setFullScreen(element);
}

function setFullScreen(element) {
    if (element.requestFullScreen) {
        if (!document.fullScreen) {
            element.requestFullscreen();
            setFullScreenIcon();
        } else {
            document.exitFullScreen();
            setSreenIcon();
        }
    } else if (element.mozRequestFullScreen) {
        if (!document.mozFullScreen) {
            element.mozRequestFullScreen();
            setFullScreenIcon();
        } else {
            document.mozCancelFullScreen();
            setSreenIcon();
        }
    } else if (element.webkitRequestFullScreen) {
        if (!document.webkitIsFullScreen) {
            element.webkitRequestFullScreen();
            setFullScreenIcon();
        } else {
            document.webkitCancelFullScreen();
            setSreenIcon();
        }
    }
}


function setSreenIcon() {
    document.getElementById('fullscreen-img').src = './img/Icons/desktop/fullscreen_FILL0_wght400_GRAD0_opsz24.svg';
    document.querySelector('.screen').style.margin = '10%';
}

function setFullScreenIcon() {
    document.getElementById('fullscreen-img').src = './img/Icons/desktop/fullscreen_exit_FILL0_wght400_GRAD0_opsz24.svg';
    document.querySelector('.screen').style.margin = '0px';
}

function showMenu() {
    stopGame = true;
    document.getElementById('menu').classList.remove('dn');
    document.querySelector('.screen').style.filter = 'blur(2px)';
}

function closeMenu() {
    stopGame = false;
    document.getElementById('menu').classList.add('dn');
    document.querySelector('.screen').style.filter = 'blur(0px)';
}


function mute() {
    if (!muteToggle) {
        document.getElementById('mute').src = './img/Icons/desktop/volume_up_FILL0_wght400_GRAD0_opsz24.svg';
        muteToggle = true;
    } else {
        document.getElementById('mute').src = './img/Icons/desktop/volume_off_FILL0_wght400_GRAD0_opsz24.svg';
        muteToggle = false;
    }
}

function showControls(){
console.log('start controler ansicht');

}

function showStory(){
    console.log('zeige story');
}

function showSettings(){
    console.log('zeige einstellungen');
}

function showCredits(){
    console.log('zeige Imprtressum');
}

