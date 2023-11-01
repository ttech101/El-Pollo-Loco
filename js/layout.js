muteToggle = false;
stopGame = true;
gameStart = false;
menu = false;
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
    playedClickSound()
    stopGame = true;
    menu = true
    document.getElementById('menu').classList.remove('dn');
    document.querySelector('.screen').style.filter = 'blur(2px)';
}


function closeMenu() {
    playedClickSound()
    if (!submenu) {
        menu = false;
        stopGame = false;
        document.getElementById('menu').classList.add('dn');
        document.querySelector('.screen').style.filter = 'blur(0px)';
    } else {
        //menuSound.pause();
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
    playedClickSound()
    document.getElementById('menu-menu').classList.add('dn');
    document.getElementById('menu-controls').classList.remove('dn');
    submenu = true;
    console.log('start controler ansicht');

}

function showStory() {
    playedClickSound()
    document.getElementById('menu-menu').classList.add('dn');
    document.getElementById('menu-story').classList.remove('dn');
    submenu = true;
    console.log('zeige story');
}

function showSettings() {
    playedClickSound()
    document.getElementById('menu-menu').classList.add('dn');
    document.getElementById('menu-settings').classList.remove('dn');
    submenu = true;

    console.log('zeige einstellungen');
}

function showCredits() {
    playedClickSound()
    document.getElementById('menu-menu').classList.add('dn');
    document.getElementById('menu-credit').classList.remove('dn');
    submenu = true;

    console.log('zeige Imprtressum');
}

function mainMenu() {
    clearAllIntervals();
    playedSounds();
    gameSound.pause();
    menuSound.pause();
    stopGame = true;
    gameStart = false;
    document.getElementById('canvas').classList.add('dn');
    document.getElementById('main-menu').classList.remove('dn');
    document.getElementById('menu-start-button').classList.remove('dn');
    closeMenu();
    console.log('hier ist richtug')
}

function gameOver() {
    if (!muteFX) {
        win_sound.play();
    }
    setTimeout(() => {
        clearAllIntervals();
        gameSound.pause();
        menuSound.pause();
        document.getElementById('main-menu').src = "./img/9_intro_outro_screens/game_over.png";
        document.getElementById('menu-start-button').classList.add('dn');
        document.getElementById('back-to-menu-button').classList.remove('dn');
        document.getElementById('main-menu').classList.remove('dn');
        document.getElementById('canvas').classList.add('dn');
    }, 1000);
}

function youLost() {
    if (!muteFX) {
        lost_sound.play();
    }
    setTimeout(() => {
        clearAllIntervals();
        gameSound.pause();
        menuSound.pause();
        bossFight_sound.pause();
        document.getElementById('main-menu').src = "./img/9_intro_outro_screens/you_lost.png";
        document.getElementById('menu-start-button').classList.add('dn');
        document.getElementById('back-to-menu-button').classList.remove('dn');
        document.getElementById('main-menu').classList.remove('dn');
        document.getElementById('canvas').classList.add('dn');
    }, 500);
}

function resteGameOver() {
    world.bossFightRun = false;
    stopGame = false;
    clearAllIntervals();
    startNewGame = false;
    document.getElementById('main-menu').src = "./img/9_intro_outro_screens/start/startscreen_2.png";
    document.getElementById('menu-start-button').classList.remove('dn');
    document.getElementById('back-to-menu-button').classList.add('dn');
}

//window.addEventListener('resize', function(event) {
//    setZoomToWindowWidth();
//}, true);
//
//function setZoomToWindowWidth() {
//    const windowWidth = window.innerWidth;
//    const baseWidth = 1920; // Die Basisbreite, die du als Referenz verwenden möchtest
//    const scaleFactor = windowWidth / baseWidth;
//  
//    // Du kannst den Zoom-Effekt mithilfe von CSS-Transform erreichen
//    document.body.style.transform = `scale(${scaleFactor})`;
//    //document.body.style.transformOrigin = 'top left';
//  }