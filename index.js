// Data and Variable
var audio = new Audio('assets/img/an-art-galery.mp3')
const buttonControl = document.getElementById("buttonControl")

// For Looping Audio
audio.loop = true

// For Play and Pause Audio
function playAudio() {
    if (audio.paused) {
        audio.play()
        buttonControl.innerHTML = "PAUSE ⏸️"
    } else {
        audio.pause()
        buttonControl.innerHTML = "PLAY ▶"
    }
}

