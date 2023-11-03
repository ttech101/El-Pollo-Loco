muteToggle = false;         //creates the variable to control the mute function
stopGame = true;            //creates the variable to control the stopGame function
gameStart = false;          //creates the variable to control the gameStart function
menu = false;               //creates the variable to control the menu function
submenu = false;            //creates the variable to control the submenu function

/**
 * This function starts the full screen mode
 */
function showFullscreen() {
    var element = document.getElementById('full-box');
    setFullScreen(element);
}

/**
 * In this function the browser is queried which is to be set to full screen mode
 * 
 * @param {DIV-Container} element In this parameter, the div container is transferred which is to be set to fullbid
 */
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

/**
 * This function changes the icon for the non full screen mode and the margin to 10% 
 */
function setSreenIcon() {
    document.getElementById('fullscreen-img').src = './img/Icons/desktop/fullscreen_FILL0_wght400_GRAD0_opsz24.svg';
    document.querySelector('.screen').classList.add('m-10');
}

/**
 * This function changes the icon for full screen mode and the margin width to full screen
 */
function setFullScreenIcon() {
    document.getElementById('fullscreen-img').src = './img/Icons/desktop/fullscreen_exit_FILL0_wght400_GRAD0_opsz24.svg';
    document.querySelector('.screen').classList.remove('m-10');

}

/**
 * This function opens the meun
 */
function showMenu() {
    document.getElementById('hud-touch').classList.add('dn')
    playedClickSound()
    stopGame = true;
    menu = true
    document.getElementById('menu').classList.remove('dn');
    document.querySelector('.screen').style.filter = 'blur(2px)';
}

/**
 * This function close the meun
 */
function closeMenu() {
    playedClickSound()
    if (!submenu) {
        menu = false;
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

/**
 * This function controls a toggle function for the volume mute switch
 * 
 * @param {Sting} id This shows whether it is a click on the mouse button
 */
function mute(id) {
    muteMenuChecked(id);
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

/**
 * In this function, the menu mute function would be checked and set
 * 
 * @param {String} id This shows whether it is a click on the mouse button
 */
function muteMenuChecked(id) {
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
}

/**
 * This function opens the control submenu
 */
function showControls() {
    playedClickSound()
    document.getElementById('menu-menu').classList.add('dn');
    document.getElementById('menu-controls').classList.remove('dn');
    submenu = true;
}

/**
 * This function opens the story submenu
 */
function showStory() {
    playedClickSound()
    document.getElementById('menu-menu').classList.add('dn');
    document.getElementById('menu-story').classList.remove('dn');
    submenu = true;
}

/**
 * This function opens the settings submenu
 */
function showSettings() {
    playedClickSound()
    document.getElementById('menu-menu').classList.add('dn');
    document.getElementById('menu-settings').classList.remove('dn');
    submenu = true;
}

/**
 * This function opens the Credits submenu
 */
function showCredits() {
    playedClickSound()
    document.getElementById('menu-menu').classList.add('dn');
    document.getElementById('menu-credit').classList.remove('dn');
    submenu = true;
}

/**
 * This function opens the Menu submenu
 */
function mainMenu() {
    clearAllIntervals();
    playedSounds();
    snore_sound.pause();
    gameSound.pause();
    menuSound.pause();
    stopGame = true;
    gameStart = false;
    document.getElementById('canvas').classList.add('dn');
    document.getElementById('main-menu').classList.remove('dn');
    document.getElementById('menu-start-button').classList.remove('dn');
    closeMenu();
    document.getElementById('hud-touch').classList.add('dn')
}

/**
 * This function controls the sounds and the resetting of the intervals after the end of the game
 */
function gameOver() {
    snore_sound.pause();
    gameStart = false;
    if (!muteFX) {
        win_sound.play();
    }
    gameOverTimeout();
}

/**
 * This function resets the intervals and displays the winning image
 */
function gameOverTimeout() {
    setTimeout(() => {
        clearAllIntervals();
        gameSound.pause();
        menuSound.pause();
        document.getElementById('main-menu').src = "./img/9_intro_outro_screens/game_over.png";
        document.getElementById('menu-start-button').classList.add('dn');
        document.getElementById('back-to-menu-button').classList.remove('dn');
        document.getElementById('main-menu').classList.remove('dn');
        document.getElementById('canvas').classList.add('dn');
        document.getElementById('hud-touch').classList.add('dn')
    }, 1000);
}

/**
 * This function controls the sounds and the resetting of the intervals after the lost game
 */
function youLost() {
    snore_sound.pause();
    gameStart = false;
    if (!muteFX) {
        lost_sound.play();
    }
    youLostTimeout();
}

/**
 * This function resets the intervals and displays the lost image
 */
function youLostTimeout(){
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
    }, 1400);

}

/**
 * This function resets the entire game
 */
function resteGameOver() {
    world.bossFightRun = false;
    stopGame = false;
    clearAllIntervals();
    startNewGame = false;
    document.getElementById('main-menu').src = "./img/9_intro_outro_screens/start/startscreen_2.png";
    document.getElementById('menu-start-button').classList.remove('dn');
    document.getElementById('back-to-menu-button').classList.add('dn');
}

/**
 * This function checks whether the display is a small screen
 */
function checkScreenWidth() {
    setInterval(() => {

        if (window.innerWidth < 700 || window.innerHeight < 500) {
            if (stopGame) {
                document.getElementById('hud-touch').classList.add('dn')
            } else if (gameStart) {
                document.getElementById('hud-touch').classList.remove('dn')
            }
        } else {
            document.getElementById('hud-touch').classList.add('dn')
        }
    }, 200);
}

/**
 * This event listener checks the ESC key after exiting full screen mode
 */
window.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        document.querySelector('.screen').classList.add('m-10');
    }
});
