var video = document.getElementById("video"),
    playback = document.getElementById("play"),
    mute = document.getElementById("mute"),
    barra = document.getElementById("volumen");

var oldvolume = 1;
// Listener para play/pause
playback.addEventListener( "click", function(e) {
    e.preventDefault();
    if (video.paused) {
        video.play();
        playback.innerHTML = "Pause";
    } else {
        video.pause();
        playback.innerHTML = "Play";
    }
});

// Listener para mute/unmute
mute.addEventListener( "click", function(e) {
    e.preventDefault();
    if (video.muted) {
        video.muted = false;
        mute.innerHTML = "Mute";
        video.volume = oldvolume;
        barra.value = oldvolume;
    } else {
        video.muted = true;
        mute.innerHTML = "Unmute";
        oldvolume = video.volume;
        video.volume = 0;
        barra.value = 0;
    }
});

// Listener para el volumen
barra.addEventListener("change", function(e){
    video.volume = e.target.value;
}, true);