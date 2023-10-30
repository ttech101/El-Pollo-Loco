muteToggle = false;
stopGame = false;
submenu = false;


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
    if (!submenu) {
        stopGame = false;
        document.getElementById('menu').classList.add('dn');
        document.querySelector('.screen').style.filter = 'blur(0px)';
    } else {
        document.getElementById('menu-menu').classList.remove('dn');
        document.getElementById('menu-controls').classList.add('dn');
        document.getElementById('menu-story').classList.add('dn');
        document.getElementById('menu-settings').classList.add('dn');
        document.getElementById('menu-credit').classList.add('dn');
        submenu = false;
    }
}


function mute(id) {
    if (id == 'click' && !muteToggle) {
        muteSound = true;
        document.getElementById("checkboxSound").checked = false;
        muteFX = true;
        document.getElementById("checkboxFX").checked = false;
        muteToggle = true
        document.getElementById('mute').src = './img/Icons/desktop/volume_off_FILL0_wght400_GRAD0_opsz24.svg';
    } else
        if (id == 'click' && muteToggle && muteSound && muteFX) {
            muteSound = false;
            document.getElementById("checkboxSound").checked = true;
            muteFX = false;
            document.getElementById("checkboxFX").checked = true;
            muteToggle = false
            document.getElementById('mute').src = './img/Icons/desktop/volume_up_FILL0_wght400_GRAD0_opsz24.svg';
        }
    if (muteSound && !muteFX) {
        muteSound = true;
        muteToggle = false
        document.getElementById('mute').src = './img/Icons/desktop/volume_up_FILL0_wght400_GRAD0_opsz24.svg';
    }
    if (!muteSound && muteFX) {
        muteFX = true;
        muteToggle = false
        document.getElementById('mute').src = './img/Icons/desktop/volume_up_FILL0_wght400_GRAD0_opsz24.svg';
    }
    if (muteSound && muteFX) {
        muteToggle = true;
        document.getElementById('mute').src = './img/Icons/desktop/volume_off_FILL0_wght400_GRAD0_opsz24.svg';
    }
}




function showControls() {
    document.getElementById('menu-menu').classList.add('dn');
    document.getElementById('menu-controls').classList.remove('dn');
    submenu = true;
    console.log('start controler ansicht');

}

function showStory() {
    document.getElementById('menu-menu').classList.add('dn');
    document.getElementById('menu-story').classList.remove('dn');
    submenu = true;
    console.log('zeige story');
}

function showSettings() {
    document.getElementById('menu-menu').classList.add('dn');
    document.getElementById('menu-settings').classList.remove('dn');
    submenu = true;

    console.log('zeige einstellungen');
}

function showCredits() {
    document.getElementById('menu-menu').classList.add('dn');
    document.getElementById('menu-credit').classList.remove('dn');
    submenu = true;

    console.log('zeige Imprtressum');
}

